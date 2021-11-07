import React from 'react'

import './MenuBar.css'

const MenuBar = () => {
    return (
        <nav className="header">
            <div className="nav-wrapper">
                <a className="logo" href='/'>Rate My Schedule</a>
                <input className="menu-btn" type="checkbox" id="menu-btn"/>
                <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>

                <ul className="menu">
                    <li><a href="/">Home</a></li>
                    <li><a href="/Catalog">Catalog</a></li>
                    <li><a href="/ScheduleRater">Schedule Rater</a></li>                
                </ul>
            </div>
        </nav>
    )
}

export default MenuBar;