import {generateObjects} from './data.js';

const OBJESTS_TO_GEN = 25;

generateObjects(OBJESTS_TO_GEN);


const createMiniature = document.querySelector('.picture');//нашли шаблон => взяли содержимое
const templateMiniature = document.querySelector('#picture').content.querySelector('.picture');//получаем содержимое шаблона

const simularImgFragment = document.createDocumentFragment();//фрагмент

const simularPicture = generateObjects(OBJESTS_TO_GEN);
simularPicture.forEach((comments, likes, url) => {
  const createCopyMiniature = templateMiniature.cloneNode(true);//делаем копию шаблона
  createCopyMiniature.querySelector('.picture__comments').textContent = comments.length; //количество комментов
  createCopyMiniature.querySelector('.picture__likes').textContent = likes.length;//количество лайков
  createCopyMiniature.querySelector('.picture__img').src = url; //отрисовать миниатюры url в src
  simularImgFragment.append(createCopyMiniature);//отправил во фрагмент
});//вызвал функции => forEach аргументом коллбэка получил один из объектов с данными, из него взял информацию
createMiniature.append(simularImgFragment);//подключил модуль
