var modalToggle = document.querySelector('.jsModalToggle')

modalToggle.addEventListener('click', e => {
    document.body.classList.add('modal-is-open')
})

var closeButton = document.querySelector('.jsModalClose')

closeButton.addEventListener('click', e => {
    document.body.classList.remove('modal-is-open')
})

