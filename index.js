import cipher from './cipher.js';

console.log(cipher);

let textArea = window.document.querySelector('#messageTextArea')
let numberInput = window.document.querySelector('#offsetKey')
let decipherButton = window.document.querySelector('#decipherButton')
let cipherButton = window.document.querySelector('#cipherButton')
let resultMsg = window.document.querySelector('#finalMsg')

cipherButton.addEventListener('click', () => {
    let originalMessage = textArea.value
    let offset = Number(numberInput.value)
    let cipherMessage = cipher.encode(offset, originalMessage)
    resultMsg.innerHTML = cipherMessage
})

decipherButton.addEventListener('click', () => {
    let originalMessage = textArea.value
    let offset = Number(numberInput.value)
    let decipherMessage = cipher.decode(offset, originalMessage)
    resultMsg.innerHTML = decipherMessage
})