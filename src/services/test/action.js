import {GET_TEST} from "./types";
import {questionArray} from "../../components/main/questionsArray";
import {hideLoader, showLoader} from "../preloader/action";

export function getTest() {
    return async dispatch => {
        try {
            dispatch(showLoader());

            setTimeout(() => {
                dispatch({
                    type: GET_TEST,
                    payload: questionArray
                });

                dispatch(hideLoader());
            }, 3000)
        }
        catch (error) {
            console.log(error);
        }
    }
}