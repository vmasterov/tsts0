import empty from "../../static/empty.svg";
import "./section.scss";
import React from "react";
import {connect} from "react-redux";
import {pageTest} from "../../services/pages/actions";
import {getTest} from "../../services/test/action";

const Section = (props) => {
    // todo show full section's caption by hover
    return (
        <a
            href={props.section.link}
            className="section-card"
            onClick={(event) => {
                event.preventDefault();
                props.getTest();
                props.pageTest();
            }}
        >
            <span
                className="section-logo"
                style={{backgroundImage: "url(" + (props.section.preview ? props.section.preview : empty) + ")"}}
            />
            <span className="section-name">{props.section.name}</span>
        </a>
    )
};

const mapDispatchToProps = dispatch => {
    return {
        pageTest: () => dispatch(pageTest()),
        getTest: () => dispatch(getTest())
    }
};

export default connect(null, mapDispatchToProps)(Section);