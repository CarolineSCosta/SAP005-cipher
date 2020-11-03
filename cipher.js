const cipher = {

    encode: function(offset, string) {
        const lastAsciiUpper = 65
        const lastAsciiLower = 97
        const alphabetLength = 26
        let cipherMessage = ""


        for (let i = 0; i < string.length; i++) {
            const messageCharCode = Number(string[i].charCodeAt())
            let charDecode = ""
            if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                charDecode = ((messageCharCode - lastAsciiUpper + offset) % alphabetLength) + lastAsciiUpper
            } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                charDecode = ((messageCharCode - lastAsciiLower + offset) % alphabetLength) + lastAsciiLower
            } else {
                charDecode = messageCharCode
            }
            cipherMessage += String.fromCharCode(charDecode)
        }

        return cipherMessage
    },

    decode: function(offset, string) {
        const lastAsciiUpper = 90
        const lastAsciiLower = 122
        const alphabetLength = 26
        let cipherMessage = ""


        for (let i = 0; i < string.length; i++) {
            const messageCharCode = Number(string[i].charCodeAt())
            let charDecode = ""
            if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                charDecode = ((messageCharCode - lastAsciiUpper - offset) % alphabetLength) + lastAsciiUpper
            } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                charDecode = ((messageCharCode - lastAsciiLower - offset) % alphabetLength) + lastAsciiLower
            } else {
                charDecode = messageCharCode
            }
            cipherMessage += String.fromCharCode(charDecode)
        }

        return cipherMessage
    },
};

export default cipher;