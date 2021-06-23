var elOpenModalButton = document.querySelector('.js-modal-open');
var elModal = document.querySelector('.js-modal');


elOpenModalButton.addEventListener('click', function ()  {
  elModal.classList.add('modal-open')
});


var elOpenModalButton = document.querySelector('.js-modal-close');
var elModal = document.querySelector('.js-modal');


elOpenModalButton.addEventListener('click', function ()  {
  elModal.classList.add('modal-close')
});