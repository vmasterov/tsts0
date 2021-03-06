import React, {Component} from "react";
import Question from "./question/Question";
import Button from "../button/Button";
import Popup from "../popup/Popup";

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0,
            questions: []
        };
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
                    this.props.pageResult();
                } else {
                    return {current: prevState.current + 1};
                }
            }
        );
    };

    endTest = () => {
        this.props.pageResult();
    };

    render() {
        return (
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
        )
    }
}

export default Test;