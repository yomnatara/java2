
function fun1() {
 

   
     var x= document.getElementById("username").value;
 var y=document.getElementById("url").value;
if(x==""||y==""||x==" "||y==" "){
    document.getElementById("Rname").style.display="block";
     document.getElementById("UrlW").style.display="block";

}else{
    document.getElementById("Rname").style.display="none";
    document.getElementById("UrlW").style.display="none";

    document.getElementById("mydiv").innerHTML ="<h4>"+x+ 
    "</h4>"+"<div class=\" mybuttong my-5\"><a class=\"btn btn-primary\"  target=\"_blank\" href="+y+" role=\"button\">Visit</a>"
    +
   " <button  type=\"button\"  class=\"mybutto btn ml-3 btn-danger\" onclick=\"fun2()\">delate</button> </div>";
  document.getElementById("username").value="";
  document.getElementById("url").value="";}
}

function fun2() {
    document.getElementById("mydiv").innerHTML ="";
}
