import empty from "../../../static/empty.svg";
import "./section.scss";
import React from "react";

const Section = (props) => {
    // todo show full section's caption by hover
    return (
        <a
            className="section-card"
            href="/"
            onClick={(event) => props.goTest(event, props.section.link)}
        >
            <span
                className="section-logo"
                style={{backgroundImage: "url(" + (props.section.preview ? props.section.preview : empty) + ")"}}
            />
            <span className="section-name">{props.section.name}</span>
        </a>
    )
};

export default Section;