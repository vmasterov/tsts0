import "./header.scss"
import React from "react";
import Logo from "./Logo";
// import Menu from "./Menu";
// import Popup from "../popup/Popup";
import {connect} from "react-redux";

// const popup = [
//     {
//         name: 'Вход',
//         link: '/'
//     },
//     {
//         name: 'Регистрация',
//         link: '/'
//     }
// ];

const Header = (props) => {
    return (
        <header className="header d-flex">
            <div className="container align-self-center">
                <div className="row">
                    <Logo page={props.page}/>

                    {/*<Menu content={popup} />*/}
                    {/*{!props.remove && <Popup content={popup} />}*/}
                </div>
            </div>
        </header>
    )
};

const mapStateToProps = state => {
    return ({
        remove: state.menu.remove,
        page: state.pages.page
    })
};

export default connect(mapStateToProps, null)(Header);