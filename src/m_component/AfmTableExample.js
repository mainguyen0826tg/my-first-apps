import React from 'react';
import '../App.css';
import {AfmComponents} from "@gooddata/react-components";
import {projectId} from '../utils/fixtures';
import '@gooddata/react-components/styles/css/main.css';
//import { Table } from '@gooddata/react-components/dist/components/afm/Table';


const {Table} = AfmComponents;

const afm={
    measures: [
        {
            localIdentifier: 'avgAmount',
            definition: {
                measure: {
                    item: {
                        identifier: 'aoJqpe5Ib4mO' 
                    }
                },
                aggregation: 'sum',   // Optional; by default 'sum'; possible values: 'sum' | 'count' | 'avg' | 'min' | 'max' | 'median' | 'runsum'
            },
            alias: 'Avg Amount'
        },
        {
            localIdentifier: 'avgWon',
            definition: {
                measure: {
                    item: {
                        identifier: 'agEEuYDOefRs' 
                    }
                },
                aggregation: 'sum',   // Optional; by default 'sum'; possible values: 'sum' | 'count' | 'avg' | 'min' | 'max' | 'median' | 'runsum'
                computeRatio: true  
            },
            alias: 'Avg Won'
        }
    ],
    attributes: [
        {
            localIdentifier: 'Department',
            displayForm: {
                identifier: 'label.owner.department'
            }
        },
        {
            localIdentifier: 'Region',
            displayForm: {
                identifier: 'label.owner.region'
            }
        }

    ]
}


const AfmTableExample = () => {
    return ( 
        <div style={{ height: 300 }}>
            <Table
                afm={afm}
                projectId={projectId}
                //onLoadingChanged={this.onLoadingChanged}
                //onError={this.onError}
            />
        </div>
    );
}
export default AfmTableExample;
