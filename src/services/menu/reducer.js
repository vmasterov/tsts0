import {OPEN_MENU, CLOSE_MENU, REMOVE_MENU} from "./types";

const initialState = {
    visible: false,
    show: true
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
        case REMOVE_MENU:
            return {
                show: true
            };
        default:
            return state;
    }
}