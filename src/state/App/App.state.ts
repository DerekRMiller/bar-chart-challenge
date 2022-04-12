export interface IApp {
  isMounted: boolean;
  numbersArr: string[];
  rgb: string;
  show: boolean;
}

export const initialAppState: IApp = {
  isMounted: true,
  numbersArr: [''],
  rgb: '',
  show: true
};
