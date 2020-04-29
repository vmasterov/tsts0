import {LOADER_HIDE, LOADER_SHOW} from "./types";

const initialState = {
  loading: true
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADER_SHOW:
            return {...state, loading: true};
        case LOADER_HIDE:
            return {...state, loading: false};
        default:
            return state;
    }
}