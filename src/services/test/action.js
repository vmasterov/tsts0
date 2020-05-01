import {GET_TEST, TOGGLE_CTRL} from "./types"
import {questionObject} from "../../components/main/questionsObject";
import {hideLoader, showLoader} from "../preloader/action";

export function getTest() {
    return async dispatch => {
        try {
            dispatch(showLoader());

            setTimeout(() => {
                dispatch({
                    type: GET_TEST,
                    payload: questionObject
                });

                dispatch(hideLoader());
            }, 1000)
        }
        catch (error) {
            console.log(error);
        }
    }
}

export function toggleCtrl(id, value, checked) {
    return {
        type: TOGGLE_CTRL,
        payload: {id, value, checked}
    }
}