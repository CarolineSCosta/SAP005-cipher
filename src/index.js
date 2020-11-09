import cipher from './cipher.js';

const ORIGINAL_MSG_TEXT_AREA = document.querySelector('#original-msg-text-area')
const OFFSET_KEY_INPUT_NUMBER = document.querySelector('#offset-key-input-number')
const CIPHER_BUTTON = document.querySelector('#cipher-button')
const DECIPHER_BUTTON = document.querySelector('#decipher-button')
const COPY_BUTTON = document.querySelector('#copy-button')
const CLEAR_BUTTON = document.querySelector("#clear-button")
const RESULT_MSG_TEXT_AREA = document.querySelector('#result-msg-text-area')

CIPHER_BUTTON.addEventListener('click', () => {
    const ORIGINAL_MESSAGE = ORIGINAL_MSG_TEXT_AREA.value
    const OFFSET = Number(OFFSET_KEY_INPUT_NUMBER.value)
    const CIPHER_MESSAGE = cipher.encode(OFFSET, ORIGINAL_MESSAGE)
    RESULT_MSG_TEXT_AREA.value = CIPHER_MESSAGE
})

DECIPHER_BUTTON.addEventListener('click', () => {
    const ORIGINAL_MESSAGE = ORIGINAL_MSG_TEXT_AREA.value
    const OFFSET = Number(numberInput.value)
    const DECIPHER_MESSAGE = cipher.decode(OFFSET, ORIGINAL_MESSAGE)
    RESULT_MSG_TEXT_AREA.value = DECIPHER_MESSAGE
})

COPY_BUTTON.addEventListener("click", () => {
    RESULT_MSG_TEXT_AREA.removeAttribute("disabled")
    RESULT_MSG_TEXT_AREA.select()
    document.execCommand("copy")
    COPY_BUTTON.innerHTML = "Copiado"
    RESULT_MSG_TEXT_AREA.setAttribute("disabled", true)
})

CLEAR_BUTTON.addEventListener("click", () => {
    ORIGINAL_MSG_TEXT_AREA.value = ""
    OFFSET_KEY_INPUT_NUMBER.value = ""
    RESULT_MSG_TEXT_AREA.value = ""
    COPY_BUTTON.innerHTML = "Copiar"

})