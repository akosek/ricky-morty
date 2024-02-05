import { persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { combineReducers } from "redux";

import characters, { TListState } from "./ducks/characters";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  whitelist: ["favList", "listView"],
};

const appReducer = combineReducers({
  characters: persistReducer(persistConfig, characters),
});

const rootReducer = (state: TListState, action) => {
  return appReducer(state, action);
};

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
