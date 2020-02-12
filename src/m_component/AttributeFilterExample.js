import React, { Component } from 'react';
import {AttributeFilter, Model,PieChart} from '@gooddata/react-components';

import '@gooddata/react-components/styles/css/main.css';

import { stage, projectId, avgAmount} from '../utils/fixtures';
//const filter = Model.positiveAttributeFilter(stage, ['Interest'],true)
const filter = Model.negativeAttributeFilter(stage, ['Interest'],true)
const measures = [Model.measure(avgAmount).localIdentifier("avgAmount").format("#,##0")]
const attribute = Model.attribute(stage).localIdentifier("stage")

export class AttributeFilterExample extends Component {
    onApply(params) {
        // eslint-disable-next-line no-console
        console.log('AttributeFilterExample onApply', ...params);
    }

    onApplyWithFilterDefinition(filter) {
        // eslint-disable-next-line no-console
        console.log("AttributeFilterComponentExample onApplyWithFilterDefinition", filter);
        this.setState(filter);
    }

    render() {
        return (
            <div >
                <AttributeFilter
                    //filters={this.state.filter}
                    filter={filter}
                    //identifier = {stage}
                    projectId={projectId}
                    onApply={this.onApply}
                    //sdk={<sdk>}
                />
                <PieChart
                    //filter={[this.state.filter]}
                    filter={filter}
                    //identifier = {stage}
                    projectId={projectId}
                    measures = {measures}
                    viewBy = {attribute}
                
                />
            </div>
        );
    }
}
export default AttributeFilterExample;
