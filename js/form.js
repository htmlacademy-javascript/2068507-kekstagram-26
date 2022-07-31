import {isEscapeKey} from './util.js';

const uploadFile = document.querySelector('.img-upload__input');
const cancelHiddenUpload = document.querySelector('.img-upload__overlay');
const closeUpload = document.querySelector('.img-upload__cancel');

openFile = () => {
  const uploadPreview = document.querySelector('.img-upload__preview');
  cancelHiddenUpload.classList.remove('hidden');
  uploadPreview.querySelector('img').src = 'img/logo-background-1.jpg';//временная фотка
  document.querySelector('body').classList.add('modal-open');
  document.addEventListener('click', ()=>{
    if(isEscapeKey(evt)){
      evt.preventDefault();
      cancelHiddenUpload.classList.add('hidden');
    //closed();
    }
  });
};
closeFile = () => {
  cancelHiddenUpload.classList.add('hidden');//скрыть предпросмотр загружаемого фото
  document.removeEventListener('click', ()=>{
    if(isEscapeKey(evt)){
      evt.preventDefault();
    cancelHiddenUpload.classList.add('hidden');
    //closed();
    }
  });
}
uploadFile.addEventListener('input', () => {
  openFile();
});
//закрываем окно
// closeUpload.addEventListener('click', (evt) => {
//   onHiddenUpload();
//   isEscape(evt);
//   uploadFile.innerHTML = '';
// });
// document.addEventListener('keydown', (evt) => {
//   if(evt.key === 'Escape'){
//     isEscape(evt);
//     onHiddenUpload();
//     //uploadFile.innerHTML = '';
