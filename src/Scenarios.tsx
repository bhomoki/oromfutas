import { useState } from 'react';
import { Button } from 'primereact/button';
import { Tooltip } from 'primereact/tooltip';

import SearchComp from './Search';

import { LayoutDashboard } from 'lucide-react';

const localData = {
    set(key: string, value: unknown) {
        localStorage.setItem(key, JSON.stringify(value));
    },
    get(key: string) {
        const stored = localStorage.getItem(key);
        return stored == null ? undefined : JSON.parse(stored);
    },
    remove(key: string) {
        localStorage.removeItem(key);
    },
};
function Scenarios() {
    const [scenarioLayout, setScenarioLayout] = useState(() => {
        const layout = localData.get('scenarioLayout');
        return layout ? layout : 'horizontal';
    });

    const setLayout = (newLayout: string) => {
        localData.set('scenarioLayout', newLayout);
        const layout = localData.get('scenarioLayout');
        setScenarioLayout(layout);
    };

    return (
        <>
            <Tooltip target=".sce" position="top" />

            <SearchComp />

            <h1 className="flex mrgtop32">
                <div>Scenarios</div>
            </h1>

            <div className="mrgbtm28">
                <div className="sce selected" data-pr-tooltip="12 recfiles, 21 sections">
                    Traffic light: 12/21
                </div>
                <div className="sce" data-pr-tooltip="11 recfiles, 13 sections">
                    Parking lot: 11/13
                </div>
                <div className="sce" data-pr-tooltip="6 recfiles, 10 sections">
                    Intersection traffic light: 6/10
                </div>
                <div className="sce" data-pr-tooltip="3 recfiles, 4 sections">
                    Tunnel: 3/4
                </div>
                <div className="sce" data-pr-tooltip="1 recfiles, 1 sections">
                    Bridge: 1/1
                </div>
                <div className="sce" data-pr-tooltip="1 recfiles, 1 sections">
                    Bridge parking lot: 1/1
                </div>
                <div className="sce" data-pr-tooltip="1 recfiles, 1 sections">
                    Traffic jam: 1/1
                </div>
            </div>

            <div className="flex relative card" style={{ gap: 40, alignItems: 'flex-start' }}>
                <Button
                    rounded
                    className="layoutcontrol"
                    severity="secondary"
                    icon={<LayoutDashboard />}
                    onClick={() => {
                        setLayout(scenarioLayout === 'vertical' ? 'horizontal' : 'vertical');
                    }}
                    tooltip="Switch layout"
                    tooltipOptions={{ position: 'top' }}
                />

                <div>
                    <div className="onefview">
                        <h2>Traffic light: 12/21</h2>
                        <img src={'/src/assets/img/analyzedsections2.png'} style={{ width: 300, marginTop: 8 }} />
                    </div>
                </div>

                <div className={'flex falconview ' + scenarioLayout}>
                    <div>
                        <div className="onefview">
                            <h2>Video + Tags</h2>
                            <img src={'/src/assets/img/detailsview_1.png'} />
                        </div>
                        <div className="onefview">
                            <h2>Timeline</h2>
                            <img src={'/src/assets/img/detailsview_2.png'} className="noradius" />
                        </div>
                    </div>
                    <div>
                        <div className="onefview">
                            <h2>Objects & velocity</h2>
                            <img src={'/src/assets/img/detailsview_3.png'} className="bordered" />
                        </div>
                        <div className="onefview">
                            <h2>Route</h2>
                            <img src={'/src/assets/img/detailsview_4.png'} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Scenarios;
