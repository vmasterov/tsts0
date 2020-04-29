import "./questuin.scss"
import React from "react";
import Checkbox from "../controls/checkbox/Checkbox";
// import Radio from "../controls/radio/Radio";

export default (props) => {
    return (
        <div className="question">
            <div className="question-head d-flex">
                <div className="question-number">4 из 5</div>
                <div className="question-text">Что вернёт typeof {props.quest.question}</div>
            </div>
            <div className="question-body">
                <Checkbox />
                <Checkbox />
                <Checkbox />
                <Checkbox />
            </div>
        </div>
    )
}