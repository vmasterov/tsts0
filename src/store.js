import {createStore, applyMiddleware, compose} from "redux";
import {routerMiddleware} from "connected-react-router"
import thunk from "redux-thunk";
import {createBrowserHistory} from "history";
import {composeWithDevTools} from "redux-devtools-extension";
import {createRootReducer} from "./services/rootReducer";

export const history = createBrowserHistory();

const enhancers = compose(
    composeWithDevTools(applyMiddleware(thunk, routerMiddleware(history)))
);

export default createStore(
    createRootReducer(history),
    enhancers
);