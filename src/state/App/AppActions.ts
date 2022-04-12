export enum ActionType {
  SetIsMounted,
  SetShow,
  SetNumbersArr,
  SetRgb
}

export interface ISetIsMounted {
  type: ActionType.SetIsMounted;
  payload: boolean;
}

export interface ISetShow {
  type: ActionType.SetShow;
  payload: boolean;
}

export interface ISetNumbersArr {
  type: ActionType.SetNumbersArr;
  payload: string[];
}

export interface ISetRgb {
  type: ActionType.SetRgb;
  payload: string;
}

type AppActions = ISetIsMounted | ISetShow | ISetNumbersArr | ISetRgb;

export default AppActions;
