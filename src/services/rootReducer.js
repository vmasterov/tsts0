import {combineReducers} from "redux";
import menuReducer from "./menu/reducer";
import testReducer from "./test/reducer";

export const rootReducer = combineReducers({
    menu: menuReducer,
    test: testReducer
});