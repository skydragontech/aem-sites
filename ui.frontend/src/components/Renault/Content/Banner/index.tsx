import React, {Component} from 'react';
import {MapTo} from '@adobe/aem-react-editable-components';

const BannerEditConfig = {
    emptyLabel: 'Banner',

    isEmpty: function (props: any) {
        return !props || !props.src || props.src.trim().length < 1;
    }
};

class Banner extends Component {
    render() {
        if (BannerEditConfig.isEmpty(this.props)) {
            return null;
        }
        // @ts-ignore
        const {bannerText, src, bannerLink, bannerTitle, alt} = this.props;
        return (
            <div
                className="field field--name-field-hero field--type-entity-reference-revisions field--label-hidden field__item">
                <div className={'paragraph paragraph--type--highlight paragraph--view-mode--default'}>
                    <div
                        className={'field field--name-field-content field--type-entity-reference field--label-hidden field__items'}>
                        <div className={'field__item'}>
                            <div className={'node node--type-editorial node--view-mode-homepage-hero ds-1col clearfix'}>
                                <div className={'hero-edito'}>
                                    <div className={'hero-edito-wrapper'}>
                                        <div className={'hero-edito-info long-title'}>
                                            <div className={'primary-info'}>
                                                <p className={'field field--name-field-type-of-edito field--type-entity-reference field--label-hidden field__item'}>{bannerTitle}</p>
                                                <h2 className="field--name-node-title">
                                                    <a href={bannerLink}
                                                       title={bannerText}>{bannerText}</a>
                                                </h2>
                                            </div>
                                            <div
                                                className="field field--name-field-link-text field--type-string field--label-hidden cta-highlight field__item">
                                                <p>Read more</p>
                                                <div className="go-to">
                                                    <svg width="18" height="21" viewBox="0 0 18 21" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <path className="stroke"
                                                              d="M6.7998 19.6914L16.1498 10.3499L6.7998 0.999904"
                                                              stroke="white"
                                                              strokeWidth="1.5"></path>
                                                        <path className="stroke"
                                                              d="M3.9865 17.7959L9.945 11.8544L-2.59711e-07 11.8544"
                                                              stroke="white" strokeWidth="1.5"></path>
                                                        <path className="stroke"
                                                              d="M0 8.86255L9.962 8.86255L3.9865 2.90405"
                                                              stroke="white" strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div
                                        className={'field field--name-field-main-image field--type-entity-reference field--label-hidden field__item'}>
                                        <div
                                            className={'field field--name-field-media-image field--type-image field--label-hidden field__item'}>
                                            <picture>
                                                <img src={src} alt={alt}/>
                                            </picture>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/content/banner')(Banner, BannerEditConfig);
