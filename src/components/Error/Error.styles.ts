import styled from '@emotion/styled';

import themeColors from '../../shared/styles/color/themeColors.styles';

const sharedStyles = { fontSize: '3rem', fontWeight: 300 };

export const Error = styled.div({
  color: `${themeColors.white}`,
  left: 0,
  margin: '0 auto',
  maxWidth: '48rem',
  overflowWrap: 'break-word',
  position: 'absolute',
  right: 0,
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%'
});

export const Eyes = styled.div({ ...sharedStyles });

export const Frown = styled.div({
  ...sharedStyles,
  margin: '-0.625em auto 0',
  transform: 'rotate(90deg)',
  width: '6rem'
});

export const Title = styled.h2({
  letterSpacing: '0.048em'
});
