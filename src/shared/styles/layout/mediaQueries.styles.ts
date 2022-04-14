const minWidthBreakpoints = [1001, 1201, 1921];
const maxWidthBreakpoints = [1000, 1200, 1920];
const maxHeightBreakpoints = [600, 800, 1000];

// single
export const minWidth = (breakpoint: number) =>
  `@media (min-width: ${minWidthBreakpoints[breakpoint]}px)`;

export const maxWidth = (breakpoint: number) =>
  `@media (max-width: ${maxWidthBreakpoints[breakpoint]}px)`;

export const maxHeight = (breakpoint: number) =>
  `@media (max-height: ${maxHeightBreakpoints[breakpoint]}px)`;

// height & width
export const maxHeightMinWidth = (breakpoint1: number, breakpoint2: number) =>
  `@media (max-height: ${maxHeightBreakpoints[breakpoint1]}px) and
  (min-width: ${minWidthBreakpoints[breakpoint2]}px)`;

export const maxHeightMaxWidth = (breakpoint1: number, breakpoint2: number) =>
  `@media (max-height: ${maxHeightBreakpoints[breakpoint1]}px) and
  (max-width: ${maxWidthBreakpoints[breakpoint2]}px)`;

// height or width
export const maxHeightOrMaxWidth = (breakpoint1: number, breakpoint2: number) =>
  `@media screen and (max-height: ${maxHeightBreakpoints[breakpoint1]}px),
  screen and (max-width: ${maxWidthBreakpoints[breakpoint2]}px)`;
