import {applyMiddleware, createStore} from 'redux';
import ReduxThunk from 'redux-thunk';
import rootReducer from './reducers';

export const middlewares = [ReduxThunk];

export const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)

export const store = createStoreWithMiddleware(rootReducer);


// import { createStore, applyMiddleware } from "redux";
// import rootReducer from "./reducers";
// import thunk from "redux-thunk";
// import { persistStore, persistReducer } from "redux-persist";
// import storage from "redux-persist/lib/storage";
 
// const initialState = {};
 
// const persistConfig = {
//   key: "root",
//   storage: storage,
//   blacklist: [],
// //   whitelist: ["GetCategoriesReducer"], // which reducer want to store
// };
// const pReducer = persistReducer(persistConfig, rootReducer);
// export const store = createStore(pReducer, initialState, applyMiddleware(thunk));
// export const persistor = persistStore(store);