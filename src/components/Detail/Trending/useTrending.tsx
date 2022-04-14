import React from 'react';

import { ReactComponent as Neutral } from '../../../shared/images/trending-neutral.svg';

import * as S from './Trending.styles';

const useTrending = () => {
  let message = '';
  let icon = <Neutral />;

  const trend = (num: number) => {
    switch (true) {
      case num < 50:
        message = `FALLING`;
        icon = <S.Falling />;
        break;
      case num > 50:
        message = 'RISING';
        icon = <S.Rising />;
        break;
      default:
        message = 'NEUTRAL';
    }
    return [icon, message];
  };

  return { trend };
};

export default useTrending;
