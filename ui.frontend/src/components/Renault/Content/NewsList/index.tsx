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
            {this.style3(props)}
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
            <div className={'field field--name-field-view field--type-viewsreference field--label-hidden field__item'}>
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
            <div
                className="field field--name-field-see-the-latest-news-link field--type-link field--label-hidden field__item">
                <a href="/static/news-press-releases" title="See the latest news">See the latest news</a>
            </div>
        </div>;
    }

    style3(props: any) {
        function item(item: any) {
            return <div className={'paragraph paragraph--type--highlight paragraph--view-mode--alt'}>
                <div
                    className={'field field--name-field-content field--type-entity-reference field--label-hidden field__items'}>
                    <div className={'field__item'}>
                        <div className={'node node--type-editorial node--view-mode-teaser ds-1col clearfix'}>
                            <div className={'hero-edito background-'}>
                                <div className={'hero-edito-wrapper'}>
                                    <div className={'hero-edito-info'}>
                                        <div className={'primary-info'}>
                                            <p className="field field--name-field-type-of-edito field--type-entity-reference field--label-hidden field__item">Report</p>
                                            <div
                                                className="field field--name-node-title field--type-ds field--label-hidden field__item">
                                                <a href={item.linkUrl}
                                                   hrefLang="en-gb">{item.description}</a>
                                            </div>
                                            {(item.tags && item.tags.length > 0) && <div
                                                className="field field--name-field-theme field--type-entity-reference field--label-hidden field__items">
                                                {[...item.tags].map((value, index) => {
                                                    return <p className="field__item"
                                                              key={index + 'tag'}>{value}</p>;
                                                })}
                                            </div>}

                                        </div>
                                        <div
                                            className={'field field--name-field-link-text field--type-string field--label-hidden cta-highlight field__item'}>
                                            <p>Read More</p>
                                            <div className="go-to">
                                                <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="stroke"
                                                          d="M6.7998 19.6914L16.1498 10.3499L6.7998 0.999904"
                                                          stroke="white" strokeWidth="1.5"></path>
                                                    <path className="stroke"
                                                          d="M3.9865 17.7959L9.945 11.8544L-2.59711e-07 11.8544"
                                                          stroke="white" strokeWidth="1.5"></path>
                                                    <path className="stroke" d="M0 8.86255L9.962 8.86255L3.9865 2.90405"
                                                          stroke="white" strokeWidth="1.5"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div
                                    className="field field--name-field-main-image field--type-entity-reference field--label-hidden field__item">
                                    <div>
                                        <div
                                            className="field field--name-field-media-image field--type-image field--label-hidden field__item">
                                            <picture>
                                                <img width="375" height="482" alt={item.image.alt}
                                                     loading="lazy" className=" lazyloaded"
                                                     src={item.image.fileReference}/>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }

        return <div className={'paragraph paragraph--type--highlight-slideshow paragraph--view-mode--default'}>
            <div className={'inner-slideshow container'}>
                <div className={'swiper-container highlight-slideshow'}>
                    <div
                        className={'field field--name-field-reference-paragraph field--type-entity-reference-revisions field--label-hidden swiper-wrapper field__items'}>
                        {[...props.news].map((value, index) => {
                            return <div className={'field__item swiper-slide'} key={index}>{item(value)}</div>;
                        })}
                    </div>
                </div>
            </div>
        </div>
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
