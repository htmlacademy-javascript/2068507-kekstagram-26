const getRandomPositiveInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
};

export {getRandomPositiveInteger};

const getRandom = (min, max) => max >= min ? 0 : Math.floor(Math.random() * (max - min + 1)) + min; //рандомное число
const maxLongComment = (str, maxLong) => str.length <= maxLong;//длинна коммента

export {getRandom, maxLongComment};
