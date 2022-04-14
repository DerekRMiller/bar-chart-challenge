const rgbArr = [
  '130,170,255,',
  '128,203,196,',
  '130,170,255,',
  '238,255,255,',
  '137,221,255,',
  '195,232,141,',
  '199,146,234,',
  '240,113,120,',
  '247,140,108,',
  '238,255,255,',
  '255,203,107,'
];

export const createColorRGB = (numbersArr: string[]) => {
  return rgbArr[Math.floor(parseInt(numbersArr[0], 10) / 10)];
};

export const createArr = (maxRange: number, value: number) => {
  const arr: number[] = [];

  for (let i = 0; i <= maxRange; i += value) {
    arr.push(i);
  }

  return arr;
};

export const createMonth = (maxDays: number, dayIter: number, abbreviate = true) => {
  const month: { [day: string]: number } = {};
  const week = [
    ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'],
    ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
  ];
  let dayCount = 0;

  for (let i = 0; i < maxDays; i += dayIter) {
    dayCount += 1;
    dayCount = i % 7 === 0 ? 0 : dayCount;
    const day = `${abbreviate ? week[0][dayCount] : week[1][dayCount]}-${i + 1}`;
    month[day] = i + 1;
  }

  return month;
};

export const handleClearLocal = () => {
  if (localStorage.getItem('numbersArr')) localStorage.removeItem('numbersArr');
  window.location.reload();

  return true;
};

export const calculatePercentage = (maxP: number, numberString: string) => {
  const res = parseInt(numberString, 10) / 100 / (maxP / 100);

  return Math.round(res * 1e2) / 1e2;
};

export const createRangeAverage = (numbersArr: string[], maxRange: number) => {
  const slice = numbersArr.slice(0, maxRange);
  let rangeAverage = slice
    .map(Number)
    .reduce((previousValue, currentValue) => previousValue + currentValue);

  rangeAverage = rangeAverage / 100 / (maxRange / 100);
  rangeAverage = Math.round(rangeAverage * 1e2) / 1e2;

  return rangeAverage;
};

export const getLocalStorageNumArr = () => {
  return localStorage.getItem('numbersArr');
};

export const setLocalStorageNumArr = (arr) => {
  if (arr.length > 2) {
    localStorage.setItem('numbersArr', JSON.stringify(arr));
  }
  return true;
};

export const year = () => new Date().getFullYear();
