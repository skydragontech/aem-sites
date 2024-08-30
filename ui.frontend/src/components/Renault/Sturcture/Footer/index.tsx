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
// import icons
import {iconTags as faceBookIcon} from '../../../../assets/icons/facebook'
import {iconTags as linkedinIcon} from '../../../../assets/icons/linkedIn'
import {iconTags as twitterIcon} from '../../../../assets/icons/twitter'
import {iconTags as youTubeIcon} from '../../../../assets/icons/youTube'
import {iconTags as instagramIcon} from '../../../../assets/icons/instagram'

require('./styles.css')

export interface ColumnControlProps extends CoreContainerProperties {
    columnLayout: string;
    socialIcons: [string];
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

    iconMaps = {
        facebook: {icon: faceBookIcon, url: 'https://www.facebook.com/renault.trucks.uk/'},
        twitter: {icon: twitterIcon, url: 'https://twitter.com/renault.trucks.uk/'},
        instagram: {icon: instagramIcon, url: 'https://www.instagram.com/renault.trucks.uk/'},
        linkedIn: {icon: linkedinIcon, url: 'https://www.linkedin.com/renault.trucks.uk/'},
        youTube: {icon: youTubeIcon, url: 'https://www.youTube.com/renault.trucks.uk/'},
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
                            {this.props.socialIcons && <ul className={`clearfix nav social-menu col-sm-12 col-md-5`}>
                                {[...this.props.socialIcons].map((socialItem, index) => {
                                    // @ts-ignore
                                    const iconData = (this.iconMaps)[socialItem];
                                    return (<>
                                        <li className={"nav-item"}>
                                            <a href={iconData.url} className={'nav-link'}>
                                                {iconData.icon}
                                            </a>
                                        </li>
                                        <li className={`separator`}></li>
                                    </>)
                                })}
                            </ul>}
                            <div className="block-contact-us-button">
                                <a className="contact-link"
                                   href="https://www.renault-trucks.co.uk/l/contact-renault-trucks"
                                   title="Contact us">Contact us</a>
                                <div className="go-to">
                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path className="stroke" d="M6.7998 19.6914L16.1498 10.3499L6.7998 0.999904"
                                              stroke="white" stroke-width="1.5"></path>
                                        <path className="stroke" d="M3.9865 17.7959L9.945 11.8544L-2.59711e-07 11.8544"
                                              stroke="white" stroke-width="1.5"></path>
                                        <path className="stroke" d="M0 8.86255L9.962 8.86255L3.9865 2.90405"
                                              stroke="white"
                                              stroke-width="1.5"></path>
                                    </svg>
                                </div>
                            </div>
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
        const isEmpty = FooterConfig.isEmpty(this.props);

        return (
            <footer {...this.columnControlProps} style={{height: '30rem'}}>
                {!isEmpty && this.configuredColumns()}
            </footer>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/structure/footer')(withStandardBaseCssClass(Footer, 'cmp-columncontrol'), FooterConfig);
