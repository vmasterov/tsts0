import "../controls.scss";
import "./checkbox.scss";
import React from "react";

export default () => {
    return (
        <label className="input-block">Zero
            <input className="input-orig" type="checkbox" />
            <span className="input-checkbox-fake input-fake"/>
        </label>
    )
}