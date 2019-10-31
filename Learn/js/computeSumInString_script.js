function extractAndSumFumbersInString() {
    var userString = document.getElementById("str1").value;
    var arrFromString = Array.from(userString);
    var result = 0;
    var lengthArrFromString = arrFromString.length;
    for (var i = 0; i < lengthArrFromString; i++) {
        if (isNumber(arrFromString[i]) == true) {
            result += parseInt(arrFromString[i], 10);
        }
    }
    document.getElementById("resStringSum").innerHTML = result;
}