import React from 'react';
import {MapTo, ComponentMapping, Container} from '@adobe/aem-react-editable-components';
import {
    CoreContainerProperties, CoreContainerState, withStandardBaseCssClass, CoreContainerItem,
} from '@adobe/aem-core-components-react-spa';
import logo_renault from '../../../../assets/icons/logo_renault.svg'
import WrapperDiv from './styles';

export interface ColumnControlProps extends CoreContainerProperties {
    columnLayout: string;
    cqItems: { [key: string]: CoreContainerItem };
}

const FooterConfig = {
    emptyLabel: 'Foot Columns',

    isEmpty(props: ColumnControlProps) {
        return !props || !props.columnLayout;
    },
};

const ColumnLayoutToNumOfColumnsMap: { [key: string]: number } = {
    '--50': 2,
    '--75-25': 2,
    '--25-75': 2,
    '--33': 3,
    '--25': 4,
};

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
        const numOfColumnsToRender = ColumnLayoutToNumOfColumnsMap[this.props.columnLayout];

        return (<div className={"container-fluid"}>
                <section className={"region region-footer-first col-sm-12 col-md-2"}>
                    <div className={`block block-fixed-block-content block-fixed-block-contentfooter-logo`}>
                        <div className={`content`}>
                            <img src={logo_renault} alt=""/>
                        </div>
                    </div>
                    <div className={`block block-fixed-block-content block-fixed-block-contentcopyright`}>
                        <div className={`content`}>
                            <div className={`clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item`}>
                                <p>copyright 2024 Renault Trucks</p>
                            </div>

                        </div>
                    </div>
                </section>
                <section className={"region region-footer-second col-sm-12 col-md-9 offset-md-1"}>
                    <nav className={"block block-menu navigation menu--footer"}>
                        <ul className={"navbar-footer"}></ul>
                        {
                            this.renderFirstNColumns(numOfColumnsToRender)
                        }
                    </nav>
                </section>
            </div>
        );
    }

    renderFirstNColumns(numOfColumns: number) {
        return this.childComponents.slice(0, numOfColumns).map((column, index) =>
            <li key={index}
                className={`nav-item menu-item--expanded dropdown main-footer-item`}>
                <button className={"label-footer-item dropdown-toggle"}>Renault Trucks other websites</button>
                {column}
            </li>
        );
    }

    get columnControlProps() {
        const attrs = this.containerProps;
        attrs.className = `${attrs.className} ${this.props.baseCssClass}`;
        attrs['data-cmp-is'] = 'foot_column';
        return attrs;
    }

    render() {
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
