import { useState } from 'react';
import { Ripple } from 'primereact/ripple';
import { MultiSelect } from 'primereact/multiselect';
import { InputTextarea } from 'primereact/inputtextarea';
import { Slider, SliderChangeEvent } from 'primereact/slider';
import { InputNumber } from 'primereact/inputnumber';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';

import { ChevronDown, ChevronUp, Search, Filter, Info } from 'lucide-react';
import { InputText } from 'primereact/inputtext';

const options: unknown[] | undefined = [];

options.push({ label: 'ADT400AA16', value: 'ADT400AA16' });
options.push({ label: 'ARS540BW11', value: 'ARS540BW11' });
options.push({ label: 'MFC527IO14', value: 'MFC527IO14' });
options.push({ label: 'PAR230', value: 'PAR230' });
options.push({ label: 'PARKINGBASE', value: 'PARKINGBASE' });
options.push({ label: 'RAD600', value: 'RAD600' });
options.push({ label: 'SRR620DP24', value: 'SRR620DP24' });
options.push({ label: 'SRR630DP14', value: 'SRR630DP14' });
for (let i = 10; i < 36; i++) {
    options.push({ label: i.toString(36) + 1, value: i.toString(36) + 1 });
}

function SearchComp() {
    const [searchOpen, setSearchOpen] = useState<boolean>(localStorage.getItem('searchOpen') === '1' ? true : false);
    const [selectedProjects, setSelectedProjects] = useState(null);
    const [rangeValue, setRangeValue] = useState<[number, number]>([0, 6830855508]);
    const [queryValue, setQueryValue] = useState('');
    const rangeValueScale = [0, 6830855508];

    function searchMenuClicked() {
        setSearchOpen((prevState) => !prevState);
        localStorage.setItem('searchOpen', searchOpen ? '0' : '1');
    }
    /*
    const handleSliderChange = (
        event: Event,
        newValue: number | number[],
      ) => {
        setRangeValue(Array.isArray(newValue) ? newValue : []);
      };
*/
    return (
        <>
            <div className="aboveheader">
                <div className="flex">
                    <div>
                        <IconField iconPosition="left">
                            <InputIcon>
                                <Search />
                            </InputIcon>
                            <InputText v-model="value1" placeholder="Search" className="searchinput" />
                        </IconField>
                    </div>
                    <div>
                        <div
                            className="filters flex hasicon p-ripple"
                            onClick={() => {
                                searchMenuClicked();
                            }}
                        >
                            <Filter />
                            <span>Filters & more</span>
                            {!searchOpen ? <ChevronDown /> : <ChevronUp />}
                            <Ripple />
                        </div>
                    </div>
                    <div className="flex" style={{ gap: 8 }}>
                        <MultiSelect
                            options={options}
                            value={selectedProjects}
                            selectAllLabel="Select all"
                            closeIcon={false}
                            placeholder="Choose project..."
                            panelClassName="aboveheaderpanel"
                            dropdownIcon={<ChevronDown />}
                            onChange={(e) => {
                                setSelectedProjects(e.value);
                            }}
                            className="p-ripple"
                            style={{ background: 'transparent', fontWeight: 600 }}
                        />
                    </div>
                </div>
            </div>

            <div className={!searchOpen ? 'closed' : 'open'}>
                <div className="search filters">
                    <TabView>
                        <TabPanel header="Filters">
                            <div className="flex" style={{ paddingBottom: 28, flexWrap: 'wrap' }}>
                                <div className="unit">
                                    <label>Projects</label>
                                    <MultiSelect
                                        options={options}
                                        value={selectedProjects}
                                        selectAllLabel="Select all"
                                        onChange={(e) => {
                                            setSelectedProjects(e.value);
                                        }}
                                    />
                                </div>
                                <div className="unit">
                                    <label>Countries</label>
                                    <MultiSelect
                                        options={options}
                                        value={selectedProjects}
                                        selectAllLabel="Select all"
                                        onChange={(e) => {
                                            setSelectedProjects(e.value);
                                        }}
                                    />
                                </div>
                                <div className="unit">
                                    <label>Devices</label>
                                    <MultiSelect
                                        options={options}
                                        value={selectedProjects}
                                        selectAllLabel="Select all"
                                        onChange={(e) => {
                                            setSelectedProjects(e.value);
                                        }}
                                    />
                                </div>
                                <div className="unit">
                                    <label>Sensor quality</label>
                                    <MultiSelect
                                        options={options}
                                        value={selectedProjects}
                                        selectAllLabel="Select all"
                                        onChange={(e) => {
                                            setSelectedProjects(e.value);
                                        }}
                                    />
                                </div>
                                <div className="unit">
                                    <label>Section quality range (sec)</label>
                                    <div style={{ height: 40, paddingTop: 6, textAlign: 'center' }}>
                                        <Slider
                                            value={rangeValue}
                                            min={rangeValueScale[0]}
                                            max={rangeValueScale[1]}
                                            onChange={(e: SliderChangeEvent) =>
                                                setRangeValue(e.value as [number, number])
                                            }
                                            range
                                            style={{ marginBottom: 4 }}
                                        />
                                        <InputNumber
                                            className="rangenum"
                                            value={rangeValue[0]}
                                            onChange={(e) => {
                                                setRangeValue([e.value || 0, rangeValue[1]]);
                                            }}
                                        />{' '}
                                        -
                                        <InputNumber
                                            className="rangenum"
                                            value={rangeValue[1]}
                                            onChange={(e) => {
                                                setRangeValue([rangeValue[0], e.value || 0]);
                                            }}
                                        />
                                    </div>
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Key - Value">
                            <div>
                                <label>Search by Key - Value</label>
                                <img src="/src/assets/img/keyvalue.png" />
                            </div>
                        </TabPanel>
                        <TabPanel header="Query">
                            <div>
                                <label>Search by text query</label>
                                <InputTextarea
                                    placeholder="Type/paste your query here..."
                                    autoResize
                                    defaultValue={queryValue}
                                    onChange={(e) => setQueryValue(e.target.value)}
                                    rows={8}
                                    style={{ borderRadius: 8, width: '50%', minWidth: 300 }}
                                />
                                <div className="flex">
                                    <Button label="Search" icon={<Search />} rounded className="prim" />
                                    <Button icon={<Info />} rounded severity="secondary" />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel header="Saved queries">
                            <div>
                                <label>Saved queries</label>
                                <div style={{ backgroundColor: 'white', borderRadius: 8, padding: 8 }}>
                                    <img src="/src/assets/img/savedqueries.png" />
                                </div>
                            </div>
                        </TabPanel>
                    </TabView>
                </div>
            </div>
        </>
    );
}

export default SearchComp;
