function funcSum() {
    var int1 = document.getElementById("int1").value;
    var int2 = document.getElementById("int2").value;
    var dataInt1 = parseInt(int1, 10);
    var dataInt2 = parseInt(int2, 10);
    var res;
    //console(int1,int2,dataInt1,dataInt2)
    if (int1 != dataInt1 || int2 != dataInt2) {
        document.getElementById("sum").innerHTML = "*INCORRECT! Enter correct number!";
    } else {
        if (int1 !== int2) {
            res = dataInt1 + dataInt2;
            document.getElementById("sum").innerHTML = res;
        } else {
            res = dataInt1 * 3;
            document.getElementById("sum").innerHTML = res;
        }
    }
}