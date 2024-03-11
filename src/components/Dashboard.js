import React from 'react'
import Sidebar from './Sidebar'
import { Outlet } from 'react-router-dom';
import styles from '../styles/dashboard.module.css'

const Dashboard = () => {
    return (
        <div className={styles.dashboard_mainContainer}>
            <div className={styles.dashboard_heading_div}>
                <div className={styles.dashboard_heading_left}>
                    <div>
                        <Sidebar />
                    </div>
                    <div>
                        <h1 className={styles.dashboard_head}>Dashboard</h1>
                    </div>
                </div>
                <div>
                   <h1 className={styles.username}>testuser</h1>
                </div>
            </div>
        
            <div>
                <Outlet />
            </div>
        </div>

    )
}

export default Dashboard
