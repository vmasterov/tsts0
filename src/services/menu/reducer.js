import {OPEN_MENU, CLOSE_MENU} from "./types";

const initialState = {
    visible: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case OPEN_MENU:
            return {
                visible: true
            };
        case CLOSE_MENU:
            return {
                visible: false
            };
        default:
            return state;
    }
}