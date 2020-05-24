import './result.scss';
import React from "react";
import rightAnswers from "./answers.json"
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchTest, toggleCtrl} from "../../services/test/action";
import {closePopup, openPopup} from "../../services/popup/actions";
// import Button from "../button/Button";
// import Test from "../test/Test";

const Result = props => {
    const results = props.test.id && getResults(props.test.questions, rightAnswers.questions);
    const content = props.test.id ?
        <div className="row results">
            <div className="col-md-3">
            <div className="results-ratio">
                {results.ratio}
            </div>

            <div className="results-quantity">
                {results.correct} из {results.all}
            </div>

            <div className="results-buttons">
                {/*<Button*/}
                {/*    name='Пройти ещё раз'*/}
                {/*    classes='button button-accent'*/}
                {/*    click={goToTest}*/}
                {/*/>*/}

                {/*<Button*/}
                {/*    name='На главную'*/}
                {/*    classes='button button-accent'*/}
                {/*    click={goToMain}*/}
                {/*/>*/}
                <a href="/" className='button button-accent'>На главную</a>
            </div>
        </div>
            <div className="col-md-8 offset-md-1">
            <ul className="result-list">
                {results.layout}
            </ul>
        </div>
        </div>
    :
            <div>No data</div>
    ;
    // const goToMain = () => {
    //     props.pageSections();
    // };
    //
    // const goToTest = () => {
    //     props.pageTest()
    // };

    return (
        <div>
            {content}
        </div>
        )
};

const matStateToProps = state => {
    return ({
        test: state.test.test
    })
};

export default connect(matStateToProps)(Result);

function getResults(questions, rightAnswers) {
    let result = 0;
    let counter;

    let layout = questions.map((question, qIndex) => {
        counter = 0;

        return (
            <li key={qIndex}>{question.question}
                <ul className="result-list result-list-answers">
                    {
                        question.answers.map((answerObj, aIndex, aArray) => {
                            let rightAnswerArr = rightAnswers[qIndex].answer;
                            let checkedAnswerObj = checkAnswer(answerObj, question.answer, rightAnswerArr);
                            let isLastItem = (aArray.length - 1) === aIndex;

                            counter += checkedAnswerObj.rightVariantCount;
                            if (isLastItem && counter === rightAnswerArr.length) {
                                result++;
                            }

                            return (
                                <li key={aIndex} className={checkedAnswerObj.classes}>
                                    {checkedAnswerObj.curAnsw}
                                </li>
                            )
                        })
                    }
                </ul>
            </li>
        )
    });

    return {
        layout,
        ratio: result / rightAnswers.length * 100,
        all: rightAnswers.length,
        correct: result
    };
}

function checkAnswer(userAnswerObj, userAnswArr, rightAnswArr) {
    let userVar = userAnswArr.includes(userAnswerObj.value);
    let rightVar = rightAnswArr.includes(userAnswerObj.value);
    let curAnsw = '';
    let rightVariantCount = 0;
    let classes = '';

    if (userVar && rightVar) {
        curAnsw = '++ ' + userAnswerObj.text;
        classes = 'right';
        ++rightVariantCount;
    } else if (userVar) {
        curAnsw = '- ' + userAnswerObj.text;
        classes = 'wrong';
        --rightVariantCount;
    } else if (rightVar) {
        curAnsw = '+- ' + userAnswerObj.text;
        classes = 'part';
        --rightVariantCount;
    } else {
        curAnsw = '0 ' + userAnswerObj.text;
        classes = 'empty';
    }

    return {curAnsw, rightVariantCount, classes};
}