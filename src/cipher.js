const cipher = {

    encode: function(offset, string) {
        const firstLetterAscii = 65
        const alphabetLenght = 25
        let messageCharCode = Number(string.toUpperCase().charCodeAt())
        let charDecode = ((messageCharCode - firstLetterAscii + offset) % alphabetLenght) + firstLetterAscii
        let cipherMessage = String.fromCharCode(charDecode)
        return cipherMessage
    },

    decode: function(offset, string) {
        const firstLetterAscii = 65
        const alphabetLenght = 25
        let messageCharCode = Number(string.toUpperCase().charCodeAt())
        let charDecode = ((messageCharCode - firstLetterAscii - offset) % alphabetLenght) + firstLetterAscii
        let cipherMessage = String.fromCharCode(charDecode)
        return cipherMessage

    }
};

export default cipher;