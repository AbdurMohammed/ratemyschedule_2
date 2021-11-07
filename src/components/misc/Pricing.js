import React from 'react'
import './Pricing.css'

const Home = () => {
    return (
        <React.Fragment>
            <section className="content-container">
            <div className="columns">
                <ul className="price">
                    <li className="col-header" href="/">Home</li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" style={{backgroundColor:'#37387a'}} href="/Catalog">Catalog</li>
                </ul>
                </div>

                <div className="columns">
                <ul className="price">
                    <li className="col-header" href="/ScheduleRater">ScheduleRater</li>
                </ul>
            </div>
            </section>
        </React.Fragment>
    )
}

export default Home;