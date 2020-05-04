import "./main.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import Preloader from "../preloader/Preloader";
import Caption from "../caption/Caption";
import Test from "../test/Test";
import Sections from "../sections/Sections";
import {getSections} from "../../services/sections/action";
import {pageResult, pageTest} from "../../services/pages/actions";
import {getTest, toggleCtrl} from "../../services/test/action";
import {getSearch} from "../../services/search/action";
import {closeMenu, openMenu} from "../../services/menu/actions";

class Main extends Component {
    render() {
        return (
            <main className="main-content">
                <div className="container">
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
                                pageResult={this.props.pageResult}
                                toggleCtrl={this.props.toggleCtrl}
                                showPopup={this.props.show}
                                openPopup={this.props.openMenu}
                                closePopup={this.props.closeMenu}
                            />
                        )
                    }

                    {this.props.page === 'result' && <div className="row"><h1>Page result </h1></div>}
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

const mapDispatchToProps = dispatch => {
    return {
        getSections: () => dispatch(getSections()),
        getTest: () => dispatch(getTest()),
        pageTest: () => dispatch(pageTest()),
        pageResult: () => dispatch(pageResult()),
        toggleCtrl: (id, value, checked) => dispatch(toggleCtrl(id, value, checked)),
        getSearch: (find) => dispatch(getSearch(find)),
        openMenu: () => dispatch(openMenu()),
        closeMenu: () => dispatch(closeMenu())

}
};

export default connect(matStateToProps, mapDispatchToProps)(Main);