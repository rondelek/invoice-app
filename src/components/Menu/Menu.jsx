import React from "react";
import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as Home} from '../../assets/home.svg';
import {ReactComponent as Company} from '../../assets/company.svg';
import {ReactComponent as Perks} from '../../assets/perks.svg';
import {ReactComponent as Legal} from '../../assets/legal.svg';
import {ReactComponent as Payments} from '../../assets/payments.svg';
import {ReactComponent as Help} from '../../assets/help.svg';
import {ReactComponent as Chat} from '../../assets/chat.svg';



function Menu() {
    return (
        <div className="menu">
            <div className="menu__logo">
                <Logo />
                <h1 className="menu__logo__title">Invoice App</h1>
            </div>
            <div className="menu__list">
                <button className="menu__list__element">
                    <Home />
                    HOME
                </button>
                <button className="menu__list__element">
                    <Company />
                    COMPANY
                </button>
                <button className="menu__list__element">
                    <Perks />
                    PERKS
                </button>
                <button className="menu__list__element">
                    <Legal />
                    LEGAL
                </button>
                <button className="menu__list__element">
                    <Payments />
                    PAYMENTS
                </button>
            </div>

            <div className="menu__bottom menu__list">
                <hr />
                <button className="menu__list__element">
                    <Help />
                    GET HELP
                </button>
                <button className="menu__list__element">
                    <Chat />
                    CHAT WITH US
                </button>
            </div>
        </div>
    )
}

export default Menu;