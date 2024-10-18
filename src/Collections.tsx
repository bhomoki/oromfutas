import { useState } from 'react';
import { Dropdown } from 'primereact/dropdown';
import { Button } from 'primereact/button';
import { TabView, TabPanel } from 'primereact/tabview';
import BigList from './Biglist';

import { FileVideo2, Database, Route as RouteIcon, SquarePlay, Group, CloudUpload, Plus, Star } from 'lucide-react';
import { InputText } from 'primereact/inputtext';

function TableHead({ isStarred }: { isStarred: boolean }) {
    const cities = [
        { name: 'Indexed date / New -> Old', code: 'IDT' },
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' },
    ];
    const [selectedCity, setSelectedCity] = useState(cities[0]);
    return (
        <>
            <div className="flex" style={{ paddingTop: 8 }}>
                {!isStarred && (
                    <>
                        <div className="flex href selectall"></div>
                        <div className="summary">
                            <FileVideo2 />
                            91 files
                            <Database />
                            57 GB
                            <RouteIcon />
                            2,265 km
                            <SquarePlay />
                            81 hr
                        </div>
                    </>
                )}
                {isStarred && (
                    <>
                        <div className="flex href selectall">
                            <Star className="filledstar" />
                            All
                        </div>
                        <div className="summary">
                            <FileVideo2 />
                            15 files
                            <Database />
                            7 GB
                            <RouteIcon />
                            663 km
                            <SquarePlay />
                            18 hr
                        </div>
                    </>
                )}
                <div style={{ marginBottom: 6 }}>
                    <Dropdown
                        value={selectedCity}
                        onChange={(e) => setSelectedCity(e.value)}
                        options={cities}
                        optionLabel="name"
                        style={{ width: 'auto' }}
                    />
                </div>
            </div>
        </>
    );
}

function Collections() {
    const [addNew, setAddNew] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h1>
                <div>Collections</div>
                <Button
                    label="Collection"
                    tooltip="Add a new collection"
                    tooltipOptions={{ position: 'top' }}
                    severity="secondary"
                    icon={<Plus />}
                    rounded
                    onClick={() => {
                        setActiveIndex(0);
                        setAddNew((prevState) => !prevState);
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
                <TabPanel header="Collection explorer" leftIcon={<Group />}>
                    <div className="card mrgbtm28 nominheight">
                        <div className={'collections ' + (!addNew ? 'closed' : 'open')}>
                            <div>
                                <h2 style={{ marginTop: -4 }}>Add new collection</h2>
                                <label className="mrgbtm16">
                                    Create a new collection from your starred items (15 recordings)
                                </label>

                                <label style={{ marginTop: 8 }}>Collection group:</label>
                                <Dropdown
                                    value={{ name: 'Whatever', code: 'Whatever' }}
                                    options={[
                                        { name: 'Whatever', code: 'Whatever' },
                                        { name: 'Text', code: 'Text' },
                                    ]}
                                    optionLabel="name"
                                    style={{ marginBottom: 20 }}
                                />

                                <label>Collection name:</label>
                                <InputText />
                                <br />
                                <br />
                                <Button label="Save" size="small" icon={<CloudUpload />} rounded className="prim" />
                            </div>
                            <hr style={{ margin: '40px 0' }} />
                        </div>
                        <h2>Collection explorer</h2>
                        <img src="/src/assets/img/collections.png" />
                    </div>
                </TabPanel>
                <TabPanel header="Ollcolebcd (91)" leftIcon={<FileVideo2 />}>
                    <div className="card infinite nopadtop">
                        <TableHead isStarred={false} />
                        <hr className="bighr" />
                        <BigList />
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
}

export default Collections;
