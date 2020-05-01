import "./controls.scss";
import React from "react";
import {toggleCtrl} from "../../services/test/action";
import {connect} from "react-redux";

const Control = (props) => {
    const change = event => {
        props.toggleCtrl(props.id, props.value, event.target.checked)
    };

    return (
        <label className = "input-block" >{props.text}
            <input
                className="input-orig"
                type = {props.type}
                name = {props.name}
                value={props.value}
                checked={props.answ.findIndex(item => item === props.value) !== -1}
                onChange={change}
            />
            <span className={props.type === "radio" ? "input-fake input-radio-fake" : "input-fake input-checkbox-fake"} />
        </label>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCtrl: (id, value, checked) => dispatch(toggleCtrl(id, value, checked))
    }
};

export default connect(null, mapDispatchToProps)(Control);