const rgbArr = [
  '130,170,255,',
  '128,203,196,',
  '130,170,255,',
  '137,221,255,',
  '195,232,141,',
  '199,146,234,',
  '240,113,120,',
  '247,140,108,',
  '238,255,255,',
  '103,110,149,',
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

export const createMonth = (maxDays: number, dayIter: number) => {
  const month: { [day: string]: number } = {};
  const week = ['Mon', 'Tues', 'Wed', 'Thur', 'Fri', 'Sat', 'Sun'];
  let dayCount = 0;

  for (let i = 0; i < maxDays; i += dayIter) {
    dayCount += 1;
    dayCount = i % 7 === 0 ? 0 : dayCount;
    const day = `${week[dayCount]}-${i + 1}`;
    month[day] = i + 1;
  }

  return month;
};

export const handleClearLocal = () => {
  if (localStorage.getItem('numbersArr')) localStorage.removeItem('numbersArr');
  window.location.reload();
};
