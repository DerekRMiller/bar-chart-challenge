import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';
import { maxHeight } from '../../shared/styles/layout/mediaQueries.styles';
import LoadingComponent from '../Loading/Loading';

type BarChartProps = {
  isMounted: boolean;
};

const sharedStyles = {
  display: 'flex',
  height: '100%'
};

export const BarChart = styled.div(({ isMounted }: BarChartProps) => ({
  alignItems: 'center',
  justifyContent: 'center',
  marginBottom: '2.5rem',
  minHeight: '8rem',
  opacity: isMounted ? 1 : 0,
  position: 'relative',
  transition: 'opacity 0.25s ease',

  ...sharedStyles
}));

export const Content = styled.div({
  alignItems: 'flex-end',
  borderLeft: `1px solid ${themeColors.whiteAlpha15}`,
  flexDirection: 'row',
  padding: '0 0 0 0.125rem',
  position: 'relative',
  width: '100%',

  ...sharedStyles
});

export const Loading = styled(LoadingComponent)({
  top: 'calc(50% + 3.25rem) !important',

  // 1000
  [maxHeight(1)]: {
    top: 'calc(50% + 2rem) !important'
  }
});
