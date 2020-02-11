import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';
//import { HeaderPredicateFactory } from '@gooddata/react-components';
import {projectId, dashboard} from '../utils/fixtures';

const KVisualizationExample = ()=> {
    return(
        <div style={{ height: 400, width: 600 }}>
            <Visualization
                identifier={dashboard}
                projectId={projectId}
                config={{
                    colors: ['rgb(195, 49, 73)', 'rgb(168, 194, 86)'],
                    legend: {
                        enabled: true,
                        position: 'bottom'
                    }
                }}
            />
        </div>
    );
}
export default KVisualizationExample;