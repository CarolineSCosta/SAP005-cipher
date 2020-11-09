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
    let cipherMessage = ""
    if (OFFSET >= 0) {
        cipherMessage = cipher.encode(OFFSET, ORIGINAL_MESSAGE)
    } else {
        cipherMessage = cipher.decode(-OFFSET, ORIGINAL_MESSAGE)
    }
    RESULT_MSG_TEXT_AREA.value = cipherMessage
})

DECIPHER_BUTTON.addEventListener('click', () => {
    const ORIGINAL_MESSAGE = ORIGINAL_MSG_TEXT_AREA.value
    const OFFSET = Number(OFFSET_KEY_INPUT_NUMBER.value)
    let decipherMessage = ""
    if (OFFSET >= 0) {
        decipherMessage = cipher.decode(OFFSET, ORIGINAL_MESSAGE)
    } else {
        decipherMessage = cipher.encode(-OFFSET, ORIGINAL_MESSAGE)
    }
    RESULT_MSG_TEXT_AREA.value = decipherMessage
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