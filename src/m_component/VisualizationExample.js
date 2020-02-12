import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';
import { HeaderPredicateFactory } from '@gooddata/react-components';
//import { HeaderPredicateFactory } from '@gooddata/react-components';
import {projectId, insight_chart, stage} from '../utils/fixtures';

const VisualizationExample = ()=> {
    return(
        <div style={{ height: 400, width: 600 }}>
            <Visualization
                identifier={insight_chart}
                projectId={projectId}
                drillableItems={[
                    HeaderPredicateFactory.composedFromUri('/gdc/md/e3f1b3snasy2pd2cvgh9ubv29gcdrdte/obj/62827'),  
                    HeaderPredicateFactory.composedFromIdentifier('label.stage.name')  
                ]}
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
document.addEventListener('drill',function(arg) { console.log(arg.detail); });
export default VisualizationExample;