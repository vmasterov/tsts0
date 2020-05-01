import "../controls.scss";
import "./radio.scss";
import React from "react";
import {toggleCtrl} from "../../../services/test/action";
import {connect} from "react-redux";

const Radio = (props) => {
    const change = event => {
        props.toggleCtrl(props.id, props.value, props.checked)

        /*event.target.checked
            ?
            props.check(props.id, props.value, props.type)
            :
            props.uncheck(props.id, props.value, props.type)*/
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
            <span className = "input-fake input-radio-fake" />
        </label>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        toggleCtrl: (id, value, checked) => dispatch(toggleCtrl(id, value, checked))
        /*check: (id, value, type) => dispatch(check(id, value, type)),
        uncheck: (id, value, type) => dispatch(uncheck(id, value, type)),*/
    }
};

export default connect(null, mapDispatchToProps)(Radio);