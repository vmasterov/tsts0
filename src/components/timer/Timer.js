import "./timer.scss"
import React, {Component} from "react";

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

        let intID = setInterval(() => {
            if (!timer(this.state)) {
                clearInterval(intID);
            }
            this.setState({...timer(this.state)});
        }, 1000);
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

function timer(state) {
    if (state.min === 0 && state.sec === 0) {
        return false;
    }
    if (state.sec > 0) {
        return ({
            min: state.min,
            sec: state.sec - 1
        });
    }
    else {
        return ({
            min: state.min - 1,
            sec: 59
        });
    }
}

export default Timer;