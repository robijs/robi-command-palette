import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import AppContainer from './components/AppContainer'
import MainContainer from './components/MainContainer'
import SideBar from './components/SideBar'
import CommandPalette from './components/ComandPalette/CommandPalette'
import { app, routes } from './config'
import './App.css'

export default function App() {
    const { pathname } = useLocation();
    const [pagetitle, setPageTitle] = useState(routes.find(route => route.path === pathname)?.title);
    const [loaded, setLoaded] = useState(false);
    const [isDimmed, setIsDimmed] = useState(false);

    useEffect(() => {
        document.fonts.load("1em bootstrap-icons").then(() => {
            setLoaded(true);
        });
    });

    useEffect(() => {
        setPageTitle(routes.find(route => route.path === pathname)?.title);
    }, [pathname]);

    const { name,title } = app;

    return (
        loaded &&
        <>
            <AppContainer isDimmed={isDimmed}>
                <SideBar appname={title || name} pathname={pathname} />
                <MainContainer title={pagetitle} />
            </AppContainer>
            {/* { process.env.NODE_ENV === 'development' && <CommandPalette setIsDimmed={setIsDimmed} /> } */}
            <CommandPalette setIsDimmed={setIsDimmed} />
        </>
    );
}