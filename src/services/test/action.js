import {GET_TEST} from "./types";
import {questionArray} from "../../components/main/questionsArray";

export function getTest() {
    return async dispatch => {
        try {
            setTimeout(() => {
                dispatch({
                    type: GET_TEST,
                    payload: questionArray
                }, 500);
            })
        }
        catch (error) {
            console.log(error);
        }
    }
}