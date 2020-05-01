import {GET_TEST, TOGGLE_CTRL} from "./types";

const initialState = {
    questions: [],
    timer: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {...state, ...action.payload};

        case TOGGLE_CTRL:
            let newState = {...state};
            let qsts = newState.questions;
            let qInx = qsts.findIndex(item => item.id === action.payload.id);
            let aInd = qsts[qInx].answer.findIndex(item => item === action.payload.value);

            if (action.payload.checked) {
                if (qsts[qInx].type === 'radio') {
                    qsts[qInx].answer = []
                }

                if (aInd === -1) {
                    qsts[qInx].answer = qsts[qInx].answer.concat([action.payload.value])
                }
            }
            else {
                if (aInd !== -1) {
                    qsts[qInx].answer.splice(aInd, 1);
                    qsts[qInx].answer = [].concat(qsts[qInx].answer);
                }
            }

            return {...newState};

        default:
            return state;
    }
}
