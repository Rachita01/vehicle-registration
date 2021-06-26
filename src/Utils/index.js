import { applyMiddleware,createStore } from "redux";
import rootReducer from "../redux/reducers";
import { middlewares } from "../redux/store";
export const findByTestAttribute = (component,attr) => {
    const wrapper = component.find(`[data-test='${attr}']`);
    return wrapper;
}


export const testStore = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
    return createStoreWithMiddleware(rootReducer,initialState);
};