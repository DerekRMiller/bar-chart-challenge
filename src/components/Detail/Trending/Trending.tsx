import React from 'react';

import useTrending from './useTrending';
import * as S from './Trending.styles';

type TrendingProps = {
  formatNumber: string;
};

const Trending = ({ formatNumber }: TrendingProps) => {
  const { trend } = useTrending();

  return (
    <S.Trending>
      {trend(parseInt(formatNumber.toString(), 10)).map((item, i) => (
        <div key={i} className={i === 0 ? `icon-container` : `${item}`}>
          {item}
        </div>
      ))}
    </S.Trending>
  );
};

export default Trending;
