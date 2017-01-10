'use strict'

module.exports = {

 words: function(words){

	//To handle the split
	var newWord ="";
	var wlen = words.length;
	var arrString = [];
//	var re = /\t/;
	for (var i=0;i<wlen;++i){
		if (words[i] === " " || (words[i] === "\t") || (words[i] === "\n")){
			if (newWord.length > 0){
				arrString.push(newWord);
				newWord = "";
			}
			else newWord = "";
		}	
		else newWord += words[i];
	}
	arrString.push(newWord);

  var result = Object.create(null);
	//This part is for the count
	for (var word in arrString){
		var wd = arrString[word];
		
		if (wd in result){
			result[wd] += 1;
		}
		else 
			result[wd] =  1;	
	} 
	
  return result;
 } 
}
