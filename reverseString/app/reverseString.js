'use string'

module.exports = {

 reverseString: function(strr){
	var revString ="";
	var isPalindrome = true;
	var wlen = strr.length - 1;
	if (strr === ""){
		return null;
	}
	for (var i=wlen;i>=0;--i){
		revString += strr[i];
	}
	if (revString === strr){
		return isPalindrome;
	}
	else return revString;
 }  
}