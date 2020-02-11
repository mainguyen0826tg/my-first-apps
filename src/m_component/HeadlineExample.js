import React from 'react';
import { Headline , Model } from '@gooddata/react-components';
import {projectId,avgAmount, avgWon} from '../utils/fixtures';

const measure = Model.measure(avgAmount).localIdentifier("avgAmount").format("#,##0");

const secondaryMeasure = Model.measure(avgWon).localIdentifier("AvgWon").format("#,##0");


const HeadlineExample =() => {
    return (
        <Headline
            projectId={projectId}
            primaryMeasure={measure}
            secondaryMeasure={secondaryMeasure}
        />

    )
}




export default HeadlineExample;