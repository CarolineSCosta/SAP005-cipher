const cipher = {

    encode: function(offset, string) {
        const FIRST_ASCII_UPPER = "A".charCodeAt(0)
        const FIRST_ASCII_LOWER = "a".charCodeAt(0)
        const LAST_ASCII_UPPER = "Z".charCodeAt(0)
        const LAST_ASCII_LOWER = "z".charCodeAt(0)
        const ALPHABET_LENGTH = 26
        let cipherMessage = ""

        if (!offset || !string) {
            throw new TypeError('User must input an offset and string', 'cipher.js', 12)
        } else {
            for (let i = 0; i < string.length; i++) {
                const messageCharCode = Number(string[i].charCodeAt(0))
                let charDecode = ""
                if ((messageCharCode >= FIRST_ASCII_UPPER) && (messageCharCode <= LAST_ASCII_UPPER)) {
                    charDecode = ((messageCharCode - FIRST_ASCII_UPPER + offset) % ALPHABET_LENGTH) + FIRST_ASCII_UPPER
                } else if ((messageCharCode >= FIRST_ASCII_LOWER) && (messageCharCode <= LAST_ASCII_LOWER)) {
                    charDecode = ((messageCharCode - FIRST_ASCII_LOWER + offset) % ALPHABET_LENGTH) + FIRST_ASCII_LOWER
                } else {
                    charDecode = messageCharCode
                }
                cipherMessage += String.fromCharCode(charDecode)
            }
        }

        return cipherMessage
    },

    decode: function(offset, string) {
        const FIRST_ASCII_UPPER = "A".charCodeAt(0)
        const FIRST_ASCII_LOWER = "a".charCodeAt(0)
        const LAST_ASCII_UPPER = "Z".charCodeAt(0)
        const LAST_ASCII_LOWER = "z".charCodeAt(0)
        const ALPHABET_LENGTH = 26
        let cipherMessage = ""

        if (!offset || !string) {
            throw new TypeError('User must input an offset and string', 'cipher.js', 40)
        } else {
            for (let i = 0; i < string.length; i++) {
                const messageCharCode = Number(string[i].charCodeAt(0))
                let charDecode = ""
                if ((messageCharCode >= FIRST_ASCII_UPPER) && (messageCharCode <= LAST_ASCII_UPPER)) {
                    charDecode = ((messageCharCode - LAST_ASCII_UPPER - offset) % ALPHABET_LENGTH) + LAST_ASCII_UPPER
                } else if ((messageCharCode >= FIRST_ASCII_LOWER) && (messageCharCode <= LAST_ASCII_LOWER)) {
                    charDecode = ((messageCharCode - LAST_ASCII_LOWER - offset) % ALPHABET_LENGTH) + LAST_ASCII_LOWER
                } else {
                    charDecode = messageCharCode
                }
                cipherMessage += String.fromCharCode(charDecode)
            }
        }

        return cipherMessage
    },
};

export default cipher;