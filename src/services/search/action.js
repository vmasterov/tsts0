import {SEARCH} from "./types";

export function getSearch(find) {
    return {
        type: SEARCH,
        payload: find
    }
}