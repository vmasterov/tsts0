import React, {Component} from 'react';
import Rodal from 'rodal';
import {connect} from "react-redux";
import 'rodal/lib/rodal.css';
import {closeMenu, openMenu, removeMenu} from "../../services/menu/actions";

class Popup extends Component {
    hide = () => {
        this.props.closeMenu()
    };

    remove = () => {
        if (!this.props.visible) {
            this.props.removeMenu()
        }
    };

    render() {
        const menu = this.props.content.map((item, index) => {
            return (
                <li key={index}>
                    <a href={item.link}>{item.name}</a>
                </li>
            );
        });


        return (
            <div>
                <Rodal
                    width={95}
                    height={95}
                    measure={"%"}
                    visible={this.props.visible}
                    onAnimationEnd={this.remove}
                    onClose={this.hide}
                >
                    <div className="popup-menu-content">
                        <ul className="m-0 p-0">
                            {menu}
                        </ul>
                    </div>
                </Rodal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        visible: state.menu.visible,
        remove: state.menu.remove
    })
};

const mapDispatchToProps = {
    openMenu,
    closeMenu,
    removeMenu
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);