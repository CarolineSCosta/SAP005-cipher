import cipher from './cipher.js';

const textArea = window.document.querySelector('#messageTextArea')
const numberInput = window.document.querySelector('#offsetKey')
const decipherButton = window.document.querySelector('#decipherButton')
const cipherButton = window.document.querySelector('#cipherButton')
const clearButton = window.document.querySelector("#clearButton")
const resultMsg = window.document.querySelector('#finalMsg')

cipherButton.addEventListener('click', () => {
    const originalMessage = textArea.value
    const offset = Number(numberInput.value)
    const cipherMessage = cipher.encode(offset, originalMessage)
    resultMsg.value = cipherMessage
})

decipherButton.addEventListener('click', () => {
    const originalMessage = textArea.value
    const offset = Number(numberInput.value)
    const decipherMessage = cipher.decode(offset, originalMessage)
    resultMsg.value = decipherMessage
})

clearButton.addEventListener("click", () => {
    textArea.value = ""
    numberInput.value = ""
    resultMsg.value = ""
})