function SumInString() {
    var str1 = document.getElementById("str1").value;
    var arrStr = Array.from(str1);
    var res = 0;
    var lgth = arrStr.length;
    for (var i = 0; i < lgth; i++) {
        if (Check(arrStr[i]) == true) {
            res += parseInt(arrStr[i], 10);
        }
    }
    document.getElementById("resStringSum").innerHTML = res;
}