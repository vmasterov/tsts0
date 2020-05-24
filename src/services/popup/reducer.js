import {OPEN_POPUP, CLOSE_POPUP, REMOVE_POPUP} from "./types";

const initialState = {
    visible: false,
    show: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_POPUP:
            return {
                visible: true
            };
        case CLOSE_POPUP:
            return {
                visible: false
            };
        case REMOVE_POPUP:
            return {
                show: true
            };
        default:
            return state;
    }
}