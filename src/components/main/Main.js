import "./main.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from 'react-router-dom'
import {bindActionCreators} from "redux";
import Test from "../test/Test";
import Sections from "../sections/Sections";
import {fetchSections} from "../../services/sections/action";
import Result from "../result/Result";

class Main extends Component {
    componentDidMount() {
        if (!this.props.sections.length) {
            this.props.fetchSections();
        }
    }

    render() {
        const route = this.props.sections.map((section, index) => {
            return (
                <Route
                    key={section.id}
                    exact path={section.link}
                    component={Test}
                />
            )
        });

        return (
            <main className="main-content">
                <div className="container">
                    <Route
                        exact path="/"
                        component={Sections}
                    />
                    {route}
                    <Route
                        exact path="/result"
                        component={Result}
                    />
                </div>
            </main>
        )
    }
}

const matStateToProps = state => {
    return ({
        sections: state.sections.sections
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            fetchSections
        },
        dispatch
    )
);

export default connect(matStateToProps, mapDispatchToProps)(Main);