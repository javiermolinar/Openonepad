/// <reference path="onetimepad.ts" />
var plainText = 'Hola';
var padKey = 'Algo';
var cipher = OneTimePad.cypher(plainText, padKey);
var decript = OneTimePad.decryp(cipher, padKey);
console.log(cipher);
console.log(decript);
//# sourceMappingURL=main.js.map