import React from 'react';
//import logo from './logo.svg';
import './App.css';
import AreaChartExample from "./m_component/AreaChartExample";
import KPIExample from "./m_component/KPIExample";
import PivotTableExample from "./m_component/PivotTableExample";
import HeadlineExample from './m_component/HeadlineExample';
import VisualizationExample from './m_component/VisualizationExample';
import KVisualizationExample from './m_component/KVisualizationExample';
import DateFilterComponentExample from './m_component/DateFilterComponentExample';
import AFM_TreemapExample from './m_component/AFM_TreemapExample';
import AfmBarChartExample from './m_component/AfmBarChartExample';
import AfmTableExample from './m_component/AfmTableExample';
import AttributeFilterExample from './m_component/AttributeFilterExample';
import "@gooddata/react-components/styles/css/main.css";
import { clearSdkCache } from '@gooddata/react-components/dist/helpers/sdkCache';
const App = () => {
  return (
    <div>
           <div>
          <h3>Date Filter </h3>
        <DateFilterComponentExample></DateFilterComponentExample>
      </div>
      <div>
        <h3>Area Chart </h3>
        <AreaChartExample></AreaChartExample>
      </div>
      <div>
        <h3>KPI</h3>
        <KPIExample></KPIExample>
      </div>
      <div>
        <h3>HeadLine</h3>
        <HeadlineExample></HeadlineExample>
      </div>
      <div>
        <h3>Pivot Table</h3>
        <PivotTableExample></PivotTableExample>
      </div>
      <div>
        <h3>Visualization</h3>
        <VisualizationExample></VisualizationExample>
      </div>
      <div>
        <h3>KD is not supported: Render fails</h3>
        <KVisualizationExample></KVisualizationExample>
      </div>
      <div>
        <h3>Afm Table</h3>
        <AfmTableExample></AfmTableExample>
      </div>
      <div>
        <h3>Afm BarChart</h3>
        <AfmBarChartExample></AfmBarChartExample>
      </div>
      <div>
        <h3>Afm Treemap</h3>
        <AFM_TreemapExample></AFM_TreemapExample>
      </div>
      <div>
        <h3>AttributeFilter</h3>
        <AttributeFilterExample></AttributeFilterExample>
      </div>
    </div>

  )
  }
clearSdkCache();
export default App;
