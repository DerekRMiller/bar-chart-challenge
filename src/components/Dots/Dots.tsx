import React, { memo } from 'react';

import * as S from './Dots.styles';

export type DotsProps = {
  className?: string;
  dotSize?: number;
  show?: boolean;
};

const Dots = ({ className = 'dots', dotSize = 0.375, show }: DotsProps) => (
  <S.Dots dotSize={dotSize} className={className} show={show}>
    <span />
    <span />
    <span />
  </S.Dots>
);

export default memo(Dots);
