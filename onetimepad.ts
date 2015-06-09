//First version of Onetimepad

module OneTimePad {
	function getNumberRepresentation(character:string){	
		return character.charCodeAt(0) - 65;
	}
	
	function getCharacterRepresentation(number:number){	
		return String.fromCharCode(number + 65);	
	}
	
	export function cypher (plainText: string, padKey: string){
		let  cipherText : string = '',
		plainTextArray:string[] = plainText.toLocaleUpperCase().split(''),
		padKeyArray:string[] = padKey.toLocaleUpperCase().split('');
		
		for(var i=0;i<plainTextArray.length;i++){
			cipherText += getCharacterRepresentation((getNumberRepresentation(plainTextArray[i]) + getNumberRepresentation(padKeyArray[i])) % 26)				
		}	
		return cipherText;
	}
	
	export function decryp(encriptedText: string, padKey: string){
		var  decryptedText : string = '',
		encriptedTextArray:string[] = encriptedText.toLocaleUpperCase().split(''),
		padKeyArray:string[] = padKey.toLocaleUpperCase().split('');
		
		for(var i=0;i<encriptedTextArray.length;i++){
			decryptedText += getCharacterRepresentation((getNumberRepresentation(encriptedTextArray[i]) - getNumberRepresentation(padKeyArray[i])) % 26)		
		}
		return decryptedText;
	}
}