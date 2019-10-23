function upperCaseString() {
    var str2 = document.getElementById("str2").value;
    var res = 0;
    var lgth = str2.length;
    for (var i = 0; i < lgth; i++) {
        if (Check(str2[i]) == false) {
            res += str2[i].toUpperCase()
        } else {
            res += str2[i];
        }
    }
    document.getElementById("resupperCase").innerHTML = res;
}