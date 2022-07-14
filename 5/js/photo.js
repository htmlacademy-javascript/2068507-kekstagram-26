
// const listPhoto = document.querySelector('.big-picture');//большое фото

// const openBigPhoto = ({url, likes, comments, description}) => {//убрал скрытие, открыл фото, колво лайков, кол-во комментов

//   listPhoto.classList.remove('hidden');
//   listPhoto.querySelector('.big-picture__img').src = url;
//   listPhoto.querySelector('.social__caption').textContent = description;
//   listPhoto.querySelector('.likes-count').textContent = likes.length;
//   listPhoto.querySelector('.comments-count').textContent = comments.length;

//   const commentToPhoto = listPhoto.querySelector('ul.social__comments');//имеет ли смысл писать ul и (далее)li?? или автоматически всё найдется?
//   commentToPhoto.forEach(({comment, avatar, name}) => { //объект "комментаторы"
//     listPhoto.querySelector('li.social__comments').src = avatar;
//     listPhoto.querySelector('li.social__comments').alt = name;
//     listPhoto.querySelector('.social__text').textContent = comment;
//   });

//   listPhoto.querySelector('.social__comment-count').classList.add('hidden');
//   listPhoto.querySelector('.comments-loader').classList.add('hidden');
//   //После открытия окна спрячьте блоки счётчика комментариев .social__comment-count и загрузки новых комментариев .comments-loader, добавив им класс hidden, с ними мы разберёмся позже, в другом домашнем задании.

//   const modalOpenBody = document.querySelector('body');
//   modalOpenBody.classList.add('modal-open');//при открытом фото не прокручивается задний план

//   const closePhotoButton = listPhoto.querySelector('.big-picture__cancel');

//   const closeImg = () => {
//     listPhoto.classList.add('hidden');//закрыть большое фото
//   };
//   closePhotoButton.addEventListener ('click', () => {
//     closeImg();
//   });
//   closePhotoButton.addEventListener('keydown', (evt) => {
//     if(evt.key === 27){
//       closeImg();
//     }});

// };

// export {openBigPhoto};
