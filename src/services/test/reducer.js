import {GET_TEST} from "./types";

const initialState = {
    test: {}
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_TEST:
            return {...action.payload};
        default:
            return state;
    }
}