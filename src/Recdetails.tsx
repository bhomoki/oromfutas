import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';

import {
    Brackets,
    ChartBarStacked,
    ChartScatter,
    CloudSun,
    FileText,
    LayoutDashboard,
    Maximize,
    Minimize,
    Video,
} from 'lucide-react';

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

const RecDetails = React.memo(function (props: { source: string; recfileName: string | undefined }) {
    const [detailsLayout, setDetailsLayout] = useState(() => {
        const layout = localData.get('detailsLayout');
        return layout ? layout : { side: 'vertical', page: 'horizontal' };
    });

    const setLayout = (localLayout: { source: string; newLayout: string }) => {
        localData.set('detailsLayout', { ...detailsLayout, [localLayout.source]: localLayout.newLayout });
        const layout = localData.get('detailsLayout');
        setDetailsLayout(layout);
    };

    const navigate = useNavigate();
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h1>
                <div style={{ flexGrow: 1 }}>{props.recfileName}</div>
                <div>
                    {props.source === 'side' && (
                        <Button
                            rounded
                            className="viewcontrol"
                            severity="secondary"
                            icon={<Maximize />}
                            onClick={() => {
                                navigate('/r/' + props.recfileName);
                            }}
                            tooltip="Maximize"
                            tooltipOptions={{ position: 'top' }}
                        />
                    )}
                    {props.source === 'page' && (
                        <Button
                            rounded
                            className="viewcontrol"
                            severity="secondary"
                            icon={<Minimize />}
                            onClick={() => {
                                navigate('/?r=' + props.recfileName);
                            }}
                            tooltip="Restore"
                            tooltipOptions={{ position: 'top' }}
                        />
                    )}
                </div>
            </h1>

            <TabView
                className={'big ' + (props.source === 'page' ? 'page' : 'side')}
                activeIndex={activeIndex}
                onTabChange={(e) => {
                    setActiveIndex(e.index);
                }}
            >
                <TabPanel header="Basics" leftIcon={<FileText />}>
                    <div className="card">
                        <h2>Basics</h2>
                        <img src={'/src/assets/img/basics.png'} />
                    </div>
                </TabPanel>
                <TabPanel header="Video+" leftIcon={<Video />}>
                    <div className={'flex relative falconview card ' + detailsLayout[props.source]}>
                        {activeIndex === 1 && (
                            <Button
                                rounded
                                className="layoutcontrol"
                                severity="secondary"
                                icon={<LayoutDashboard />}
                                onClick={() => {
                                    setLayout({
                                        source: props.source,
                                        newLayout:
                                            detailsLayout[props.source] === 'vertical' ? 'horizontal' : 'vertical',
                                    });
                                }}
                                tooltip="Switch layout"
                                tooltipOptions={{ position: 'top' }}
                            />
                        )}
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
                </TabPanel>
                <TabPanel header="Data objects" leftIcon={<Brackets />}>
                    <div className="card">
                        <h2>Data Objects (3)</h2>
                        #1
                        <table className="mdslist mrgbtm24">
                            <tbody>
                                <tr>
                                    <td className="bold">data_object_id</td>
                                    <td>698d0c1228107602e328248398ccb2ff</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_start</td>
                                    <td>123</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_end</td>
                                    <td>124</td>
                                </tr>
                                <tr>
                                    <td className="bold">reference_timestamp_source</td>
                                    <td>reference_timestamp_source</td>
                                </tr>
                                <tr>
                                    <td className="bold">category</td>
                                    <td>train</td>
                                </tr>
                                <tr>
                                    <td className="bold">is_locked</td>
                                    <td>true</td>
                                </tr>
                                <tr>
                                    <td className="bold">version</td>
                                    <td>3</td>
                                </tr>
                            </tbody>
                        </table>
                        #2
                        <table className="mdslist mrgbtm24">
                            <tbody>
                                <tr>
                                    <td className="bold">data_object_id</td>
                                    <td>c5bf28a35ab5513f48ba4c237daea8e7</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_start</td>
                                    <td>123</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_end</td>
                                    <td>124</td>
                                </tr>
                                <tr>
                                    <td className="bold">reference_timestamp_source</td>
                                    <td>reference_timestamp_source</td>
                                </tr>
                                <tr>
                                    <td className="bold">category</td>
                                    <td>train</td>
                                </tr>
                                <tr>
                                    <td className="bold">is_locked</td>
                                    <td>true</td>
                                </tr>
                                <tr>
                                    <td className="bold">version</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                        #3
                        <table className="mdslist mrgbtm24">
                            <tbody>
                                <tr>
                                    <td className="bold">data_object_id</td>
                                    <td>5bc0887dacbb7f33efc71b0a9ef8e2c9</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_start</td>
                                    <td>123</td>
                                </tr>
                                <tr>
                                    <td className="bold">timestamp_end</td>
                                    <td>124</td>
                                </tr>
                                <tr>
                                    <td className="bold">reference_timestamp_source</td>
                                    <td>reference_timestamp_source</td>
                                </tr>
                                <tr>
                                    <td className="bold">category</td>
                                    <td>train</td>
                                </tr>
                                <tr>
                                    <td className="bold">is_locked</td>
                                    <td>true</td>
                                </tr>
                                <tr>
                                    <td className="bold">version</td>
                                    <td>4</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </TabPanel>
                <TabPanel header="Objects" leftIcon={<ChartScatter />}>
                    <div className="card">
                        <h2>Objects per seconds</h2>
                        <img src={'/src/assets/img/objects.png'} style={{ maxWidth: '100%' }} />
                    </div>
                </TabPanel>
                <TabPanel header="Scenes" leftIcon={<CloudSun />}>
                    <div className="card">
                        <h2>Scenes</h2>
                        <img src={'/src/assets/img/scenes.png'} style={{ maxWidth: '100%' }} />
                    </div>
                </TabPanel>
                <TabPanel header="Quality" leftIcon={<ChartBarStacked />}>
                    <div className="card">
                        <h2>Quality</h2>
                        <img src={'/src/assets/img/quality.png'} style={{ maxWidth: '100%' }} />
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
});

export default RecDetails;
