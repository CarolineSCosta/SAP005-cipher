import cipher from './cipher.js';

console.log(cipher);

let offsetKey = window.document.querySelector('#offsetKey')
let cipherButton = window.document.querySelector('#cipherButton')
let textBox = window.document.querySelector('#messageTextArea')
let decipherButton = window.document.querySelector('#decipherButton')
let finalMsg = window.document.querySelector('#finalMsg')

cipherButton.addEventListener('click', cipherClick)

function cipherClick() {
    let originalMessage = textBox.value
    finalMsg.innerHTML = originalMessage
}