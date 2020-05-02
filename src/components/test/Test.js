import React, {Component} from "react";
import Question from "../question/Question";
import Button from "../button/Button";
import {pageResult} from "../../services/pages/actions";
import {connect} from "react-redux";

class Test extends Component {
    constructor(props) {
        super(props);

        this.state = {
            current: 0
        };
    }

    click = () => {
        this.setState(prevState => {
                if ((this.props.test.questions.length - 1) === prevState.current) {
                    this.props.pageResult()
                } else {
                    return {current: prevState.current + 1}
                }
            }
        );
    };

    render() {
        return (
            <div className="row">
                <div className="col">
                    <Question
                        questions={this.props.test.questions}
                        current={this.state.current}
                    />

                    <div className="controls d-flex justify-content-end">
                        <Button
                            name='Карта теста'
                            classes='button'
                            click={this.click}
                        />

                        <Button
                            name='Ответить'
                            classes='button button-accent'
                            click={this.click}
                        />

                        <Button
                            name='Завершить'
                            classes='button'
                            click={this.click}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        pageResult: () => dispatch(pageResult())
    }
};

export default connect(null, mapDispatchToProps)(Test);