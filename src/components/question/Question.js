import "./questuin.scss"
import React from "react";
import Checkbox from "../controls/checkbox/Checkbox";

export default () => {
    return (
        <div className="question">
            <div className="question-head d-flex">
                <div className="question-number">4 из 5</div>
                <div className="question-text">Что вернёт typeof</div>
            </div>
            <div className="question-body">

                <Checkbox />

                {/*<div className="question-variant">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="name"*/}
                {/*        id="1"*/}
                {/*    />*/}
                {/*    <label htmlFor="1">Name</label>*/}
                {/*</div>*/}
                {/*<div className="question-variant">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="name"*/}
                {/*        id="1"*/}
                {/*    />*/}
                {/*    <label htmlFor="1">Name</label>*/}
                {/*</div>*/}
                {/*<div className="question-variant">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="name"*/}
                {/*        id="1"*/}
                {/*    />*/}
                {/*    <label htmlFor="1">Name</label>*/}
                {/*</div>*/}
                {/*<div className="question-variant">*/}
                {/*    <input*/}
                {/*        type="checkbox"*/}
                {/*        name="name"*/}
                {/*        id="1"*/}
                {/*    />*/}
                {/*    <label htmlFor="1">Name</label>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}