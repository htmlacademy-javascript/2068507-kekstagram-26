
const bigPicture = document.querySelector('.big-picture');
const closeBigPhotoElement = document.querySelector('.big-picture__cancel');//кнопка закрыьтя

const openbigPicture = ({comments, likes, url, description}) => {
  const bigPictureImg = bigPicture.querySelector('.big-picture__img');
  bigPicture.classList.remove('hidden');
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
};//функция открывает фото и загружает комментарии

const isEscape = (evt) => {
  evt.preventDefault();
  bigPicture.classList.add('hidden');
  document.querySelector('body').classList.remove('modal-open');
};
closeBigPhotoElement.addEventListener('click', (evt) => {
  isEscape(evt);
});
document.addEventListener('keydown', (evt) => {
  if(evt.key === 'Escape'){
    isEscape(evt);
  }
});
//два обработчика на закрытие фото
export {openbigPicture};

