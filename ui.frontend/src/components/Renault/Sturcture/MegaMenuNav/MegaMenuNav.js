import {
    MapTo
} from '@adobe/aem-react-editable-components';
import {Component} from "react";
import {MegaMenuItemTemplate} from "./MegaMenuItem";
require('./MegaMenuNav.css')

const MegaMenuNavConfig = {
    emptyLabel: 'MegaMenuNav',

    isEmpty: function (props) {
        return false;
    }
};

/**
 * Text React component
 */
class MegaMenuNav extends Component {
    handleEventClick(){

    };
    get preHeader() {
        return <>
            <div className="preheader">
                <section className="row region region-top-header">
                    <div id="block-welcometext"
                         className="block block-fixed-block-content block-fixed-block-contentwelcome-text">
                        <div className="content">
                            <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                <p>Welcome to&nbsp;Renault Trucks UK</p></div>
                        </div>
                    </div>
                    <div id="block-linktoallourwebsitespage" className="block block-fixed-block-content block-fixed-block-contentlink-to-all-our-websites-page">
                        <div className="content">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <g fill="none" fillRule="evenodd">
                                    <g className="stroke" stroke="#FFF" strokeWidth="1.5">
                                        <g>
                                            <path
                                                d="M21 12c0 4.971-4.029 9-9 9s-9-4.029-9-9 4.029-9 9-9 9 4.029 9 9zm-9-9c2.761 0 5 4.029 5 9s-2.239 9-5 9-5-4.029-5-9 2.239-9 5-9zm-9 9h18m-9-9v18"
                                                transform="translate(-1088 -12) translate(1088 12)"></path>
                                        </g>
                                    </g>
                                </g>
                            </svg>
                            <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                <p><a href="https://www.renault-trucks.com" rel=" noopener" target="_blank">Our websites</a></p></div>
                        </div>
                    </div>
                    <div id="block-linktocontactmenu" className="block block-fixed-block-content block-fixed-block-contentlink-to-contact-menu">
                        <button className="contact-us-btn global-link collapsed" type="button"
                                ref="#block-contact-us" aria-expanded="false" aria-haspopup="true">
                            Open contact menu
                            <div className="content">
                                <div className="clearfix text-formatted field field--name-body field--type-text-with-summary field--label-hidden field__item">
                                    <p><a href="#">Contact</a></p></div>
                            </div>
                        </button>
                    </div>
                    <div id="block-searchblock" className="block block-rt-search-bar block-rt-search-block">
                        <div className="content">
                            <button id="searchTrigger" className="btn trigger-search" type="button" aria-expanded="false" aria-controls="searchCollapse">
                                <div className="opener">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <circle className="stroke" cx="8.5" cy="9.5" r="6.5" stroke="white"
                                                strokeWidth="1.5"></circle>
                                        <path className="stroke" d="M13.5 13L20 19.5" stroke="white"
                                              strokeWidth="1.5"></path>
                                        <path className="stroke" d="M12 15.5L18 21.5" stroke="white"
                                              strokeWidth="1.5"></path>
                                        <path className="stroke" d="M5 10C5 7.791 6.791 6 9 6" stroke="white"
                                              strokeWidth="1.5"></path>
                                    </svg>
                                </div>
                                <div className="closing">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                        <g fill="none" fillRule="evenodd">
                                            <g stroke="#242424" strokeWidth="1.5">
                                                <g>
                                                    <path className="stroke" d="M6 5l13 13M6 18L19 5"
                                                          transform="translate(-327 -24) translate(327 24)"></path>
                                                </g>
                                            </g>
                                        </g>
                                    </svg>
                                </div>
                            </button>
                            <div className="form collapse" id="searchCollapse">
                                <form className="rt-search-form"  action="/" id="rt-search-form" acceptCharset="UTF-8">
                                    <fieldset
                                        className="js-form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search form-group">
                                        <label htmlFor="edit-search" className="js-form-required form-required">Looking
                                            for a specific content ?</label>
                                        <input placeholder="Search" type="text"
                                               id="edit-search" name="search"  size="60" maxLength="128"
                                               className="required form-control" required="required"
                                               aria-required="true"/>
                                    </fieldset>
                                    <input autoComplete="off"
                                           data-drupal-selector="form-tnfmvaxadm3somc6zljvdelkbpx2shkvhyvulkta124"
                                           type="hidden" name="form_build_id"
                                           value="form-tnfMVaxadm3somC6zLJvDelKbpX2SHkVHYvuLKTa124"
                                           className="form-control"/>
                                    <input data-drupal-selector="edit-rt-search-form" type="hidden" name="form_id"
                                           value="rt_search_form" className="form-control"/>
                                    <div className="form-actions js-form-wrapper form-group" id="edit-actions">
                                        <button data-twig-suggestion="search_submit"
                                                className="search-button button button--primary js-form-submit form-submit btn btn-primary"
                                                data-drupal-selector="edit-submit" type="submit" id="edit-submit"
                                                name="op" value="Search">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <circle className="stroke" cx="8.5" cy="9.5" r="6.5" stroke="white"
                                                        strokeWidth="1.5"></circle>
                                                <path className="stroke" d="M13.5 13L20 19.5" stroke="white"
                                                      strokeWidth="1.5"></path>
                                                <path className="stroke" d="M12 15.5L18 21.5" stroke="white"
                                                      strokeWidth="1.5"></path>
                                                <path className="stroke" d="M5 10C5 7.791 6.791 6 9 6" stroke="white"
                                                      strokeWidth="1.5"></path>
                                            </svg>
                                            Search
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>;
    }

