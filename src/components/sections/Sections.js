import React from "react";
import Section from "../section/Section";
import {sectionsArray} from "./sectionsArray";

export default () => {
    const sections = sectionsArray.map((section, index) => {
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                <Section section={section}/>
            </div>
        )
    });

    return (
        <div className="row">
            {sections}
        </div>
    )
}