angular
  .module('mn-dialog')
  .service('$mnDialog', MnDialog)

function MnDialog() {
  this.open = open
  this.close = close
  this.toggle = toggle

  // Array
  //   .from(document.querySelectorAll(`mn-dialog`))
  //   .forEach(dialog => dialog.clickOutside(false))

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
