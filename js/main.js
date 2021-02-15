const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const nameInput = document.querySelector('#name')

const modalOpenBtn = document.querySelector('.footer__info-btn')
const modalCloseBtn = document.querySelector('.modal__close-btn')

modalOpenBtn.addEventListener('click', function(e){
	e.preventDefault()
	modal.classList.add('modal-show')
	modalOverlay.classList.add('modal-overlay__active')
	nameInput.focus()
})

modalCloseBtn.addEventListener('click', function(e){
	e.preventDefault()
	modal.classList.remove('modal-show')
	modalOverlay.classList.remove('modal-overlay__active')
})

modalOverlay.addEventListener('click', function(){
	modal.classList.remove('modal-show')
	modalOverlay.classList.remove('modal-overlay__active')
})

window.addEventListener('keydown', function(e){
	if(e.keyCode == 27) {
		e.preventDefault()
		modal.classList.remove('modal-show')
		modalOverlay.classList.remove('modal-overlay__active')	
	}
})