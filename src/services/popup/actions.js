import {OPEN_POPUP, CLOSE_POPUP, REMOVE_POPUP} from "./types";

export function openPopup() {
    return ({
        type: OPEN_POPUP
    })
}

export function closePopup() {
    return ({
        type: CLOSE_POPUP
    })
}

export function removePopup() {
    return ({
        type: REMOVE_POPUP
    })
}