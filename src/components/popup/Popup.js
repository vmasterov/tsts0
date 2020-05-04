import './popup.scss';
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
        return (
            <div>
                <Rodal
                    width={this.props.width}
                    height={this.props.height}
                    measure={this.props.measure}
                    visible={this.props.visible}
                    onAnimationEnd={this.remove}
                    onClose={this.hide}
                >
                    <div className="popup-content">
                        {this.props.content}
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