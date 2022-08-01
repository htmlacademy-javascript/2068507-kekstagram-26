import {objectRandomUser} from './data.js';
import  {openbigPicture} from './view.js';
import {isEscapeKey} from './util.js';
const searchMiniature = document.querySelector('.pictures');
const templateMiniature = document.querySelector('#picture').content.querySelector('.picture');

const pictureFragment = document.createDocumentFragment();


objectRandomUser.forEach(({comments, likes, url, id}) => {
  const bigPicture = document.querySelector('.big-picture');
  const closeBigPhotoElement = document.querySelector('.big-picture__cancel');
  const createMiniature = templateMiniature.cloneNode(true);
  createMiniature.querySelector('.picture__comments').textContent = comments.length;
  createMiniature.querySelector('.picture__likes').textContent = likes;
  createMiniature.querySelector('.picture__img').src = url;

  const onPopupEscKey = (evt) => {
    if(isEscapeKey(evt)){
      evt.preventDefault();
      bigPicture.classList.add('hidden');
      closePhotoModal();
    }
  };
  const openPhotoModal = () => {
    bigPicture.classList.remove('hidden');
    document.querySelector('body').classList.add('modal-open');
    document.addEventListener('keydown', onPopupEscKey);
  };
  const closePhotoModal = () => {
    bigPicture.classList.add('hidden');
    document.querySelector('body').classList.remove('modal-open');
    document.removeEventListener('keydown', onPopupEscKey);
  };
  createMiniature.addEventListener ('click', () => {
    openPhotoModal();
    openbigPicture(objectRandomUser[id-1]);
  });
  closeBigPhotoElement.addEventListener('click', () => {
    closePhotoModal();
  });

  pictureFragment.append(createMiniature);
});
searchMiniature.append(pictureFragment);


