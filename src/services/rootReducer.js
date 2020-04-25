import {combineReducers} from "redux";
import menuReducer from "./menu/reducer";

export const rootReducer = combineReducers({
    menu: menuReducer
});