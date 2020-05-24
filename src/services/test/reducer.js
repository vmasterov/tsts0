import {FETCH_TEST, FETCHING_TEST, FETCHED_TEST, TOGGLE_CTRL} from "./types";

const initialState = {
    test: {},
    isFetching: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_TEST:
            return {...state, isFetching: true};

        case FETCH_TEST:
            return {...state, test: action.payload};

        case FETCHED_TEST:
            return {...state, isFetching: false};

        case TOGGLE_CTRL:
            let qsts = [...state.test.questions];
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

            return {...state, test: {...state.test, questions: qsts}};

        default:
            return state;
    }
}
