import React from 'react'
// import { Outlet } from 'react-router-dom'
// import SubBar from '../../components/SubBar/SubBar'
// import routes from './routes'
import './Settings.css'

export default function Settings({ title }) {
    return (
        <div className="Settings">
            <div className='alert primary' style={{ flex: 1, margin: '60px' }}>
                The <strong>settings page</strong> is a work in progress. We appreciate your patience!
            </div>
            {/* <SubBar parentpath='Settings' routes={routes} />
            <div className='right-ctr'>
                <Outlet />
            </div> */}
        </div>
    );
}