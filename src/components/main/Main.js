import "./main.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from 'react-router-dom'
import {bindActionCreators} from "redux";
// import Preloader from "../preloader/Preloader";
// import Caption from "../caption/Caption";
import Test from "../test/Test";
import Sections from "../sections/Sections";
import {fetchSections, getSections} from "../../services/sections/action";
import {pageResult, pageSections, pageTest} from "../../services/pages/actions";
import {fetchTest, getTest, toggleCtrl} from "../../services/test/action";
import {getSearch} from "../../services/search/action";
import {closeMenu, openMenu} from "../../services/popup/actions";
// import Result from "../result/Result";
import {push} from "connected-react-router";
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
                    render={
                        () => {
                            return (
                                <Test
                                    changePage={this.props.changePage}
                                />
                            )
                        }
                    }
                />
            )
        });

        return (
            <main className="main-content">
                <div className="container">
                    <Route
                        exact path="/"
                        render={
                            () => {
                                return (
                                    <Sections
                                        sections={this.props.sections}
                                        isFetching={this.props.isFetching}
                                        search={this.props.search}
                                        fetchSections={this.props.fetchSections}
                                        fetchTest={this.props.fetchTest}
                                        changePage={this.props.changePage}
                                    />
                                    )
                            }
                        }
                    />
                    {route}
                    <Route
                        exact path="/result"
                        render={
                            () => {
                                return (
                                    <Result
                                        changePage={this.props.changePage}
                                    />
                                )
                            }
                        }
                    />
                </div>
            </main>
        )
    }
}

const matStateToProps = state => {
    return ({
        sections: state.sections.sections,
        search: state.search,

        loading: state.loading.loading,
        page: state.pages.page,
        show: state.menu.show
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            fetchSections,
            changePage: (link) => push(link),

            pageTest,
            pageResult,
            pageSections,
            toggleCtrl,
            getSearch,
            // openMenu,
            // closeMenu
        },
        dispatch
    )
);

export default connect(matStateToProps, mapDispatchToProps)(Main);



/*
<Caption
                        timer={this.props.test.timer}
                        loading={this.props.loading}
                        page={this.props.page}
                        pageResult={this.props.pageResult}
                        getSearch={this.props.getSearch}
                    />

                    {this.props.page === 'sections' &&
                        <Sections
                            getSections={this.props.getSections}
                            getTest={this.props.getTest}
                            pageTest={this.props.pageTest}
                            sections={this.props.sections}
                            search={this.props.search}
                        />
                    }

                    {this.props.page === 'test' &&
                        (this.props.loading
                            ?
                            <Preloader/>
                            :
                            <Test
                                test={this.props.test}
                                toggleCtrl={this.props.toggleCtrl}
                                showPopup={this.props.show}
                                openPopup={this.props.openMenu}
                                closePopup={this.props.closeMenu}
                                pageResult={this.props.pageResult}
                            />
                        )
                    }

                    {this.props.page === 'result' &&
                        <Result
                           test={this.props.test.questions}
                           pageResult={this.props.pageResult}
                           pageSections={this.props.pageSections}
                           pageTest={this.props.pageTest}
                        />
                    }
*/