// console.log(document.querySelectorAll('.showModal'))
let button = document.querySelectorAll('button')
let warning = document.querySelector('.warning')
let overlay = document.querySelector('.overlay')
let closeModal = document.querySelector('.closeModal')

function openWarnig() {
  warning.classList.remove('hidden')
  overlay.classList.remove('hidden')
}

function closeWarning() {
  warning.classList.add('hidden')
  overlay.classList.add('hidden')
}

for (i = 0; i < button.length; i++) {
  button[i].addEventListener('click', openWarnig)
}

closeModal.addEventListener('click', closeWarning)

overlay.addEventListener('click', closeWarning)

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeWarning()
  }
})
