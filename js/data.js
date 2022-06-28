import {getRandomPositiveInteger, randValue} from './util.js';

const NAMES_OF_COMMENTATORS = [
  'Данил',
  'Алекс',
  'Аня',
  'Даша',
  'Полина',
  'Макс'
];
const DESCRIPTION_PHOTO = [
  'Сказочное бали',
  'Новый десерт',
  'Как вам обновление нашей вывески?',
  'Кто бы рассказал, я бы не поверил',
  'Вечерняя прогулка'
];
const REPLIES_FOR_COMMENTS = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const createComment = (id) => ({//делаем массив комментариев
  id,
  avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
  comment: randValue(REPLIES_FOR_COMMENTS),
  name: randValue(NAMES_OF_COMMENTATORS)
});

const createObject = (id) => {//делаем массив фото+описание
  const comments = [];
  const commentsCount = getRandomPositiveInteger(1, 5);
  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment(i)); // вкладываю createComment в comments
  }

  return {
    id,
    url: `photos/${id}.jpg`,
    description: randValue(DESCRIPTION_PHOTO),
    likes: getRandomPositiveInteger(15, 200),
    comments
  };
};

const generateObjects = (count) => {// массив на OBJESTS_TO_GEN элементов
  const objects = [];
  for (let i = 1; i <= count; i++) {
    objects.push(createObject(i)); //пушим сюда массив createObject.
  }
  return objects;
};

export {generateObjects};
