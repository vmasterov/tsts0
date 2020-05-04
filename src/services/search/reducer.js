import {SEARCH} from "./types";

const initialState = '';

export default (state = initialState, action) => {
    switch (action.type) {
        case SEARCH:
            return action.payload;
        default:
            return state;
    }
}