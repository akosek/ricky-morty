import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import {
  persistStore,
  persistReducer,
  persistCombineReducers,
} from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import rootReducer from "./rootReducer";

const initalState = {};
const middleware = [thunk];
const store = createStore(rootReducer, initalState, applyMiddleware(thunk));
let persistor = persistStore(store);

export { store, persistor };
