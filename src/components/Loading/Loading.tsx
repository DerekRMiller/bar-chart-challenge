import React, { memo } from 'react';

import * as S from './Loading.styles';

export type LoadingProps = {
  className?: string;
  dotSize?: number;
  showDots?: boolean;
};

const Loading = ({ className = 'loading', showDots = true, dotSize }: LoadingProps) => (
  <S.Loading className={className}>
    Loading
    <div>{showDots && <S.Dots dotSize={dotSize} />}</div>
  </S.Loading>
);

export default memo(Loading);
