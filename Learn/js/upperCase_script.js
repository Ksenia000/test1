function upperCaseString() {
    var str2 = document.getElementById("str2").value;
    var res = "";
    var lgth = str2.length;
    for (var i = 0; i < lgth; i++) {
        if (!isNumber(str2[i])) {
            res += str2[i].toUpperCase()
        } else {
            res += str2[i];
        }
    }
    document.getElementById("resupperCase").innerHTML = res;
}