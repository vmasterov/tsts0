import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Popup from "../popup/Popup";
import "./header.scss"

export default () => {
    return (
        <header className="header d-flex">
            <div className="container align-self-center">
                <div className="row">
                    <Logo />
                    <Menu />
                    <Popup mess={"I know React!"}/>
                </div>
            </div>
        </header>
    )
}