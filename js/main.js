var elOpenModalButton = document.querySelector('.js-modal-open');
var elModal = document.querySelector('.js-modal');


elOpenModalButton.addEventListener('click', function ()  {
  elModal.classList.add('modal-open')
});


var elCloseModal = document.querySelector('.js-modal-close');
var elModal = document.querySelector('.js-modal');


elCloseModal.addEventListener('click', function ()  {
  elModal.classList.remove('modal-open')
});