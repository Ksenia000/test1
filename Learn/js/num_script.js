 function validate (){ 
//Считаем значения из поля 
var num = document.forms[ "numb" ][ "numField" ]. value ;
/*/создание масива 
var arr = []; 
	for (var i = 1;i<=10; i++){
	 arr.push(i);
	} */
	if ( num .length == 0 || num != 1 || num != 2 || num != 3 || num !=  4 || num != 5 || num != 6 || num != 7 || num!= 8 || num != 9 || num != 10) {
	 document. getElementById( "res" ).innerHTML ="*INCORRECT! Enter number between 1 to 10, please";
	 return false;} 
	else{
		document. getElementById( "res" ).innerHTML ="Good Work!";
	}
}