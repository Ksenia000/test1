 function Temperatures (){ 
 	
//Считаем значения из поля 
	var data = document.getElementById("convert"). value ;
	var degree = document.getElementById("degr"). value ;
	var res ;
	var dataInt ;
	dataInt = parseInt(data, 10);
	console.log(typeof data,data)
	if (data != dataInt ) {
		document.getElementById( "resConvert" ).innerHTML ="*INCORRECT! Enter correct data!";
	} else {
		if (degree == 'C'){
			res = dataInt * 9 / 5 + 32;
			document. getElementById( "resConvert" ).innerHTML = res + 'F';
		} else if (degree == 'F.') {
			res = (dataInt - 32) * 5 / 9;
			document. getElementById( "resConvert" ).innerHTML = res + 'C.';
		}
	}
 }
