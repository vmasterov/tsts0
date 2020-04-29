import "../controls.scss";
import "./radio.scss";
import React from "react";

export default () => {
    return (
        <label className = "input-block" > One
            <input className="input-orig"  type = "radio" name = "radio" />
            <span className = "input-fake input-radio-fake" />
        </label>
    )
}