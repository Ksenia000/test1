function rotateString(){
 var start = document.getElementById("rotate"). value;
 var timer = setInterval(
 function () 
 {
  start = start[start.length-1] + start.substring(0, start.length - 1);
  document. getElementById( "resRotate" ).innerHTML = start;
 }, 500);
 setTimeout(function() {
  clearInterval(timer);
  alert('enough');
  }, 5000);
}

function fillLeapYearElement() {
    var today = new Date();
    var year = today.getFullYear();
    //год, номер которого кратен 400, — високосный;
    var tmp400 = year % 400;
    //остальные годы, номер которых кратен 100, — невисокосные;
    var tmp100 = year % 100;
    //остальные годы, номер которых кратен 4, — високосные.
    var tmp4 = year % 4;
    if (!tmp100 && tmp400 && tmp4) {
        document.getElementById("resYear").innerHTML = year + " is leap year in the Gregorian calendar )";
    } else {
        document.getElementById("resYear").innerHTML = year + " is'nt leap year in the Gregorian calendar :(";
    }
    console.log(year)
}