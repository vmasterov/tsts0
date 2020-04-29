import {LOADER_HIDE, LOADER_SHOW} from "./types";

export function showLoader() {
    return {
        type: LOADER_SHOW
    }
}

export function hideLoader() {
    return {
        type: LOADER_HIDE
    }
}