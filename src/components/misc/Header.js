import React from 'react'
import { Link } from "react-router-dom"
import './Header.css'

const Header = () => {
    return (
        <React.Fragment>
            <header className="bg-image">
                <div className="bg-container">
                    <h1>Rate My Schedule</h1>
                    <h2>Is your class scheudle hot or not?!??!</h2>
                    <Link to="/ScheduleRater">Test it now!</Link>
                </div>
            </header>
        </React.Fragment>
    )
}

export default Header;