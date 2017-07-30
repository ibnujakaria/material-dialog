import Dialog from './material-dialog'

let button = document.getElementById('tes-button')
button.addEventListener('click', showModalDialog)

let dialog = new Dialog({
  title: 'Use Google\'s location service?',
  body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.'
})

function showModalDialog () {
  dialog.show()
}

showModalDialog()
