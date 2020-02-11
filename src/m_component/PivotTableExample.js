import React from 'react';
import {PivotTable,Model} from "@gooddata/react-components";
import {projectId, avgAmount, avgWon,  department, region, stage} from '../utils/fixtures';
//import { measure } from '@gooddata/react-components/dist/helpers/model';

const measures = [
    Model.measure(avgAmount).localIdentifier("avgAmount").format("#,##0"),
    Model.measure(avgWon).localIdentifier("avgWon").format("#,##0"),
    Model.arithmeticMeasure(['avgAmount','avgWon'],'sum').title('Sum of avgAmoun and avgWon'),
];
const columns = [
    Model.attribute(department).localIdentifier("department"),
    Model.attribute(region).localIdentifier("region")
];
const rows = [
    Model.attribute(stage).localIdentifier("stage"),
];

const totals = [
    {
        measureIdentifier: 'avgAmount',
        type: 'sum',
        attributeIdentifier: 'stage'
    }
]

/*const sortBy = {
    sorts: [
        // Type: IAttributeSortItem
        {
            attributeSortItem: {
                direction: 'asc',   // or 'desc',
                attributeIdentifier: Model.attribute(region),
                aggregation: 'sum' // Optional;
            }
        },
        {
            measureSortItem: {
                direction: 'asc',   // or 'desc',
                // Type: LocatorItem[]
                locators: [
                    {
                        attributeLocatorItem: {
                            attributeIdentifier: Model.attribute(stage).localIdentifier("stage"),
                            element: '/gdc/md/e3f1b3snasy2pd2cvgh9ubv29gcdrdte/obj/1026/elements?id=1226'
                        }
                    }
                ]
            }
        }
    ]
}*/

const PivotTableExample =() => {
    return(
        <div style={{ height: 600 }}>
        <PivotTable
            projectId={projectId}
            measures={measures}
            rows={rows}
            columns={columns}
            totals={totals}
            groupRows = {true}
            //sortBy={sortBy}
           // config={config}
           // onError={this.onError}
            filters={[
                {
                    absoluteDateFilter: {
                        dataSet: {
                            identifier: 'created.dataset.dt'
                        },
                        from: '2000-01-01',
                        to: '2020-12-31'
                    }
                },
                {
                    positiveAttributeFilter: {
                        displayForm: {
                            identifier: 'label.owner.department'
                        },
                        // Attribute element URIs
                        in: ['/gdc/md/e3f1b3snasy2pd2cvgh9ubv29gcdrdte/obj/1026/elements?id=1226']
                    }
                }
            ]}

            drillableItems={[
                { identifier: 'label.owner.department' }
                //{ uri: '/gdc/md/kia6t756e97f3usw9vbuhirjhuja158j/obj/1026' }
            ]}

        />
         </div> 
    )
    
};
export default PivotTableExample;