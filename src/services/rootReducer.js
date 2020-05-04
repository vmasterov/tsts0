import {combineReducers} from "redux";
import menuReducer from "./menu/reducer";
import testReducer from "./test/reducer";
import loadReducer from "./preloader/reducer";
import Pages from "./pages/reducer";
import Sections from "./sections/reducer";
import Search from"./search/reducer"

export const rootReducer = combineReducers({
    menu: menuReducer,
    test: testReducer,
    loading: loadReducer,
    pages: Pages,
    sections: Sections,
    search: Search
});