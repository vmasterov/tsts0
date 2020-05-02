import {GET_SECTIONS} from "./types"
import {sectionsArray} from "../../components/sections/sectionsArray";
import {hideLoader, showLoader} from "../preloader/action";

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