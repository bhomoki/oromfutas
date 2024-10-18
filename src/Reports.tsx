import { TabView, TabPanel } from 'primereact/tabview';

import { ChartPie, Logs } from 'lucide-react';

function Reports() {
    return (
        <>
            <h1 className="flex">
                <div>Reports</div>
            </h1>
            <TabView className="big">
                <TabPanel header="Quality Reports" leftIcon={<ChartPie />}>
                    <div className="card">
                        <h2>Quality Reports</h2>
                        <img src="/src/assets/img/reports.png" />
                    </div>
                </TabPanel>
                <TabPanel header="Yield Rate Reports" leftIcon={<Logs />}>
                    <div className="card">
                        <h2>Yield Rate Reports</h2>
                        <img src="/src/assets/img/yield.png" />
                    </div>
                </TabPanel>
            </TabView>
        </>
    );
}

export default Reports;
