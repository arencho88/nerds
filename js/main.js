const modal = document.querySelector('.modal')
const modalOverlay = document.querySelector('.modal-overlay')
const nameInput = document.querySelector('#name')
const rangeSlider = document.querySelector('#range_slider')

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

if(rangeSlider) {
	noUiSlider.create(rangeSlider, {
		start: [0, 15000],
		connect: true,
		step: 500,
		margin: 4000,
		range: {
			 'min': 0,
			 'max': 15000
		}
  	});

  const minInput = document.querySelector('#min_inp')
  const maxInput = document.querySelector('#max_inp')
  const inputs = [minInput, maxInput]

  	rangeSlider.noUiSlider.on('update', function(values, handle){
		inputs[handle].value = Math.round(values[handle])	
  	})
}