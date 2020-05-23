import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router';
import menuReducer from "./menu/reducer";
import testReducer from "./test/reducer";
import loadReducer from "./preloader/reducer";
import Pages from "./pages/reducer";
import Sections from "./sections/reducer";
import Search from"./search/reducer"

export const createRootReducer = (history) => combineReducers({
    router: connectRouter(history),
    menu: menuReducer,
    test: testReducer,
    loading: loadReducer,
    pages: Pages,
    sections: Sections,
    search: Search
});