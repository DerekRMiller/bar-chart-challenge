import React, { memo, useContext } from 'react';

import AppContext from '../../state/App/AppContext';
import * as S from './Dots.styles';

export type DotsProps = {
  className?: string;
  dotSize?: number;
};

const Dots = ({ className = 'dots', dotSize = 0.375 }: DotsProps) => {
  const { state } = useContext(AppContext);

  return (
    <S.Dots dotSize={dotSize} className={className} show={state.show}>
      <span />
      <span />
      <span />
    </S.Dots>
  );
};

export default memo(Dots);
