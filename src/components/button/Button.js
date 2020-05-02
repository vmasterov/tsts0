import './button.scss';
import React from "react";

export default (props) => {
    return (
        <button
            className={props.classes}
            onClick={props.click}
        >
            {props.name}
        </button>
    )
}