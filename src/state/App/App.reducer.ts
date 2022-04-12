import { IApp } from './App.state';
import AppActions, {
  ActionType,
  ISetIsMounted,
  ISetShow,
  ISetNumbersArr,
  ISetRgb
} from './AppActions';

export const reducer = (state: IApp, action: AppActions): IApp => {
  switch (action.type) {
    case ActionType.SetIsMounted:
      return { ...state, isMounted: action.payload };
    case ActionType.SetShow:
      return { ...state, show: action.payload };
    case ActionType.SetNumbersArr:
      return { ...state, numbersArr: action.payload };
    case ActionType.SetRgb:
      return { ...state, rgb: action.payload };
    default:
      throw new Error(`Invalid action: ${action}`);
  }
};

export const setIsMounted = (isMounted: boolean): ISetIsMounted => ({
  type: ActionType.SetIsMounted,
  payload: isMounted
});

export const setShow = (show: boolean): ISetShow => ({
  type: ActionType.SetShow,
  payload: show
});

export const setNumbersArr = (numbersArr: string[]): ISetNumbersArr => ({
  type: ActionType.SetNumbersArr,
  payload: numbersArr
});

export const setRgb = (rgb: string): ISetRgb => ({
  type: ActionType.SetRgb,
  payload: rgb
});
