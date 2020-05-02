import "./main.scss"
import React, {Component} from "react";
import {connect} from "react-redux";
import Preloader from "../preloader/Preloader";
import Caption from "../caption/Caption";
import Test from "../test/Test";
import Sections from "../sections/Sections";

class Main extends Component {
    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <Caption
                        timer={this.props.test.timer}
                        loading={this.props.loading}
                        page={this.props.page}
                    />

                    {this.props.page === 'sections' && <Sections/>}

                    {this.props.page === 'test' &&
                        (this.props.loading ? <Preloader/> : <Test test={this.props.test}/>)
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
        page: state.pages.page
    })
};

export default connect(matStateToProps, null)(Main);