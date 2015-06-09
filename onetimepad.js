//First version of Onetimepad
var OneTimePad;
(function (OneTimePad) {
    function getNumberRepresentation(character) {
        return character.charCodeAt(0) - 65;
    }
    function getCharacterRepresentation(number) {
        return String.fromCharCode(number + 65);
    }
    function cypher(plainText, padKey) {
        var cipherText = '', plainTextArray = plainText.toLocaleUpperCase().split(''), padKeyArray = padKey.toLocaleUpperCase().split('');
        for (var i = 0; i < plainTextArray.length; i++) {
            cipherText += getCharacterRepresentation((getNumberRepresentation(plainTextArray[i]) + getNumberRepresentation(padKeyArray[i])) % 26);
        }
        return cipherText;
    }
    OneTimePad.cypher = cypher;
    function decryp(encriptedText, padKey) {
        var decryptedText = '', encriptedTextArray = encriptedText.toLocaleUpperCase().split(''), padKeyArray = padKey.toLocaleUpperCase().split('');
        for (var i = 0; i < encriptedTextArray.length; i++) {
            decryptedText += getCharacterRepresentation((getNumberRepresentation(encriptedTextArray[i]) - getNumberRepresentation(padKeyArray[i])) % 26);
        }
        return decryptedText;
    }
    OneTimePad.decryp = decryp;
})(OneTimePad || (OneTimePad = {}));
//# sourceMappingURL=onetimepad.js.map