    get navigation() {
        return <>
            <header id={"header"} className={'header'} role={'banner'} aria-label={'Site header'}>
                <div className={'wrapper-header'}>
                    <div className="site-brand">
                        <div className="caret-wrapper">
                            <svg width="13" height="70" viewBox="0 0 13 70" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_684_4924)">
                                    <path d="M12.4428 35L0 58.2943V11.7057L12.4428 35Z" fill="#E3021B"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_684_4924">
                                        <rect width="12.408" height="70" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <a href="/" title="Home" rel="home" className="navbar-brand">
                            <svg viewBox="0 0 120 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M12.5639 0.705566L0.11377 23.9858L12.5639 47.2661H16.1225L28.5726 23.9858L20.5683 9.01894L18.789 12.3457L25.0164 23.9858L14.3432 43.9393L3.66996 23.9858L16.1225 0.705566H12.5639ZM19.6787 0.705566L7.22849 23.9858L15.2328 38.9527L17.0098 35.626L10.7847 23.9858L21.4579 4.03232L32.1288 23.9858L19.6787 47.2661H23.2348L35.6873 23.9858L23.2348 0.705566H19.6787ZM50.5138 14.53H47.5077V17.0748H50.5138C51.4596 17.0748 51.97 16.5363 51.97 15.8036C51.97 15.0708 51.4596 14.53 50.5138 14.53ZM54.7582 21.9139H52.1081L50.5021 18.95H47.5077V21.9139H45.094V12.6547H50.8392C53.178 12.6547 54.4399 13.9915 54.4399 15.8012C54.4399 17.0139 53.8733 18.0136 52.7964 18.5427L54.7582 21.9139ZM91.1372 12.6571V18.1096C91.1372 20.8955 93.1904 22.0591 95.9131 22.0591C98.6358 22.0591 100.689 20.8955 100.689 18.1096V12.6571H98.2589V18.1096C98.2589 19.0484 97.9124 20.1557 95.9131 20.1557C93.9138 20.1557 93.5673 19.0484 93.5673 18.1096V12.6571H91.1372ZM59.4803 20.0293H65.1131V21.9139H57.0713V12.6571H64.9609V14.5417H59.4803V16.3467H64.488V18.1236H59.4803V20.0293ZM111.067 20.0293H105.821V12.6571H103.414V21.9139H111.067V20.0293ZM84.5047 14.5628L82.9385 18.3109H86.071L84.5047 14.5628ZM90.0556 21.9139H87.581L86.8623 20.1955H82.1519L81.4332 21.9139H78.9562L82.9432 12.6547H86.0686L90.0556 21.9139ZM110.04 12.6571V14.5393H113.61V21.9139H116.019V14.5393H119.591V12.6571H110.04ZM77.3502 12.6571V21.9139H75.2689L69.7907 15.834V21.9139H67.6275V12.6571H69.6783L75.1964 18.737V12.6571H77.3502ZM45.094 27.7644H48.6643V35.0992H51.0733V27.7644H54.6459V25.8915H45.094V27.7644ZM72.6633 33.348C74.6626 33.348 75.0091 32.2477 75.0091 31.3136V25.8939H77.4392V31.3136C77.4392 34.0855 75.386 35.242 72.6633 35.242C69.9405 35.242 67.8873 34.0855 67.8873 31.3136V25.8939H70.3174V31.3136C70.3174 32.2477 70.6639 33.348 72.6633 33.348ZM61.9736 30.2858H58.9676V27.7551H61.9736C62.9195 27.7551 63.4298 28.2935 63.4298 29.0216C63.4298 29.7497 62.9195 30.2858 61.9736 30.2858ZM65.8997 29.0193C65.8997 27.2189 64.6378 25.8892 62.2991 25.8892H56.5539V35.0969H58.9676V32.1494H61.9619L63.568 35.0969H66.2205L64.2586 31.7444C65.3355 31.2176 65.9021 30.225 65.9021 29.0193H65.8997ZM95.1405 29.5999L98.5281 25.9618H101.483L97.2546 30.5387L101.483 35.1156H98.5281L95.1382 31.4751H94.1409V35.0992H91.7342V25.8915H94.1409V29.5999H95.1405ZM110.147 30.3022C109.391 29.9393 107.872 29.6935 106.844 29.532L106.841 29.5316C105.97 29.3958 104.662 29.1918 104.662 28.5066C104.662 27.9541 105.271 27.638 106.706 27.638C108.141 27.638 108.789 28.146 108.789 28.6798H111.135C111.135 27.0761 109.62 25.744 106.671 25.744C103.721 25.744 102.194 27.1464 102.194 28.7079C102.194 29.4383 102.564 29.9417 103.133 30.3607C103.798 30.85 104.887 31.0842 106.75 31.3417C108.375 31.5664 109.077 31.7514 109.077 32.442C109.077 32.9032 108.546 33.3574 107.008 33.3574C105.47 33.3574 104.723 32.8822 104.723 32.2032H102.176C102.176 33.7765 103.519 35.2397 106.973 35.2397C110.217 35.2397 111.437 33.8959 111.437 32.2781C111.437 31.3581 110.936 30.6791 110.147 30.2999V30.3022ZM86.373 28.2982C85.9024 27.9541 85.3288 27.7504 84.6405 27.7504C83.8094 27.7504 83.1352 28.0009 82.6201 28.5042C82.1051 29.0052 81.8475 29.6678 81.8475 30.4919C81.8475 31.3136 82.1051 31.9761 82.6201 32.4795C83.1352 32.9805 83.8094 33.2333 84.6405 33.2333C85.3265 33.2333 85.9024 33.0296 86.373 32.6855C86.8014 32.3718 87.1034 31.9738 87.2696 31.4283H89.6271C89.5312 32.3179 88.9482 33.444 88.0492 34.1511C87.0917 34.9049 85.982 35.2397 84.6358 35.2397C83.1445 35.2397 81.9014 34.7855 80.9064 33.8795C79.9114 32.9735 79.4151 31.8427 79.4151 30.4919C79.4151 29.141 79.9114 28.0102 80.9064 27.1042C81.9014 26.1982 83.1445 25.744 84.6358 25.744C85.982 25.744 87.0917 26.0788 88.0492 26.8327C88.9482 27.5373 89.5312 28.6658 89.6271 29.5554H87.2696C87.1034 29.0099 86.8014 28.6096 86.373 28.2982Z"
                                      fill="black"></path>
                            </svg>
                        </a>
                    </div>
                    <div id="block-scrollindicator" className="block block-rt-scroll-indicator block-scroll-indicator">
                        <div className="content">
                            <div className="scroll_header">
                                <div className="progress-container">
                                    <div className="progress-bar" id="scrollBar" style={{width: '0%'}}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="block-primary" className="block block-we-megamenu block-we-megamenu-blockprimary">
                        <div className="content">
                            <div className="region-we-mega-menu">
                                <nav onClick={this.handleEventClick} className="primary navbar navbar-default navbar-we-mega-menu mobile-collapse">
                                    <div className="container-fluid">
                                         {MegaMenuItemTemplate(this.props)}
                                    </div>
                                    <div id="block-searchblock"
                                         className="block block-rt-search-bar block-rt-search-block">
                                        <div className="content">
                                            <button id="searchTrigger" className="btn trigger-search">
                                                <div className="opener">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                                         xmlns="http://www.w3.org/2000/svg">
                                                        <circle className="stroke" cx="8.5" cy="9.5" r="6.5"
                                                                stroke="white"
                                                                strokeWidth="1.5"></circle>
                                                        <path className="stroke" d="M13.5 13L20 19.5" stroke="white"
                                                              strokeWidth="1.5"></path>
                                                        <path className="stroke" d="M12 15.5L18 21.5" stroke="white"
                                                              strokeWidth="1.5"></path>
                                                        <path className="stroke" d="M5 10C5 7.791 6.791 6 9 6"
                                                              stroke="white"
                                                              strokeWidth="1.5"></path>
                                                    </svg>
                                                </div>
                                                <div className="closing">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                         viewBox="0 0 24 24">
                                                        <g fill="none" fillRule="evenodd">
                                                            <g stroke="#242424" strokeWidth="1.5">
                                                                <g>
                                                                    <path className="stroke" d="M6 5l13 13M6 18L19 5"
                                                                          transform="translate(-327 -24) translate(327 24)"></path>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </div>
                                            </button>
                                            <div className="form collapse" id="searchCollapse">

