import React from "react";
// import lang from "../../static/lang.svg";
import burger from "../../static/burger.svg";
import {closeMenu, openMenu} from "../../services/menu/actions";
import {connect} from "react-redux";

const Menu = (props) => {
    const showMenu = () => {
        props.openMenu()
    };

    const menu = props.content.map((item, index) => {
        return (
            <li key={index}>
                <a href={item.link}>{item.name}</a>
            </li>
        );
    });

    return (
        <div className="col">
            <nav className="menu d-flex h-100">
                <ul className="menu-list mt-0 mb-0 ml-auto p-0 align-self-center">
                    {/*<li>*/}
                    {/*    <a href="/">*/}
                    {/*        <img src={lang} alt="Выбор языка"/>*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {menu}
                </ul>
                <div
                    className="burger mt-0 mb-0 ml-auto"
                    onClick={showMenu}
                >
                    <img src={burger} alt=""/>
                </div>
            </nav>
        </div>
    )
};

const mapStateToProps = state => {
    return ({
        visible: state.menu.visible
    })
};

const mapDispatchToProps = {
    openMenu,
    closeMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);