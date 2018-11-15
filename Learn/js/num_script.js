 function validate (){ 
 	
//Считаем значения из поля 
	var num = document.getElementById("field"). value ;
	var randInt = Math.floor(Math.random() * (10 - 1 + 1) + 1);
	if (isNaN(num) || num.length == 0 || num < 1 && num > 10) {
		document.getElementById( "resErr" ).innerHTML ="*INCORRECT! Enter number between 1 to 10, please";
	} else {
		if (num == randInt){
			document. getElementById( "res" ).innerHTML ="Good Work!";
		} else {
			document. getElementById( "res" ).innerHTML ="Not matched! Try again =)";
		}
	}
	console.log(num, randInt)
}
