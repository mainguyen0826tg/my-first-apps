import React from 'react';
import {AfmComponents} from "@gooddata/react-components";
import {projectId} from '../utils/fixtures';
import '@gooddata/react-components/styles/css/main.css';
//import { measure } from '@gooddata/react-components/dist/helpers/model';


const {Treemap} = AfmComponents;
const afm={
    measures: [
        {
            localIdentifier: 'avgAmount',
            definition: {
                measure: {
                    item: {
                        identifier: 'aoJqpe5Ib4mO' 
                    }
                }
            },
            alias: 'Avg Amount'
        }
    ],
    attributes: [
        {
            localIdentifier: 'department',
            displayForm: {
                identifier: 'label.owner.department'
            }
        },
        {
            localIdentifier: 'region',
            displayForm: {
                identifier: 'label.owner.region'
            }
        }

    ]
}

const TreemapExample = () => {
    return ( 
        <div style={{ height: 300 }}>
            <Treemap
                afm={afm}
                projectId={projectId}
                //onLoadingChanged={this.onLoadingChanged}
                //onError={this.onError}
            />
        </div>
    );
}

export default TreemapExample;
