import "./main.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import {Route} from 'react-router-dom'
import {bindActionCreators} from "redux";
import Preloader from "../preloader/Preloader";
import Caption from "../caption/Caption";
import Test from "../test/Test";
import Sections from "../sections/Sections";
import {getSections} from "../../services/sections/action";
import {pageResult, pageSections, pageTest} from "../../services/pages/actions";
import {getTest, toggleCtrl} from "../../services/test/action";
import {getSearch} from "../../services/search/action";
import {closeMenu, openMenu} from "../../services/menu/actions";
import Result from "../result/Result";

class Main extends Component {


    render() {
        /*const route = this.props.sections.map((section, index) => {
            return (
                <Route
                    key={section.id}
                    exact
                    path={section.link}
                    component={Test}
                />
            )
        });*/

        return (
            <main className="main-content">
                <div className="container">
                    <Route
                        exact path="/"
                        // component={Sections}
                        render={() => <Sections testProp="Test1" />}
                    />
                    <Route
                        exact path="/1"
                        component={Test}
                    />
                </div>
            </main>
        )
    }
}

const matStateToProps = state => {
    return ({
        test: state.test,
        loading: state.loading.loading,
        page: state.pages.page,
        sections: state.sections,
        search: state.search,
        show: state.menu.show
    })
};

const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            // getSections,
            // getTest,
            pageTest,
            pageResult,
            pageSections,
            toggleCtrl,
            getSearch,
            openMenu,
            closeMenu
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