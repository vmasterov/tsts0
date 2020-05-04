import React, {Component} from "react";
import Section from "./section/Section";

class Sections extends Component {
    componentDidMount() {
        this.props.getSections()
    }

    render() {
        const filteredSections = this.props.sections.sections.filter(section => {
            const name = section.name.toLowerCase();
            const find = this.props.search.toLowerCase();

            return name.includes(find);
        });

        const sections = filteredSections.map((section, index) => {
            return (
                <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                    <Section
                        section={section}
                        getTest={this.props.getTest}
                        pageTest={this.props.pageTest}
                    />
                </div>
            )
        });

        return (
            <div className="row">
                {sections}
            </div>
        )
    }
}

export default Sections;