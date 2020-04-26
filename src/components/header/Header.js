import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Popup from "../popup/Popup";
import "./header.scss"

const menu = [
    {
        name: 'Вход',
        link: '/'
    },
    {
        name: 'Регистрация',
        link: '/'
    }
];

export default () => {
    return (
        <header className="header d-flex">
            <div className="container align-self-center">
                <div className="row">
                    <Logo />
                    <Menu content={menu} />
                    <Popup content={menu} />
                </div>
            </div>
        </header>
    )
}