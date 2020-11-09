const cipher = {

    encode: function(offset, string) {
        const FIRST_ASCII_UPPER = 65
        const FIRST_ASCII_LOWER = 97
        const LAST_ASCII_UPPER = 90
        const LAST_ASCII_LOWER = 122
        const ALPHABET_LENGTH = 26
        let cipherMessage = ""

        if (offset == "" || offset == null || string == null || string == "") {
            throw new TypeError('User must input an offset and string', 'cipher.js', 12)
        } else {
            for (let i = 0; i < string.length; i++) {
                const MESSAGE_CHAR_CODE = Number(string[i].charCodeAt(0))
                let charDecode = ""
                if (offset >= 0) {
                    if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_UPPER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_UPPER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - FIRST_ASCII_UPPER + offset) % ALPHABET_LENGTH) + FIRST_ASCII_UPPER
                    } else if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_LOWER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_LOWER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - FIRST_ASCII_LOWER + offset) % ALPHABET_LENGTH) + FIRST_ASCII_LOWER
                    } else {
                        charDecode = MESSAGE_CHAR_CODE
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                } else {
                    if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_UPPER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_UPPER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - LAST_ASCII_UPPER + offset) % ALPHABET_LENGTH) + LAST_ASCII_UPPER
                    } else if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_LOWER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_LOWER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - LAST_ASCII_LOWER + offset) % ALPHABET_LENGTH) + LAST_ASCII_LOWER
                    } else {
                        charDecode = MESSAGE_CHAR_CODE
                    }
                    cipherMessage += String.fromCharCode(charDecode)

                }
            }
        }

        return cipherMessage
    },

    decode: function(offset, string) {
        const FIRST_ASCII_UPPER = 65
        const FIRST_ASCII_LOWER = 97
        const LAST_ASCII_UPPER = 90
        const LAST_ASCII_LOWER = 122
        const ALPHABET_LENGTH = 26
        let cipherMessage = ""

        if (offset == "" || offset == null || string == null || string == "") {
            throw new TypeError('User must input an offset and string', 'cipher.js', 52)
        } else {
            for (let i = 0; i < string.length; i++) {
                const MESSAGE_CHAR_CODE = Number(string[i].charCodeAt(0))
                let charDecode = ""
                if (offset >= 0) {
                    if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_UPPER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_UPPER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - LAST_ASCII_UPPER - offset) % ALPHABET_LENGTH) + LAST_ASCII_UPPER
                    } else if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_LOWER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_LOWER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - LAST_ASCII_LOWER - offset) % ALPHABET_LENGTH) + LAST_ASCII_LOWER
                    } else {
                        charDecode = MESSAGE_CHAR_CODE
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                } else {
                    if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_UPPER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_UPPER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - FIRST_ASCII_UPPER - offset) % ALPHABET_LENGTH) + FIRST_ASCII_UPPER
                    } else if ((MESSAGE_CHAR_CODE >= FIRST_ASCII_LOWER) && (MESSAGE_CHAR_CODE <= LAST_ASCII_LOWER)) {
                        charDecode = ((MESSAGE_CHAR_CODE - FIRST_ASCII_LOWER - offset) % ALPHABET_LENGTH) + FIRST_ASCII_LOWER
                    } else {
                        charDecode = MESSAGE_CHAR_CODE
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                }
            }
        }

        return cipherMessage
    },
};

export default cipher;