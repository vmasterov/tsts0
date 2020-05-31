import React, {Component} from "react";
import Question from "./question/Question";
import Button from "../button/Button";
import Popup from "../popup/Popup";
import {history} from "../../store";
import {bindActionCreators} from "redux";
import {fetchTest, toggleCtrl} from "../../services/test/action";
import {connect} from "react-redux";
import Preloader from "../preloader/Preloader";
import {closePopup, openPopup} from "../../services/popup/actions";
import Caption from "../caption/Caption";
import {push} from "connected-react-router";

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            questions: []
        };
    }

    componentDidMount() {
        if (!this.props.isFetching && !this.props.test.id) {
            this.props.fetchTest(history.location.pathname);
        }
    }

    goToQuestion = id => {
        this.setState({current: id});
        this.props.closePopup();
    };

    showMap = () => {
        const questions =
            <ul className="questions-list">
                {
                    this.props.test.questions.map((question, index) => {
                        return (
                            <li
                                key={index}
                                onClick={() => this.goToQuestion(index)}
                            >
                                {(question.answer.length ? '+ ' : '- ') + question.question}
                            </li>
                        );
                    })
                }
            </ul>;
        this.setState({questions: questions});
        this.props.openPopup();
    };

    setAnswer = () => {
        this.setState(prevState => {
                if ((this.props.test.questions.length - 1) === prevState.current) {
                    this.props.changePage("/result");
                } else {
                    return {current: prevState.current + 1};
                }
            }
        );
    };

    endTest = () => {
        this.props.changePage("/result");
    };

    render() {
        return (
            <div>
                {
                    this.props.test.id
                        ?
                        <div>
                            < Caption

                                timer={this.props.test.timer}
                                loading={this.props.loading}
                                page={this.props.page}
                                pageResult={this.props.pageResult}
                                getSearch={this.props.getSearch}
                                changePage={this.props.changePage}
                            />
                            <div className="row">
                                <div className="col">
                                    <Question
                                        questions={this.props.test.questions}
                                        current={this.state.current}
                                        toggleCtrl={this.props.toggleCtrl}
                                    />

                                    <div className="controls d-md-flex justify-content-end">
                                        <Button
                                            name='Карта теста'
                                            classes='button'
                                            click={this.showMap}
                                        />

                                        <Button
                                            name='Ответить'
                                            classes='button button-accent'
                                            click={this.setAnswer}
                                        />

                                        <Button
                                            name='Завершить'
                                            classes='button'
                                            click={this.endTest}
                                        />
                                    </div>

                                    {!this.props.showPopup &&
                                    <Popup
                                        content={this.state.questions}
                                        width={window.innerWidth > 576 ? 500 : 95}
                                        height={window.innerWidth > 576 ? 400 : 95}
                                        measure={window.innerWidth > 576 ? 'px' : '%'}

                                    />
                                    }
                                </div>
                            </div>
                        </div>
                        :
                        <Preloader />
                }
            </div>
        )
    }
}

const matStateToProps = state => {
    return ({
        isFetching: state.test.isFetching,
        test: state.test.test
    })
};


const mapDispatchToProps = dispatch => (
    bindActionCreators(
        {
            fetchTest,
            toggleCtrl,
            openPopup,
            closePopup,
            changePage: (link) => push(link)
        },
        dispatch
    )
);

export default connect(matStateToProps, mapDispatchToProps)(Test);