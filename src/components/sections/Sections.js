import React, {Component} from "react";
import Section from "./section/Section";
import {bindActionCreators} from "redux";
import {fetchSections} from "../../services/sections/action";
import {push} from "connected-react-router";
// import {getSearch} from "../../services/search/action";
import {connect} from "react-redux";
import {fetchTest, getTest} from "../../services/test/action";

class Sections extends Component {
    componentDidMount() {
        if (!this.props.sections.length) {
            this.props.fetchSections();
        }
    }

    goTest = (event, link) => {
        event.preventDefault();

        console.log(this.props);

        const isFetching = this.props.isFetching;
        const testId = this.props.test.id;
        const url = link.slice(1);

        if (!isFetching) {
            if ((testId && testId !== url) || !testId) {
                this.props.fetchTest(link);
            }
        }

        this.props.changePage(link);
    };

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
                        goTest={this.goTest}
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

const matStateToProps = state => {
    return ({
        sections: state.sections,
        isFetching: state.test.isFetching,
        test: state.test.test,
        search: state.search
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            fetchSections,
            fetchTest,
            changePage: (link) => push(link)
        },
        dispatch
    )
);

export default connect(matStateToProps, mapDispatchToProps)(Sections);