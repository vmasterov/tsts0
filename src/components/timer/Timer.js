import "./timer.scss"
import React, {Component} from "react";
import {getTimer} from "./getTimer";
import {pageResult} from "../../services/pages/actions";
import {connect} from "react-redux";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0
        }
    }

    componentDidMount() {
        this.setState({...this.props.time});

        this.intID = setInterval(() => {
            if (!getTimer(this.state)) {
                clearInterval(this.intID);
                this.props.result();
            }
            else {
                this.setState({...getTimer(this.state)});
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.intID);
    }

    render() {
        return (
            <div className="timer d-flex justify-content-end">
                <div className="timer-inner">
                    <span className="timer-min">{this.state.min < 10 ? '0' + this.state.min : this.state.min}</span>
                    <span className="timer-separator">:</span>
                    <span className="timer-sec">{this.state.sec < 10 ? '0' + this.state.sec : this.state.sec}</span>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        result: () => dispatch(pageResult())
    }
};



export default connect(null, mapDispatchToProps)(Timer);