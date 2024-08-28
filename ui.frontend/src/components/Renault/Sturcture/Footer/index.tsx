import React from 'react';
import {ComponentMapping, Container, MapTo} from '@adobe/aem-react-editable-components';
import {
    CoreContainerItem,
    CoreContainerProperties,
    CoreContainerState,
    withStandardBaseCssClass,
} from '@adobe/aem-core-components-react-spa';
import logo_renault from '../../../../assets/icons/logo_renault.svg'
import WrapperDiv from './styles';

require('./styles.css')

export interface ColumnControlProps extends CoreContainerProperties {
    columnLayout: string;
    cqItems: { [key: string]: CoreContainerItem };
    copyright: string;
}

const FooterConfig = {
    emptyLabel: 'Foot Columns',

    isEmpty(props: ColumnControlProps) {
        return !props || !props.columnLayout;
    },
};
const NumberTitleMap = {

    getData(props: any) {
        return [
            {key: `firstLinks`, title: `Renault Trucks other websites`, listItems: props.firstLinks},
            {key: `secondLinks`, title: `Legal`, listItems: props.secondLinks},
            {key: `thirdLinks`, title: `Privacy`, listItems: props.thirdLinks}
        ];
    }
}

class Footer extends Container<ColumnControlProps, CoreContainerState> {
    constructor(props: ColumnControlProps) {
        super(props);

        this.state = {
            componentMapping: this.props.componentMapping || ComponentMapping,
        };
    }

    /**
     * Render the configured number of columns
     * @returns columns markup
     */
    configuredColumns() {
        const numOfColumnsToRender: number = Number(this.props.columnLayout);
        return (<div className={"container-fluid"}>
                <section className={"region region-footer-first col-sm-12 col-md-2"}>
                    <div className={`block block-fixed-block-content block-fixed-block-contentfooter-logo`}>
                        <div className={`content`}>
                            <img src={logo_renault} alt=""/>
                        </div>
                    </div>
                    <div className={`block block-fixed-block-content block-fixed-block-contentcopyright`}>
                        <div className={`content`}>
                            <div
                                className={`clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item`}>
                                <p>{this.props.copyright}</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={"region region-footer-second col-sm-12 col-md-9 offset-md-1"}>
                    <nav className={"block block-menu navigation menu--footer"}>
                        <ul className={"navbar-footer"}>
                            {this.renderFirstNColumns(numOfColumnsToRender)}
                        </ul>
                    </nav>
                </section>
            </div>
        );
    }

    renderFirstNColumns(numOfColumns: number) {
        return this.childComponents.slice(0, numOfColumns).map((column, index) => {
                let columnList = []
                if (column.props.cqItems.list) {
                    columnList = column.props.cqItems.list.items
                }

                return <li key={index}
                           className={`nav-item menu-item--expanded dropdown main-footer-item`}>
                    <button
                        className={"label-footer-item dropdown-toggle"}>{NumberTitleMap.getData(this.props)[index].title}</button>
                    {this.props.isInEditor ? <WrapperDiv>{column}</WrapperDiv> : <ul className={`dropdown-menu`}>
                        {columnList.map((columnItem: {
                            title: React.ReactNode;
                        }, index: string | number | null | undefined) => {
                            return <li key={index} className={`dropdown-item dropdown main-footer-item`}>
                                <a>{columnItem.title}</a>
                            </li>
                        })}
                        {NumberTitleMap.getData(this.props)[index].listItems.map((columnItem: {
                            webUrl: string | undefined;
                            webTitle: React.ReactNode;
                        }, index: string | number | null | undefined) => {
                            // @ts-ignore
                            return <li key={index} className={`dropdown-item dropdown main-footer-item`}>
                                <a href={columnItem.webUrl}>{columnItem.webTitle}</a>
                            </li>
                        })}
                    </ul>}

                </li>
            }
        );
    }

    get columnControlProps() {
        const attrs = this.containerProps;
        attrs.className = `${attrs.className} ${this.props.baseCssClass}`;
        attrs['data-cmp-is'] = 'foot_column';
        return attrs;
    }

    render() {
        console.log(this.props)
        const isEmpty = FooterConfig.isEmpty(this.props);

        return (
            <footer {...this.columnControlProps}>
                {!isEmpty && this.configuredColumns()}
            </footer>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/structure/footer')(withStandardBaseCssClass(Footer, 'cmp-columncontrol'), FooterConfig);
