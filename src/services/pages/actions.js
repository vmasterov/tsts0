import {TEST, RESULT, SECTIONS} from "./types";

export function pageSections() {
    return ({
        type: SECTIONS
    })
}

export function pageTest() {
 return ({
     type: TEST
 })
}

export function pageResult() {
    return ({
        type: RESULT
    })
}