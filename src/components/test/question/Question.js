import "./questuin.scss"
import React from "react";
import Control from "../../controls/Control";

export default (props) => {
    return (
        <div className="question">
            <div className="question-head d-md-flex">
                <div className="question-number">{props.current + 1} из {props.questions.length}</div>
                <div className="question-text">{props.questions[props.current].question}</div>
            </div>
            <div className="question-body">
                {
                    props.questions[props.current].answers.map((item, index) => {
                        return (
                            <Control
                                key={index}
                                text={item.text}
                                name={item.name}
                                value={item.value}
                                id={props.questions[props.current].id}
                                answ={props.questions[props.current].answer}
                                type={props.questions[props.current].type}
                                toggleCtrl={props.toggleCtrl}
                                // change={props.change}
                            />
                        )
                    })
                }
            </div>
        </div>
    )
}