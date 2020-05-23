import {FETCH_SECTIONS, GET_SECTIONS} from "./types"
import {sectionsArray} from "../../components/sections/sectionsArray";
import {hideLoader, showLoader} from "../preloader/action";

/*
export function getSections() {
    return async dispatch => {
        try {
            dispatch(showLoader());

            setTimeout(() => {
                dispatch({
                    type: GET_SECTIONS,
                    payload: sectionsArray
                });

                dispatch(hideLoader());
            }, 1000)
        }
        catch (error) {
            console.log(error);
        }
    }
}
 */

export const fetchSections = () => {
    return async dispatch => {
        let response = await fetch('https://5eb7ceb25652960016785a1b.mockapi.io/sections');
        let sections = await response.json();

        try {
            dispatch(showLoader());

            setTimeout(() => {
                dispatch({
                    type: FETCH_SECTIONS,
                    payload: sections
                });

                dispatch(hideLoader());
            }, 1000)
        }
        catch(error) {
            console.log(error);
        }
    }
};