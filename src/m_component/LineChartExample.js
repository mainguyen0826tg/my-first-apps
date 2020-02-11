import React, { Component } from "react";
import { LineChart, Model } from "@gooddata/react-components";

import "@gooddata/react-components/styles/css/main.css";

//import { CUSTOM_COLOR_PALETTE } from "../utils/colors";

const projectId='e3f1b3snasy2pd2cvgh9ubv29gcdrdte'
const franchiseFeesIdentifier = 'aoJqpe5Ib4mO'
const franchiseFeesAdRoyaltyIdentifier = 'ah1EuQxwaCqs'
const franchiseFeesInitialFranchiseFeeIdentifier = 'agEEuYDOefRs'
const franchiseFeesIdentifierOngoingRoyalty = 'ac3EwmqvbxcX'

export class LineChartExample extends Component {
    onLoadingChanged(...params) {
        // eslint-disable-next-line no-console
        return console.log("LineChartExample onLoadingChanged", ...params);
    }

    onError(...params) {
        // eslint-disable-next-line no-console
        return console.log("LineChartExample onError", ...params);
    }

    render() {
        const measures = [
            Model.measure(franchiseFeesIdentifier).format("#,##0"),
            Model.measure(franchiseFeesAdRoyaltyIdentifier).format("#,##0"),
            Model.measure(franchiseFeesInitialFranchiseFeeIdentifier).format("#,##0"),
            Model.measure(franchiseFeesIdentifierOngoingRoyalty).format("#,##0"),
        ];

        const trendBy = Model.attribute(monthDateIdentifier);

        return (
            <div style={{ height: 300 }} className="s-line-chart">
                <LineChart
                    projectId={projectId}
                    measures={measures}
                    trendBy={trendBy}
                    onLoadingChanged={this.onLoadingChanged}
                    onError={this.onError}
                    //config={{ colorPalette: CUSTOM_COLOR_PALETTE }}
                />
            </div>
        );
    }
}

export default LineChartExample;