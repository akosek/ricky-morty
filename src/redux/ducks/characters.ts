import { createAction, ActionType, getType } from "typesafe-actions";
import { AppThunk, TCharacterItem } from "../../../types";
import { Alert } from "react-native";

// Action creators
export const setDataList = createAction("setDataList/SET_DATA_LIST")<
  TCharacterItem[]
>();
export const setView = createAction("setView/SET_VIEW")<number>();
export const setStatusFilter = createAction(
  "setStatusFilter/SET_STATUS_FILTER"
)<string>();
export const setPageCount = createAction("setPageCount/SET_PAGE_COUNT")<
  number
>();

export const saveFavorites = createAction("saveFavorites/SAVE_FAVOURITES")<
  TCharacterItem
>();

const actionCreators = {
  setDataList,
  setView,
  setStatusFilter,
  setPageCount,
  saveFavorites,
};

// Initial State
export type TListState = Readonly<{
  dataList: TCharacterItem[];
  favList: TCharacterItem[];
  listView: number;
  selectedFilter: string;
  pageCount: number;
}>;

const initialState: TListState = {
  dataList: [],
  favList: [],
  listView: 1,
  selectedFilter: "",
  pageCount: 1,
};

// Reducer
export type TRepoTypes = ActionType<typeof actionCreators>;
export default function reducer(
  state: TListState = initialState,
  action: TRepoTypes
): TListState {
  switch (action.type) {
    case getType(setDataList):
      return { ...state, dataList: action.payload };
    case getType(saveFavorites): {
      let favourites = [...state.favList];
      const newFav = action.payload;
      if (favourites.includes(newFav)) {
        favourites = favourites.filter((item) => item !== newFav);
        Alert.alert("Character was removed from your favourites");
      } else {
        favourites.push(newFav);
        Alert.alert("Character was added to your favourites");
      }
      return { ...state, favList: favourites };
    }
    case getType(setView):
      let listState = state.listView;
      if (listState === 1) {
        listState = 2;
      } else {
        listState = 1;
      }
      return { ...state, listView: listState };
    case getType(setStatusFilter):
      return { ...state, selectedFilter: action.payload };
    case getType(setPageCount):
      return { ...state, pageCount: action.payload };

    default:
      return state;
  }
}
export const setData = (data: []): AppThunk => {
  return function (dispatch) {
    dispatch(setDataList(data));
  };
};

export const actions = {
  ...actionCreators,
};
