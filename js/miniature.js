import {objectRandomUser} from './data.js';
import  {openbigPicture} from './view.js';
import {isEscapeKey} from './util.js';
const searchMiniature = document.querySelector('.pictures');//нашли шаблон => взяли содержимое
const templateMiniature = document.querySelector('#picture').content.querySelector('.picture');//получаем содержимое шаблона

const pictureFragment = document.createDocumentFragment();//фрагмент


objectRandomUser.forEach(({comments, likes, url, id}) => {
  const bigPicture = document.querySelector('.big-picture');
  const closeBigPhotoElement = document.querySelector('.big-picture__cancel');
  const createMiniature = templateMiniature.cloneNode(true);//делаем копию шаблона
  createMiniature.querySelector('.picture__comments').textContent = comments.length; //количество комментов
  createMiniature.querySelector('.picture__likes').textContent = likes;//количество лайков
  createMiniature.querySelector('.picture__img').src = url; //отрисовать миниатюры url в src

  const onPopupEscKey = (evt) => {
    if(isEscapeKey(evt)){
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      closed();
}}
  const openPhotoModal = () => {
    bigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKey);
  };
  const closed = () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKey);
  };
  createMiniature.addEventListener ('click', () => {
    openPhotoModal();
    
    openbigPicture(objectRandomUser[id-1]);
  });
  closeBigPhotoElement.addEventListener('click', () => {
    closed();
  });

  pictureFragment.append(createMiniature);//отправил во фрагмент
});//вызвал функции => forEach аргументом коллбэка получил один из объектов с данными, из него взял информацию
searchMiniature.append(pictureFragment);

//clearViewPhoto(searchMiniature);//очистить события
