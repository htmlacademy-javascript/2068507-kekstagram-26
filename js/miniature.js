import {objectRandomUser} from './data.js';
import  {openbigPicture} from './view.js';
const searchMiniature = document.querySelector('.pictures');//нашли шаблон => взяли содержимое
const templateMiniature = document.querySelector('#picture').content.querySelector('.picture');//получаем содержимое шаблона

const pictureFragment = document.createDocumentFragment();//фрагмент


objectRandomUser.forEach(({comments, likes, url, id}) => {
  const createMiniature = templateMiniature.cloneNode(true);//делаем копию шаблона
  createMiniature.querySelector('.picture__comments').textContent = comments.length; //количество комментов
  createMiniature.querySelector('.picture__likes').textContent = likes;//количество лайков
  createMiniature.querySelector('.picture__img').src = url; //отрисовать миниатюры url в src
  createMiniature.addEventListener ('click', () => {
    openbigPicture(objectRandomUser[id-1]);
  });
  pictureFragment.append(createMiniature);//отправил во фрагмент
});//вызвал функции => forEach аргументом коллбэка получил один из объектов с данными, из него взял информацию
searchMiniature.append(pictureFragment);

