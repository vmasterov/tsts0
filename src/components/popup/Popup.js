import React, {Component} from 'react';
import Rodal from 'rodal';
import {connect} from "react-redux";
import 'rodal/lib/rodal.css';

class Popup extends Component {
    constructor(props) {
        super(props);
        // this.state = { visible: false };
    }

    /*show = () => {
        this.setState({ visible: true });
    };*/

    hide = () => {
        this.setState({ visible: false });
    };

    render() {
        return (
            <div>
                {/*<button onClick={this.show}>show</button>*/}

                <Rodal visible={this.props.visible} onClose={this.hide}>
                    <div style={{color: 'red'}}>{this.props.mess}</div>
                </Rodal>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        visible: state.menu.visible
    })
};

export default connect(mapStateToProps, null)(Popup);

// export default Popup;




/*
import React, {Component} from 'react';
import {connect} from "react-redux";

class Popup extends Component {
    render() {
        return (
            <div>
                {this.props.mess}
                {this.props.visible == false ? " false" : " true"}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return ({
        visible: state.menu.visible
    })
};

export default connect(mapStateToProps, null)(Popup);
*/
