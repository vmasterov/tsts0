import React, {Component} from "react";
import Section from "./section/Section";
import {fetchTest} from "../../services/test/action";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import Caption from "../caption/Caption";

import {getSearch} from "../../services/search/action";

class Sections extends Component {
    goTest = (event, link) => {
        event.preventDefault();

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
        const filteredSections = this.props.sections.filter(section => {
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
            <div>
                <Caption
                    timer={this.props.test.timer}
                    loading={this.props.loading}
                    page={this.props.page}
                    pageResult={this.props.pageResult}
                    getSearch={this.props.getSearch}
                />
                <div className="row">{sections}</div>
            </div>
        )
    }
}

const matStateToProps = state => {
    return ({
        isFetching: state.test.isFetching,
        test: state.test.test,
        search: state.search
    })
};


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            fetchTest,
            getSearch
        },
        dispatch
    )
);

export default connect(matStateToProps, mapDispatchToProps)(Sections);