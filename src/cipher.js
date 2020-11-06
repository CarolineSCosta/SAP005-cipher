const cipher = {

    encode: function(offset, string) {
        const firstAsciiUpper = 65
        const firstAsciiLower = 97
        const lastAsciiUpper = 90
        const lastAsciiLower = 122
        const alphabetLength = 26
        let cipherMessage = ""

        if (offset == "" || offset == null || string == null || string == "") {
            throw new TypeError('user must input an offset and string', 'cipher.js', 10);
        } else {
            for (let i = 0; i < string.length; i++) {
                const messageCharCode = Number(string[i].charCodeAt())
                let charDecode = ""
                if (offset >= 0) {
                    if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                        charDecode = ((messageCharCode - firstAsciiUpper + offset) % alphabetLength) + firstAsciiUpper
                    } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                        charDecode = ((messageCharCode - firstAsciiLower + offset) % alphabetLength) + firstAsciiLower
                    } else {
                        charDecode = messageCharCode
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                } else {
                    if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                        charDecode = ((messageCharCode - lastAsciiUpper + offset) % alphabetLength) + lastAsciiUpper
                    } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                        charDecode = ((messageCharCode - lastAsciiLower + offset) % alphabetLength) + lastAsciiLower
                    } else {
                        charDecode = messageCharCode
                    }
                    cipherMessage += String.fromCharCode(charDecode)

                }
            }
        }

        return cipherMessage
    },

    decode: function(offset, string) {
        const firstAsciiUpper = 65
        const firstAsciiLower = 97
        const lastAsciiUpper = 90
        const lastAsciiLower = 122
        const alphabetLength = 26
        let cipherMessage = ""

        if (offset == "" || offset == null || string == null || string == "") {
            throw new TypeError('user must input an offset and string', 'cipher.js', 10);
        } else {
            for (let i = 0; i < string.length; i++) {
                const messageCharCode = Number(string[i].charCodeAt())
                let charDecode = ""
                if (offset >= 0) {
                    if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                        charDecode = ((messageCharCode - lastAsciiUpper - offset) % alphabetLength) + lastAsciiUpper
                    } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                        charDecode = ((messageCharCode - lastAsciiLower - offset) % alphabetLength) + lastAsciiLower
                    } else {
                        charDecode = messageCharCode
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                } else {
                    if ((messageCharCode >= 65) && (messageCharCode <= 90)) {
                        charDecode = ((messageCharCode - firstAsciiUpper - offset) % alphabetLength) + firstAsciiUpper
                    } else if ((messageCharCode >= 97) && (messageCharCode <= 122)) {
                        charDecode = ((messageCharCode - firstAsciiLower - offset) % alphabetLength) + firstAsciiLower
                    } else {
                        charDecode = messageCharCode
                    }
                    cipherMessage += String.fromCharCode(charDecode)
                }
            }
        }

        return cipherMessage
    },
};

export default cipher;