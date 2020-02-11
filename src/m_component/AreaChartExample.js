import React from 'react';
//import logo from '../logo.svg';
import '../App.css';
import { AreaChart, Model } from '@gooddata/react-components';
import '@gooddata/react-components/styles/css/main.css';
import {projectId, avgAmount, avgWon,  department, region} from '../utils/fixtures';

/*const projectId = "e3f1b3snasy2pd2cvgh9ubv29gcdrdte";
const avgAmount = "aoJqpe5Ib4mO";
const avgWon = "agEEuYDOefRs";
const department = "label.owner.department";*/

const measures = [
    Model.measure(avgAmount)
        .localIdentifier("avgAmount")
        .format("#,##0"),
    Model.measure(avgWon)
        .localIdentifier("AvgWon")
        .format("#,##0")
];
const attribute = [
    Model.attribute(department).localIdentifier("Department"),
    Model.attribute(region).localIdentifier("Region")
];


function AreaChartEx() {
  return (
    <div style={{ height: 600 }}>
      <AreaChart
          projectId = {projectId}
          measures = {measures}
          viewBy = {attribute}
          config = {{
              colors: ['#14b2e2' , '#04d438']
          }}
          drillableItems={[
            { identifier: 'label.owner.department' },
            { identifier:'aoJqpe5Ib4mO'}
            //{ uri: '/gdc/md/kia6t756e97f3usw9vbuhirjhuja158j/obj/1026' }
        ]} 
      />
    </div>
  );
}
document.addEventListener('drill',function(arg) { console.log(arg.detail); });
export default AreaChartEx;