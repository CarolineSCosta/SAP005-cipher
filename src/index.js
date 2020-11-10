import cipher from './cipher.js';

const originalMsgTextArea = document.querySelector('#original-msg-text-area')
const offsetKeyInputNumber = document.querySelector('#offset-key-input-number')
const cipherButton = document.querySelector('#cipher-button')
const decipherButton = document.querySelector('#decipher-button')
const copyButton = document.querySelector('#copy-button')
const clearButton = document.querySelector('#clear-button')
const resultMsgTextArea = document.querySelector('#result-msg-text-area')

cipherButton.addEventListener('click', () => {
    const originalMessage = originalMsgTextArea.value
    const offset = Number(offsetKeyInputNumber.value)
    let cipherMessage = ""
    if (offset >= 0) {
        cipherMessage = cipher.encode(offset, originalMessage)
    } else {
        cipherMessage = cipher.decode(-offset, originalMessage)
    }
    resultMsgTextArea.value = cipherMessage
})

decipherButton.addEventListener('click', () => {
    const originalMessage = originalMsgTextArea.value
    const offset = Number(offsetKeyInputNumber.value)
    let decipherMessage = ""
    if (offset >= 0) {
        decipherMessage = cipher.decode(offset, originalMessage)
    } else {
        decipherMessage = cipher.encode(-offset, originalMessage)
    }
    resultMsgTextArea.value = decipherMessage
})

copyButton.addEventListener("click", () => {
    resultMsgTextArea.removeAttribute("disabled")
    resultMsgTextArea.select()
    document.execCommand("copy")
    copyButton.innerHTML = "Copiado"
    resultMsgTextArea.setAttribute("disabled", true)
})

clearButton.addEventListener("click", () => {
    originalMsgTextArea.value = ""
    offsetKeyInputNumber.value = ""
    resultMsgTextArea.value = ""
    copyButton.innerHTML = "Copiar"

})