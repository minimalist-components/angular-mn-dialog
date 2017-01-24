angular
  .module('mn-dialog')
  .service('MnDialog', MnDialog)

function MnDialog() {
  this.open = open
  this.close = close
  this.toggle = toggle

  function open(id) {
    const dialog = document.querySelector(`mn-dialog#${id}`)
    if (dialog) {
      dialog.open()
    }
  }

  function close() {
    const dialog = document.querySelector('mn-dialog.visible')
    if (dialog) {
      dialog.close()
    }
  }

  function toggle(id) {
    const dialog = document.querySelector(`mn-dialog#${id}`)
    if (dialog) {
      dialog.toggle()
    }
  }
}
