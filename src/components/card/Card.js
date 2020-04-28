import empty from "../../static/empty.svg";
import "./card.scss";
import React from "react";

export default ({section}) => {
    // todo show full section's caption by hover
    return (
        <a href={section.link} className="section-card">
            <span
                className="section-logo"
                style={{backgroundImage: "url(" + (section.preview ? section.preview : empty) + ")"}}
            />
            <span className="section-name">{section.name}</span>
        </a>
    )
}