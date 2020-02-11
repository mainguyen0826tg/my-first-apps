import React, { Component } from 'react';
//import logo from '../logo.svg';
import '../App.css';
import {AfmComponents} from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import { projectId} from '../utils/fixtures';
const { BarChart } = AfmComponents;
const afm={
    measures: [
        {
            localIdentifier: 'avgAmount',
            definition: {
                measure: {
                    item: {
                        identifier: 'aoJqpe5Ib4mO' 
                    },computeRatio: true
                },
                  
            },
            alias: 'Avg Amount'
        }
    ],
    attributes: [
        {
            localIdentifier: 'Department',
            displayForm: {
                identifier: 'label.owner.department'
            }
        }

    ]
}

export class AfmBarChartExample extends Component {
    
    render() {
        return (
            <div style={{ height: 600 }}>
                <BarChart
                    afm = {afm}
                    projectId = {projectId}               
                    config = {{
                        colors: ['#14b2e2','#04d438']
                    }}
                    
                />
            </div>
        );
    }
}
export default AfmBarChartExample; 