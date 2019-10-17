function Extension(){
 var strFile = document.getElementById("file").value;
 var lastIndex = strFile.lastIndexOf(".")
 document. getElementById( "ext" ).innerHTML = "Extension of a file is: " + strFile.substr(lastIndex + 1);
}