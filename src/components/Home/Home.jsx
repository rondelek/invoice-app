import React from "react";
import arrow from '../../assets/arrow-up.png'
import plus from '../../assets/plus.png'

function Home() {
    return (
        <div className="home">
            <div className="home__header">
                <div className="home__header__left">
                    <h2>Invoices</h2>
                    <p>There are 6 invoices.</p>
                </div> 
                <div className="home__header__right">
                    <div className="filter">
                        <h3>Filter</h3>
                        <div className="filter__arrow">
                            <img src={arrow} alt="" className="filter__arrow__img" />
                        </div>
                    </div>
                    <button className="new-invoice">
                        <div className="new-invoice__plus">
                            <img src={plus} alt="" />
                        </div>
                        <h3>New invoice</h3>
                    </button>
                </div>
            </div>
        </div>
    )
}


export default Home;