const cipher = {

    encode: function(offset, string) {
        const firstAsciiUpper = 65
        const firstAsciiLower = 97
        const alphabetLength = 25
        let cipherMessage = ""


        for (let i = 0; i < string.length; i++) {
            let messageCharCode = Number(string[i].charCodeAt())
            let charDecode = ""
            if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                charDecode = ((messageCharCode - firstAsciiUpper + offset) % alphabetLength) + firstAsciiUpper
            } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                charDecode = ((messageCharCode - firstAsciiLower + offset) % alphabetLength) + firstAsciiLower
            } else {
                charDecode = messageCharCode
            }
            cipherMessage = cipherMessage + String.fromCharCode(charDecode)
        }

        return cipherMessage
    },

    decode: function(offset, string) {
        const firstLetterAscii = 65
        const alphabetLength = 25
        let messageCharCode = Number(string.toUpperCase().charCodeAt())
        let charDecode = ((messageCharCode - firstLetterAscii - offset) % alphabetLength) + firstLetterAscii
        let cipherMessage = String.fromCharCode(charDecode)

        return cipherMessage

    }
};

export default cipher;