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
        this.setState({
            ...timer(this.props.time)
        });

        let intID = setInterval(() => {
            this.setState({
                ...timer(this.state)
            });
        }, 1000);
    }

    render() {
        return (
            <div className="timer d-flex justify-content-end">
                <div className="timer-inner">
                    <span className="timer-min">{this.state.min}</span>
                    <span className="timer-separator">:</span>
                    <span className="timer-sec">{this.state.sec}</span>
                </div>
            </div>
        )
    }
}

function timer(state) {

    return {
        min: state.min - 1,
        sec: state.sec
    }
}

export default Timer;