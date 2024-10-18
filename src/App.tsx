import React, { useEffect, useState } from 'react';
import { Routes, Route, NavLink, Link } from 'react-router-dom';
import { Ripple } from 'primereact/ripple';
import './App.css';

import Recordings from './Recordings';
import Collections from './Collections';
import Reports from './Reports';
import Analysis from './Analysis';
import DataObjects from './DataObjects';
import Scenarios from './Scenarios';
import RecDetailsPage from './Recdetailspage';
import Settings from './Settings';

import {
    FileVideo2,
    ListTree,
    Group,
    Brackets,
    ChartPie,
    ShieldHalf,
    ChartSpline,
    Menu,
    UserCircle,
    SettingsIcon,
    LogOut,
    ChevronDown,
    ChevronUp,
} from 'lucide-react';
import { Button } from 'primereact/button';

function switch1() {
    if (!document.documentElement.hasAttribute('maxed')) {
        document.documentElement.setAttribute('maxed', '');
        localStorage.setItem('maxed', '1');
    } else {
        document.documentElement.removeAttribute('maxed');
        localStorage.setItem('maxed', '0');
    }
}

function Header() {
    useEffect(() => {
        if (localStorage.getItem('maxed') !== '1') {
            document.documentElement.removeAttribute('maxed');
        }
    }, []);

    useEffect(() => {
        function handleClick() {
            setUserMenu(false);
            setHelpMenu(false);
        }
        document.body.addEventListener('click', handleClick);
        return () => {
            document.body.removeEventListener('click', handleClick);
        };
    }, []);

    const handleUserMenuClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
        e.stopPropagation();
    };

    const [userMenu, setUserMenu] = useState(false);
    const [helpMenu, setHelpMenu] = useState(false);
    return (
        <>
            <header>
                <div className="menu">
                    <Button
                        icon={<Menu />}
                        rounded
                        severity="secondary"
                        className="menubutton p-ripple"
                        onClick={() => {
                            switch1();
                        }}
                    />
                </div>
                <div>
                    <Link className="logoouter" to="/">
                        <img src="/src/assets/img/oromfutas-logo.svg" style={{ width: 150 }} />
                    </Link>
                </div>
                <div className={'midsection ddmenuouter ' + (helpMenu ? ' on' : '')}></div>
                <div className={'ddmenuouter' + (userMenu ? ' on' : '')}>
                    <div
                        className="userinfo flex p-ripple"
                        style={{ gap: 8 }}
                        onClick={(e) => {
                            handleUserMenuClick(e);
                            setUserMenu((prevState) => !prevState);
                            setHelpMenu(false);
                        }}
                    >
                        <UserCircle className="usericon" />
                        <span>Smith, Jane (uic65782)&nbsp;</span>
                        {!userMenu ? <ChevronDown className="chev" /> : <ChevronUp className="chev" />}
                        <Ripple />
                    </div>
                    <div className="ddmenu">
                        <div className="slip">
                            <ul>
                                <li>
                                    <Link className="navlink nohovu p-ripple" to="/settings">
                                        <SettingsIcon />
                                        Settings
                                        <Ripple />
                                    </Link>
                                </li>
                                <li>
                                    <Link className="navlink nohovu p-ripple" to="/">
                                        <LogOut />
                                        Sign out
                                        <Ripple />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

function Leftnav() {
    return (
        <>
            <nav className="leftnavouter">
                <div className="leftnav">
                    <NavLink to="/" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <FileVideo2 />
                        </span>
                        Recordings
                        <Ripple />
                    </NavLink>
                    <NavLink to="/scenarios" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <ListTree />
                        </span>
                        Scenarios
                        <Ripple />
                    </NavLink>
                    <NavLink to="/collections" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <Group />
                        </span>
                        Collections
                        <Ripple />
                    </NavLink>
                    <hr />
                    <NavLink to="/dataobjects" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <Brackets />
                        </span>
                        Data objects
                        <Ripple />
                    </NavLink>
                    <NavLink to="/analysis" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <ChartSpline />
                        </span>
                        Analysis
                        <Ripple />
                    </NavLink>
                    <NavLink to="/reports" className="p-ripple">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <ChartPie />
                        </span>
                        Reports
                        <Ripple />
                    </NavLink>
                    <hr />
                    <NavLink to="/admin">
                        <span className="mat-icon notranslate mat-icon-no-color">
                            <ShieldHalf />
                        </span>
                        Admin
                        <Ripple />
                    </NavLink>
                </div>
                <Copyrite />
            </nav>
        </>
    );
}

function Copyrite() {
    return (
        <>
            <div className="copyright">
                <Link to="/contact">Kontakt</Link>
                <div>Örömfutás © 2024</div>
            </div>
        </>
    );
}

function Contact() {
    return (
        <>
            <h1>Contact</h1>
            <p>Contact info here...</p>
        </>
    );
}

function NoPage() {
    return 'No page like that. 404. Deal with it.';
}

function App() {
    return (
        <>
            <Header />
            <Leftnav />
            <div className="main">
                <Routes>
                    <Route path="/" element={<Recordings />} />
                    <Route index element={<Recordings />} />
                    <Route path="/scenarios" element={<Scenarios />} />
                    <Route path="/collections" element={<Collections />} />
                    <Route path="/reports" element={<Reports />} />
                    <Route path="/analysis" element={<Analysis />} />
                    <Route path="/dataobjects" element={<DataObjects />} />
                    <Route path="/r/:recfileName" element={<RecDetailsPage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/settings" element={<Settings />} />
                    <Route path="*" element={<NoPage />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
