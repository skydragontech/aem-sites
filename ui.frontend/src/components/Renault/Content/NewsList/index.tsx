import {Component} from "react";
import React from "react";
import {MapTo} from "@adobe/aem-react-editable-components";

const NewsListConfig = {
    emptyLabel: 'News List',

    isEmpty(props: any) {
        return !props;
    },
};

class NewsList extends Component {

    constructor(props: any) {
        super(props);
    }

    wrapper(props: any) {
        console.log(props)
        return <div className={'field__item'}>
            {this.style1(props)}
            {this.style2(props)}
        </div>
    }

    style1(props: any) {
        function item(item: any) {
            return <div className={'views-row'}>
                <div className={'paragraph paragraph--type--application paragraph--view-mode--default'}>
                    <div
                        className={'field field--name-field-content field--type-entity-reference field--label-hidden field__items'}>
                        <div className={'field__item'}>
                            <div className={'media'}>
                                <div
                                    className={'field field--name-field-main-image field--type-entity-reference field--label-hidden field__item'}>
                                    <div
                                        className={'field field--name-field-media-image field--type-image field--label-hidden field__item'}>
                                        <picture>
                                            <img src={item.image.fileReference} alt={item.image.alt}/>
                                        </picture>
                                    </div>
                                </div>
                                <div className={'media-body'}>
                                    <div
                                        className={'field field--name-node-title field--type-ds field--label-hidden field__item'}>
                                        <p>
                                            <a href={item.linkUrl}>{item.description}</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        return <div className={'paragraph paragraph--type--application-grid paragraph--view-mode--default'}>
            <div className={'inner-application-grid container'}>
                <div
                    className={'field field--name-field-application-view field--type-viewsreference field--label-hidden field__item'}>
                    <div className={'views-element-container'}>
                        <div className={'view-content'}>
                            <div className={'views-infinite-scroll-content-wrapper clearfix'}>
                                {[...props.news].map((value, index) => {
                                    return <div className={'views-row'} key={index}>{item(value)}</div>;
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    style2(props: any) {
        function item(item: any) {
            return <div className={'node node--type-news node--view-mode-related-content ds-2col clearfix'}>
                <div className={'group-left'}>
                    <div
                        className={'field field--name-field-main-image field--type-entity-reference field--label-hidden field__item'}>
                        <div
                            className={'field field--name-field-media-image field--type-image field--label-hidden field__item'}>
                            <picture>
                                <img height={'158'} width={'107'} src={item.image.fileReference}
                                     alt={item.image.alt}/>
                            </picture>
                        </div>
                    </div>
                </div>
                <div className={'group-right'}>
                    <div className={'card-title'}>
                        <p className="field field--name-field-type-of-news field--type-entity-reference field--label-hidden field__item">Press
                            release</p>
                        <div className={'field--name-node-title'}>
                            <a href={item.linkUrl}>{item.description}</a>
                        </div>
                    </div>
                    <p className={'field field--name-node-post-date field--type-ds field--label-hidden field__item'}>{item.modifyDate}</p>
                </div>
            </div>
        }

        return <div className={'paragraph paragraph--type--latest-news paragraph--view-mode--default full-title'}>
            {props.newsTitle &&
                <h2 className="field field--name-field-title field--type-string field--label-hidden component-title">
                    {props.newsTitle}
                </h2>}
            <div
                className={'field field--name-field-view field--type-viewsreference field--label-hidden field__item'}>
                <div className={'views-element-container'}>
                    <div className={'view view-latest-news'}>
                        <div className={'view-content row'}>
                            {[...props.news].map((value, index) => {
                                return <div className={'views-row'} key={index}>{item(value)}</div>;
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }


    render() {
        const isEmpty = NewsListConfig.isEmpty(this.props);
        return (
            <>{!isEmpty && this.wrapper(this.props)}</>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/content/newsgrid')(NewsList, NewsListConfig);
