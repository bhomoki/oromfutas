import { useState } from 'react';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { Tooltip } from 'primereact/tooltip';

import { Database, Brackets, Plus, LayoutDashboard } from 'lucide-react';

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

function DataObjects() {
    const [addNew, setAddNew] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [dataobjectsLayout, setDataobjectsLayout] = useState(() => {
        const layout = localData.get('dataobjectsLayout');
        return layout ? layout : 'horizontal';
    });
    const setLayout = (newLayout: string) => {
        localData.set('dataobjectsLayout', newLayout);
        const layout = localData.get('dataobjectsLayout');
        setDataobjectsLayout(layout);
    };

    return (
        <>
            <Tooltip target=".sce" position="top" />

            <h1 className="flex">
                <div>Data objects</div>
                <Button
                    label="Dataset"
                    tooltip="Add a new dataset"
                    tooltipOptions={{ position: 'top' }}
                    severity="secondary"
                    icon={<Plus />}
                    rounded
                    onClick={() => {
                        setAddNew((prevState) => !prevState);
                        setActiveIndex(1);
                    }}
                />
            </h1>

            <TabView
                className="big"
                activeIndex={activeIndex}
                onTabChange={(e) => {
                    setActiveIndex(e.index);
                    setAddNew(false);
                }}
            >
                <TabPanel header="Data objects" leftIcon={<Brackets />}>
                    <div className="flex relative card" style={{ gap: 40, alignItems: 'flex-start' }}>
                        <Button
                            rounded
                            className="layoutcontrol"
                            severity="secondary"
                            icon={<LayoutDashboard />}
                            onClick={() => {
                                setLayout(dataobjectsLayout === 'vertical' ? 'horizontal' : 'vertical');
                            }}
                            tooltip="Switch layout"
                            tooltipOptions={{ position: 'top' }}
                        />
                        <div>
                            <div className="onefview">
                                <h2>Recfiles with data objects</h2>
                                <img src={'/src/assets/img/dataobjrecfiles.png'} style={{ width: 300, marginTop: 8 }} />
                            </div>
                        </div>

                        <div className={'flex falconview ' + dataobjectsLayout}>
                            <div>
                                <div className="onefview">
                                    <div className="flex">
                                        <h2>Video + Tags</h2>
                                        <div className="sectionmeta">
                                            ID: 698d0c1228107602e328248398ccb2ff
                                            <br />
                                            start-end: 1707308486 - 1707308597
                                        </div>
                                    </div>
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
                </TabPanel>
                <TabPanel header="Datasets" leftIcon={<Database />}>
                    <div className="card datasets">
                        <div className={'' + (!addNew ? 'closed' : 'open')}>
                            <h2 style={{ marginTop: -4 }}>Add new dataset</h2>
                            <label className="mrgbtm16">
                                Create a new dataset that contains a group of data objects
                            </label>
                            <img src="/src/assets/img/addnewdataset.png" />
                            <hr style={{ margin: '40px 0' }} />
                        </div>
                        <h2 style={{ marginBottom: 28 }}>Datasets</h2>
                        <img src="/src/assets/img/datasets.png" />
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
}

export default DataObjects;
