import Dialog from './material-dialog'

let smallButton = document.getElementById('small-button')
let mediumButton = document.getElementById('medium-button')
let largeButton = document.getElementById('large-button')

smallButton.addEventListener('click', showSmallDialog)
mediumButton.addEventListener('click', showMediumDialog)
largeButton.addEventListener('click', showLargeDialog)

function showSmallDialog () {
  new Dialog({
    title: 'Use Google\'s location service?',
    body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
    size: 'small'
  }).show()
}

function showMediumDialog () {
  new Dialog({
    title: 'Use Google\'s location service?',
    body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
    size: 'medium'
  }).show()
}

function showLargeDialog () {
  new Dialog({
    title: 'Use Google\'s location service?',
    body: 'Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.',
    size: 'large'
  }).show()
}
