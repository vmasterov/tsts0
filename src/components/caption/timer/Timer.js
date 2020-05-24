import "./timer.scss"
import React, {Component} from "react";
import {getTimer} from "./getTimer";

class Timer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            min: 0,
            sec: 0
        }
    }

    componentDidMount() {
        console.log(this.props.time);
        this.setState({...this.props.time});

        this.intID = setInterval(() => {
            if (!getTimer(this.state)) {
                clearInterval(this.intID);
                // this.props.pageResult();
                this.props.changePage('/result');
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

export default Timer;