import React from "react";
import { Kpi } from "@gooddata/react-components";
const KPIExample = () => {
    return <div className="kpi">
                <style>{`
                    .kpi {
                        margin: 10px 0;
                        font-size: 50px;
                        white-space: nowrap;
                        vertical-align: bottom;
                        text-align: center;
                        min-width: 300px;
                        line-height: 1.2em;
                        font-weight: 700;
                        width: 300px;
                    }
                `}</style>
                <Kpi 
                    projectId='e3f1b3snasy2pd2cvgh9ubv29gcdrdte'
                    measure='agEEuYDOefRs' 
                    filters={[
                        {
                            absoluteDateFilter: {
                                dataSet: {
                                    identifier: 'created.dataset.dt'
                                },
                                from: '2000-01-01',
                                to: '2010-12-31'
                            }
                        }
                    ]}
                />
            </div>
};

export default KPIExample;
