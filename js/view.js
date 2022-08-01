//import {isEscapeKey} from './util.js';
const bigPicture = document.querySelector('.big-picture');
//const closeBigPhotoElement = document.querySelector('.big-picture__cancel');//кнопка закрыьтя

// const onHiddenEsc = (evt) => {
//   if(isEscapeKey(evt)) {
//     evt.preventDefault();
//     document.querySelector('body').classList.remove('modal-open');
//   }
// };
// const closeBigPhoto = () => {
//   bigPicture.classList.add('hidden');
//   document.addEventListener('keydown', onHiddenEsc);
// };

const openbigPicture = ({comments, likes, url, description}) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img');
  bigPictureImg.querySelector('img').src = url; //путь к фото
  bigPicture.querySelector('.social__caption').textContent = description; //описание фото
  bigPicture.querySelector('.likes-count').textContent = likes;
  bigPicture.querySelector('.comments-count').textContent = comments.length;

  const socialCommentCount = document.querySelector('.social__comment-count');
  socialCommentCount.classList.add('hidden');
  const socialCommentLoader = document.querySelector('.comments-loader');
  socialCommentLoader.classList.add('hidden');//временное скрытие

  const socialComment = bigPicture.querySelector('.social__comments');
  socialComment.querySelectorAll('.social__picture').forEach((element, index) => {
    element.src = comments[index].avatar;
    element.alt = comments[index].name;
  });
  socialComment.querySelectorAll('.social__text').forEach((element, index) => {
    element.textContent = comments[index].comment;
  });
};
//далее закрывашки

// closeBigPhotoElement.addEventListener('click', () => {
//   closeBigPhoto();
// });
// document.addEventListener('keydown', (evt) => {
//   if(isEscapeKey(evt)){
//     closeBigPhoto();
//   }
// });

//функция открывает фото и загружает комментарии

export {openbigPicture};

