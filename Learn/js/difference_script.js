function Difference (){
 var int1 = document.getElementById( "intDiff" ). value;
 var chack = Check (int1);
 var res;
 if (chack == false) {
  document.getElementById( "diff" ).innerHTML ="*INCORRECT! Enter correct number!";
 } else if (int1>13) {
  res = 2 * Math.abs(13 - int1);
  document.getElementById( "diff" ).innerHTML ="Absolute difference is: " + res;
 } else {
  res = Math.abs(13 - int1);
  document.getElementById( "diff" ).innerHTML ="Absolute difference is: " + res;
 }
}