                                                <form className="rt-search-form" data-drupal-selector="rt-search-form"
                                                      action="/" method="post" id="rt-search-form"
                                                      acceptCharset="UTF-8">
                                                    <fieldset
                                                        className="js-form-item js-form-type-textfield form-type-textfield js-form-item-search form-item-search form-group">
                                                        <label className="js-form-required form-required">Looking
                                                            for a specific content ?</label>
                                                        <input placeholder="Search" data-drupal-selector="edit-search"
                                                               type="text" id="edit-search" name="search"
                                                               size="60"
                                                               maxLength="128" className="required form-control"
                                                               required="required" aria-required="true"/>

                                                    </fieldset>
                                                    <input autoComplete="off"
                                                           type="hidden" name="form_build_id"
                                                           className="form-control"/>
                                                    <input data-drupal-selector="edit-rt-search-form" type="hidden"
                                                           name="form_id" value="rt_search_form"
                                                           className="form-control"/>
                                                    <div data-drupal-selector="edit-actions"
                                                         className="form-actions js-form-wrapper form-group"
                                                         id="edit-actions--3">
                                                        <button data-twig-suggestion="search_submit"
                                                                className="search-button button button--primary js-form-submit form-submit btn btn-primary"
                                                                data-drupal-selector="edit-submit" type="submit"
                                                                id="edit-submit--2" name="op" value="Search">
                                                            <svg width="24" height="24" viewBox="0 0 24 24"
                                                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                <circle className="stroke" cx="8.5" cy="9.5" r="6.5"
                                                                        stroke="white" strokeWidth="1.5"></circle>
                                                                <path className="stroke" d="M13.5 13L20 19.5"
                                                                      stroke="white" strokeWidth="1.5"></path>
                                                                <path className="stroke" d="M12 15.5L18 21.5"
                                                                      stroke="white" strokeWidth="1.5"></path>
                                                                <path className="stroke" d="M5 10C5 7.791 6.791 6 9 6"
                                                                      stroke="white" strokeWidth="1.5"></path>
                                                            </svg>
                                                            Search
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    }

    render() {
        return <div style={{height:'126px'}}>
            {this.preHeader}
            {this.navigation}
        </div>;
    }
}

MapTo('volvo-aem-renault-new/components/renault/structure/megamenu')(MegaMenuNav, MegaMenuNavConfig);

