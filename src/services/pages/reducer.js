import {RESULT, SECTIONS, TEST} from "./types";

const initialState = {
    page: 'sections'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SECTIONS:
            return {
                page: 'Sections'
            };
        case TEST:
            return {
                page: 'test'
            };
        case RESULT:
            return {
                page: 'result'
            };
        default:
            return state;
    }
}