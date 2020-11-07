import cipher from './cipher.js';

const textArea = window.document.querySelector('#messageTextArea')
const numberInput = window.document.querySelector('#offsetKey')
const cipherButton = window.document.querySelector('#cipherButton')
const decipherButton = window.document.querySelector('#decipherButton')
const copyButton = window.document.querySelector('#copyButton')
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

copyButton.addEventListener("click", () => {
    resultMsg.removeAttribute("disabled")
    resultMsg.select()
    document.execCommand("copy")
    copyButton.innerHTML = "Copiado";
    resultMsg.setAttribute("disabled", true)
})

clearButton.addEventListener("click", () => {
    textArea.value = ""
    numberInput.value = ""
    resultMsg.value = ""
    copyButton.innerHTML = "Copiar";

})