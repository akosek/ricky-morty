import { ThunkAction } from "redux-thunk";
import { RootState } from "./src/redux/rootReducer";
import { Action } from "redux";

export type TCharacterItem = {
  id: number;
  name: string;
  image: string;
  status: string;
  species: string;
  origin: TOrigin;
  location: TLocation;
  episode: TEpisode;
  type?: string;
  gender?: string;
};

export type TLocation = {
  name: string;
};

export type TOrigin = {
  id: number;
  name: string;
};

export type TEpisode = {
  id: number;
  name: string;
};

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppThunkWithPromise<ReturnType = Promise<any>> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
