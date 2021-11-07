import React from 'react'
import { Link } from "react-router-dom"

import './Footer.css'

const MenuBar = () => {
    return (
        <footer >
            <div className="footer">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link href="/Catalog">Catalog</Link></li>
                    <li><Link to="/ScheduleRater">ScheduleRater</Link></li>
                </ul>

                <p>&copy; Noah Webster's Second Floor. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default MenuBar;