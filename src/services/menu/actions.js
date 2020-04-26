import {OPEN_MENU, CLOSE_MENU, REMOVE_MENU} from "./types";

export function openMenu() {
 return ({
     type: OPEN_MENU
 })
}

export function closeMenu() {
    return ({
        type: CLOSE_MENU
    })
}

export function removeMenu() {
    return ({
        type: REMOVE_MENU
    })
}