import {FETCH_TEST, FETCHING_TEST, FETCHED_TEST, TOGGLE_CTRL} from "./types";
// import {questionObject} from "../../components/main/questionsObject";
import {hideLoader, showLoader} from "../preloader/action";

export const fetchTest = (id) => {
    return async dispatch => {
        dispatch(showLoader());
        dispatch(fetchingTest());

        let response = await fetch('https://5eb7ceb25652960016785a1b.mockapi.io/test' + id);
        let sections = await response.json();

        try {
            dispatch({
                type: FETCH_TEST,
                payload: sections
            });
            dispatch(fetchedTest());
            dispatch(hideLoader());
        }
        catch(error) {
            console.log(error);
            dispatch(fetchedTest());
        }
    }
};

export const fetchingTest = () => {
    return {
        type: FETCHING_TEST
    }
};

export const fetchedTest = () => {
    return {
        type: FETCHED_TEST
    }
};

export function toggleCtrl(id, value, checked) {
    return {
        type: TOGGLE_CTRL,
        payload: {id, value, checked}
    }
}