import "./main.scss"
import React, {Component} from "react";
// import Search from "../search/Search";
// import {sectionsArray} from "./sectionsArray";
// import Section from "../section/Section";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Timer from "../timer/Timer";
import {connect} from "react-redux";
import {getTest} from "../../services/test/action";
import Question from "../question/Question";
import Preloader from "../preloader/Preloader";

const breadcrumbsArray = [
    {
        name: 'JavaScript',
        link: '/'
    },
    {
        name: 'Основы JavaScript',
        link: ''
    }
];

const timerObject = {
    min: 1,
    sec: 5
};

class Main extends Component {
    // todo add "Show more" button (6 items)
    /*const sections = sectionsArray.map((section, index) => {
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                <Section section={section} />
            </div>
        )
    });*/

    constructor(props) {
        super(props);

        this.state = {
            current: 0
        }
    }

    showTest = () => {
        this.setState(prevState => ({current: prevState.current + 1}));
    };

    componentDidMount() {
        this.props.getTest();
    }

    render() {
        return (
            <main className="main-content">
                <div className="container">
                    <div className="main-head">
                        <div className="row">
                            <div className="col-10">
                                <h1 className="header1 m-0">Категории</h1>
                            </div>
                            <div className="col-2">
                                <Timer time={timerObject}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                {/*<Search />*/}
                                <Breadcrumbs breadcrumbsArray={breadcrumbsArray}/>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {/*{sections}*/}

                        <div className="col">
                            {/*<p>{props.test.questions && props.test.questions[0].question}</p>*/}
                            {/*<p>{props.test.questions && props.test.questions[1].question}</p>*/}
                            {/*<hr/>*/}

                            {this.props.loading
                                ?
                                <Preloader/>
                                :
                                <div>
                                    <button onClick={this.showTest}>Show test</button>
                                    <Question
                                        quest={this.props.test.questions[this.state.current]}
                                    />
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

const matStateToProps = state => {
    return ({
        test: state.test,
        loading: state.loading.loading
    })
};

const mapDispatchToProps = dispatch => {
    return {
        getTest: () => dispatch(getTest())
    }
};

export default connect(matStateToProps, mapDispatchToProps)(Main);