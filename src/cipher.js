const cipher = {

    encode: function(offset, string) {
        const firstAsciiUpper = 65
        const firstAsciiLower = 97
        const alphabetLength = 26
        let cipherMessage = ""


        for (let i = 0; i < string.length; i++) {
            const messageCharCode = Number(string[i].charCodeAt())
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
        const firstAsciiUpper = 65
        const firstAsciiLower = 97
        const alphabetLength = 26
        let cipherMessage = ""


        for (let i = 0; i < string.length; i++) {
            const messageCharCode = Number(string[i].charCodeAt())
            let charDecode = ""
            if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                charDecode = ((messageCharCode - firstAsciiUpper - offset) % alphabetLength) + firstAsciiUpper
            } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                charDecode = ((messageCharCode - firstAsciiLower - offset) % alphabetLength) + firstAsciiLower
            } else {
                charDecode = messageCharCode
            }
            cipherMessage = cipherMessage + String.fromCharCode(charDecode)
        }

        return cipherMessage
    },
};

export default cipher;