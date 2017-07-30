import './assets/css/material-dialog.css'
let background = document.getElementById('material-dialog-background')
// this variable holds the currently active modal
let currentActiveModal = null

if (!background) {
  background = document.createElement('div')
  background.setAttribute('id', 'material-dialog-background')
  document.body.appendChild(background)
}

// add event listener to the background
background.addEventListener('click', function (event) {
  event.preventDefault()
  if (currentActiveModal) {
    currentActiveModal.closeFromBackground()
  }
})

function createModal () {
  let modalDom = document.createElement('div')
  modalDom.setAttribute('id', 'material-dialog')
  modalDom.appendChild(document.createElement('h2'))
  modalDom.firstChild.classList.add('title')
  modalDom.appendChild(document.createElement('div'))
  modalDom.lastChild.classList.add('body')
  modalDom.appendChild(document.createElement('div'))
  modalDom.lastChild.classList.add('actions')
  return modalDom
}

class Dialog {
  constructor (options) {
    this.title = options.title || null
    this.body = options.body || null
    this.size = options.size || 'small'
    this.actions = options.actions || []
    this.dismissable = options.dismissable !== undefined ? options.dismissable : true
    this.modalDom = createModal()
    this.prepareModal()
    return this
  }

  undismissable () {
    this.dismissable = false
    return this
  }

  prepareModal () {
    this.modalDom.classList.add(this.size)
    this.modalDom.firstChild.innerHTML = this.title
    this.modalDom.childNodes[1].innerHTML = this.body

    // add button
    for (let button of this.actions) {
      let buttonDom = document.createElement('button')
      buttonDom.innerHTML = button.text
      if (button.action) {
        let me = this
        buttonDom.addEventListener('click', function (e) {
          e.preventDefault()
          button.action(me)
        })
      }
      this.modalDom.lastChild.appendChild(buttonDom)
    }
  }

  closeFromBackground () {
    if (this.dismissable) {
      this.close()
    }
  }

  close () {
    background.classList.remove('opened')
    document.body.classList.remove('no-scroll')
    document.body.removeChild(this.modalDom)
  }

  show () {
    background.classList.add('opened')
    document.body.appendChild(this.modalDom)
    document.body.classList.add('no-scroll')
    currentActiveModal = this
    return this
  }
}

export default Dialog
