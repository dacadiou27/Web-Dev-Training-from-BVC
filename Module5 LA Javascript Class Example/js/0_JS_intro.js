var a=6;
var b=5;
var c=a+b;

function addTwoNumbers(){
    //body
    document.getElementById('ex3_vals').innerHTML="sum of " + a + " and " + b + " is ";
    document.getElementById('ex3').innerHTML = c;
    document.getElementById('ex3_vals2').innerHTML=" a " + a + " and " + b + " and " + "the sum of a an b is " + c;
}

function sum() {
    var x , y , z;
    x = parseInt(document.getElementById("number1").value);
    y = parseInt(document.getElementById("number2").value);
    z= x + y ;
    document.getElementById("xvalue").innerHTML= "X=" + x;
    document.getElementById("yvalue").innerHTML= "Y=" + y;
    document.getElementById("resultNumber").innerHTML= "Z=" + z;
}

function greeting() {
    var name;
    name=document.getElementById("name").value;
    document.getElementById("greetingMsg").innerHTML= "Hello " + name + " !";
}