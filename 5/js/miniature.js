import {generateObjects, OBJESTS_TO_GEN} from './data.js';
//import {openBigPhoto} from './miniature.js';
const createMiniature = document.querySelector('.pictures');//нашли шаблон => взяли содержимое
const templateMiniature = document.querySelector('#picture').content.querySelector('.picture');//получаем содержимое шаблона

const simularImgFragment = document.createDocumentFragment();//фрагмент

const simularPicture = generateObjects(OBJESTS_TO_GEN);
simularPicture.forEach(({comments, likes, url}) => {
  const createCopyMiniature = templateMiniature.cloneNode(true);//делаем копию шаблона
  createCopyMiniature.querySelector('.picture__comments').textContent = comments.length; //количество комментов
  createCopyMiniature.querySelector('.picture__likes').textContent = likes.length;//количество лайков
  createCopyMiniature.querySelector('.picture__img').src = url; //отрисовать миниатюры url в src
  //createCopyMiniature.addEventListener ('click', openBigPhoto);

  simularImgFragment.append(createCopyMiniature);//отправил во фрагмент
});//вызвал функции => forEach аргументом коллбэка получил один из объектов с данными, из него взял информацию
createMiniature.appendChild(simularImgFragment);

