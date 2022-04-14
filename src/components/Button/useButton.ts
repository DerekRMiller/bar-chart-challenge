import { useState, useContext } from 'react';

import AppContext from '../../state/App/AppContext';

const useButton = () => {
  const { appState } = useContext(AppContext);
  const [buttonHover, setButtonHover] = useState(false);
  const colorDefault = ['0,0,0,0', '255,255,255,.15'];
  const buttonColor = (color: number) =>
    `rgba(${buttonHover ? `${appState.rgb}1` : colorDefault[color]})`;
  const overHandler = () => {
    setButtonHover(true);
  };
  const outHandler = () => {
    setButtonHover(false);
  };

  return { appState, buttonHover, colorDefault, buttonColor, overHandler, outHandler };
};

export default useButton;
