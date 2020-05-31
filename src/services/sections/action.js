import {FETCH_SECTIONS} from "./types"
import {hideLoader, showLoader} from "../preloader/action";

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