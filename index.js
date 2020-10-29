import cipher from './cipher.js';

console.log(cipher);

let textArea = window.document.querySelector('#messageTextArea')
let numberInput = window.document.querySelector('#offsetKey')
let decipherButton = window.document.querySelector('#decipherButton')
let cipherButton = window.document.querySelector('#cipherButton')
let resultMsg = window.document.querySelector('#finalMsg')

cipherButton.addEventListener('click', cipherClick)

function cipherClick() {
    let originalMessage = textArea.value
    let offset = Number(numberInput.value)
    let messageCharCode = Number(originalMessage.charCodeAt())
    let charDecode = ((messageCharCode - 65 + offset) % 26) + 65
    let cipherMessage = String.fromCharCode(charDecode)
    resultMsg.innerHTML = `A sua mensagem é ${cipherMessage}`
}