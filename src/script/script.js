const dialog = document.querySelector('dialog')
const innerForm = document.querySelector('#banner-form')
document.querySelector('#open').onclick = function () {
  dialog.showModal()
  dialog.append(innerForm)

}
document.querySelector('#close').onclick = function () {
  dialog.close()
}

