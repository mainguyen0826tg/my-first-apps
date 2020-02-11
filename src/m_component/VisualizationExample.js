import React from 'react';
import '@gooddata/react-components/styles/css/main.css';
import { Visualization } from '@gooddata/react-components';
//import { HeaderPredicateFactory } from '@gooddata/react-components';
import {projectId, insight_chart} from '../utils/fixtures';

const VisualizationExample = ()=> {
    return(
        <div style={{ height: 400, width: 600 }}>
            <Visualization
                identifier={insight_chart}
                projectId={projectId}
                drillableItems={[
                    HeaderPredicateFactory.composedFromUri('/gdc/md/la84vcyhrq8jwbu4wpipw66q2sqeb923/obj/9211'),  
                    HeaderPredicateFactory.composedFromIdentifier('label.owner.department')  
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