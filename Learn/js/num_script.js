 function validate (){ 
 	
//Считаем значения из поля 
	var num = document.getElementById("field"). value ;
	var randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1);
	if (isNaN(num) || num.length == 0 || num < 1 && num > 0) {
		document.getElementById( "resErr" ).innerHTML ="*INCORRECT! Enter number between 1 to 10, please";
	} else {
		if (num == randInt){
			document. getElementById( "res" ).innerHTML ="Good Work!";
		} else {
			document. getElementById( "res" ).innerHTML ="Not matched!Try again=)";
		}
	}
/*/создание масива 
var arr = []; 
	for (var i = 1;i<=10; i++){
	 arr.push(i);
	} */

	console.log(num, randInt)
	/*if (num.length == 0 || num != 1 || num != 2 || num != 3 || num !=  4 || num != 5 || num != 6 || num != 7 || num!= 8 || num != 9 || num != 10) {
		document.getElementById( "res" ).innerHTML ="*INCORRECT! Enter number between 1 to 10, please";
	} 
	/*else{
		if (num == randInt){
		document. getElementById( "res" ).innerHTML ="Good Work!";
		return false;}
		else{
		document. getElementById( "res" ).innerHTML ="Not matched!";
		return false;	
		}
	}*/
	// return false;
}
