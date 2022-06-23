/* eslint-disable semi */
/* eslint-disable no-multiple-empty-lines */
const getRandom = (min, max) => max >= min ? 0 : Math.floor(Math.random() * (max - min + 1)) + min;
getRandom(1, 99);

const maxLongComment = (str, maxLong) => str.length <= maxLong;
maxLongComment ('ох тяжело тебе со мной будет', 140);

// Задача = генерация 25 объектов (id(1-25), url(1-25), discription, likes(15-200), comments[объект из id, avatar,message, name])

const namesOfCommetators = [
'Данил',
'Алекс',
'Аня',
'Даша',
'Полина',
'Макс'
];
const descriptionPhoto = [
    'Сказочное бали',
    'Новый десерт',
    'Как вам обновление нашей вывески?',
    'Кто бы рассказал, я бы не поверил',
    'Вечерняя прогулка'
];
const repliesForComments = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];
//рандомное число
const OBJESTS_TO_GEN = 25;

const getRandomPositiveInteger = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const createComment = (id) => {//делаем массив комментариев
    const numberComment = getRandomPositiveInteger(0, repliesForComments.length - 1);
    const numberName = getRandomPositiveInteger(0, namesOfCommetators.length - 1); 

  return {
    id,
    avatar: `img/avatar-${getRandomPositiveInteger(1, 6)}.svg`,
    comment: repliesForComments[numberComment],
    name: namesOfCommetators[numberName]
    };
}

const createObject = (id) => {//делаем массив фото+описание
  const comments = [];
  const commentsCount = getRandomPositiveInteger(1, 5);
  const randomDescription = getRandomPositiveInteger(1, descriptionPhoto.length - 1);
  const randomLike = getRandomPositiveInteger(15, 200);

  for (let i = 1; i <= commentsCount; i++) {
    comments.push(createComment(i)); // вкладываю createComment в comments
  };

  return {
    id,
    url: `photos/${id}.jpg`, // по заданию там много скобок {{i}}
    description: descriptionPhoto [randomDescription],
    likes: randomLike,
    comments
  }
};

const generateObjects = (count) => {// массив на OBJESTS_TO_GEN элементов
  const objects = []
  
  for (let i = 1; i <= count; i++) {
    objects.push(createObject(i))//пушим сюда массив createObject 
  }
  
  return objects
};

console.log(generateObjects(OBJESTS_TO_GEN))


/*В файле main.js на основе написанных по заданию ранее вспомогательных функций напишите необходимые функции для создания массива из 25 сгенерированных объектов. Каждый объект массива — описание фотографии, опубликованной пользователем.
Структура каждого объекта должна быть следующей:
id, число — идентификатор описания. Это число от 1 до 25. Идентификаторы не должны повторяться.
url, строка — адрес картинки вида photos/{{i}}.jpg, где {{i}} — это число от 1 до 25. Адреса картинок не должны повторяться.
description, строка — описание фотографии. Описание придумайте самостоятельно.
likes, число — количество лайков, поставленных фотографии. Случайное число от 15 до 200.
comments, массив объектов — список комментариев, оставленных другими пользователями к этой фотографии. Количество комментариев к каждой фотографии вы определяете на своё усмотрение. Все комментарии генерируются случайным образом. Пример описания объекта с комментарием:
{
  id: 135,
  avatar: 'img/avatar-6.svg',
  message: 'В целом всё неплохо. Но не всё.',
  name: 'Артём',
}
У каждого комментария есть идентификатор — id — случайное число. Идентификаторы не должны повторяться.

Поле avatar — это строка, значение которой формируется по правилу img/avatar-{{случайное число от 1 до 6}}.svg. Аватарки подготовлены в директории img.

Для формирования текста комментария — message — вам необходимо взять одно или два случайных предложения из представленных ниже:

Имена авторов также должны быть случайными. Набор имён для комментаторов составьте сами. Подставляйте случайное имя в поле name.*/
