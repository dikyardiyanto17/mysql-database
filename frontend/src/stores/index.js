import { applyMiddleware, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// import storageSession from 'reduxjs-toolkit-persist/lib/storage/session'

import rootReducer from "./reducers/rootReducers";
const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(persistedReducer, applyMiddleware(thunk));

export const persistor = persistStore(store)