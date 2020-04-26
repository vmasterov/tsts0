import React from "react";
import Logo from "./Logo";
import Menu from "./Menu";
import Popup from "../popup/Popup";
import "./header.scss"
import {connect} from "react-redux";

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

const Header = (props) => {
    return (
        <header className="header d-flex">
            <div className="container align-self-center">
                <div className="row">
                    <Logo />
                    <Menu content={menu} />
                    {!props.remove && <Popup content={menu} />}
                </div>
            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return ({
        remove: state.menu.remove
    })
};

export default connect(mapStateToProps, null)(Header);