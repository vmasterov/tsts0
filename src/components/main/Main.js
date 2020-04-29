import "./main.scss"
import React from "react";
// import Search from "../search/Search";
// import {sectionsArray} from "./sectionsArray";
// import Section from "../section/Section";
import Breadcrumbs from "../breadcrumbs/Breadcrumbs";
import Timer from "../timer/Timer";
import {connect} from "react-redux";
import {getTest} from "../../services/test/action";
import Question from "../question/Question";

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

const Main = (props) => {
    // todo add "Show more" button (6 items)
    /*const sections = sectionsArray.map((section, index) => {
        return (
            <div key={index} className="col-lg-3 col-md-4 col-sm-6 col-md-3">
                <Section section={section} />
            </div>
        )
    });*/

    const showTest = () => {
        props.getTest();
    };

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
                        <button onClick={showTest}>Show test</button>
                        <p>{props.test.questions && props.test.questions[0].question}</p>
                        <p>{props.test.questions && props.test.questions[1].question}</p>
                        <hr/>
                        <Question />
                    </div>
                </div>
            </div>
        </main>
    )
};

const matStateToProps = state => {
    return ({
        test: state.test
    })
};

const mapDispatchToProps = dispatch => {
    return {
        getTest: () => dispatch(getTest())
    }
};

export default connect(matStateToProps, mapDispatchToProps)(Main);