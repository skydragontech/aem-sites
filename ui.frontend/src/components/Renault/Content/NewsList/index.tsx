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

        return <div className={'field__item'}>
            <div className={'paragraph paragraph--type--application-grid paragraph--view-mode--default'}>
                <div className={'inner-application-grid container'}>
                    <div
                        className={'field field--name-field-application-view field--type-viewsreference field--label-hidden field__item'}>
                        <div className={'views-element-container'}>
                            <div className={'view-content'}>
                                <div className={'views-infinite-scroll-content-wrapper clearfix'}>
                                    {[...props.news].map((value, index) => {
                                        return <>{this.item(value)}</>;
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    }

    item(item: any) {
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

    render() {
        const isEmpty = NewsListConfig.isEmpty(this.props);
        console.log(this.props)
        return (
            <>{!isEmpty && this.wrapper(this.props)}</>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/content/newsgrid')(NewsList, NewsListConfig);
