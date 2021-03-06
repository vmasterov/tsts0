import {GET_SECTIONS} from "./types";

const initialState = {
    sections: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_SECTIONS:
            return {sections: action.payload};

        default:
            return state;
    }
}
