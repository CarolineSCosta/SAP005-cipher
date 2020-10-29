const cipher = {

    encode: function(offset, string) {
        let messageCharCode = Number(string.toUpperCase().charCodeAt())
        let charDecode = ((messageCharCode - 65 + offset) % 26) + 65
        let cipherMessage = String.fromCharCode(charDecode)
        return cipherMessage
    },

    decode: function(offset, string) {

    }
};

export default cipher;