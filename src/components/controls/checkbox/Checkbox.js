import "./checkbox.scss";
import React from "react";

export default () => {
    return (
        <label className="input-block">Zero
            <input className="input-orig" type="checkbox" defaultChecked={true}/>
            <span className="input-fake"/>
        </label>
    )
}