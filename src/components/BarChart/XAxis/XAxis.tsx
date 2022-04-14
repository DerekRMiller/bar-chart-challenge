import React, { memo } from 'react';

import XAxisProps from './XAxis.types';
import useXAxis from './useXAxis';
import * as S from './XAxis.styles';

const XAxis = ({ maxRange, value }: XAxisProps) => {
  const { monthRender } = useXAxis({ maxRange, value });

  return <S.XAxis>{monthRender}</S.XAxis>;
};

export default memo(XAxis);
