import './popup.scss';
import React, {Component} from 'react';
import Rodal from 'rodal';
import {connect} from "react-redux";
import 'rodal/lib/rodal.css';
import {closePopup, openPopup, removePopup} from "../../services/popup/actions";

class Popup extends Component {
    hide = () => {
        this.props.closePopup()
    };

    remove = () => {
        if (!this.props.visible) {
            this.props.removePopup()
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
    openPopup,
    closePopup,
    removePopup
};

export default connect(mapStateToProps, mapDispatchToProps)(Popup);