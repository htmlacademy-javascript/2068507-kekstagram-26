const getRandomPositiveInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}; //поиск рандомного целого числа

const getRandom = (min, max) => max >= min ? 0 : Math.floor(Math.random() * (max - min + 1)) + min; //рандомное число
const maxLongComment = (str, maxLong) => str.length <= maxLong;//длинна коммента

const randValue = (a) => {//рандомное значение из массива
  const rand = Math.floor(Math.random()*a.length);
  return a[rand];
};

const isEscapeKey = (evt) =>
  evt.key === 'Escape';

export {getRandomPositiveInteger,
  getRandom, maxLongComment, randValue, isEscapeKey};
