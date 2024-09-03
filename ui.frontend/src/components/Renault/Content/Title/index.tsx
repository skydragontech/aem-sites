import {Component} from "react";
import React from "react";
import {MapTo} from "@adobe/aem-react-editable-components";

const SectionTitleConfig = {
    emptyLabel: 'Section Title',

    isEmpty(props: any) {
        return !props || !props.text;
    },
};

class SectionTitle extends Component {

    constructor(props: any) {
        super(props);
    }

    render() {
        const isEmpty = SectionTitleConfig.isEmpty(this.props);
        // @ts-ignore
        const titleText = this.props.text;
        return (
            <>{!isEmpty && <div
                className="field field--name-node-title field--type-ds field--label-hidden homepage-welcome field__item">
                <h1>
                    {titleText}
                </h1>
                <svg width="172" height="12" viewBox="0 0 172 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="stroke" d="M0.3125 1.00001L69.5096 1.00001L86.7209 10.75L105.688 1.00001L171.688 1"
                          stroke="#494949" strokeWidth="0.75"></path>
                </svg>
            </div>}</>
        );
    }
}

// @ts-ignore
MapTo('volvo-aem-renault-new/components/renault/content/title')(SectionTitle, SectionTitleConfig);
