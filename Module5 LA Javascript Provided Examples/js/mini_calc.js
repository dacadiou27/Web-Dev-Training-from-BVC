    
const btn1=document.getElementById('numb5');
var num1=Number(document.getElementById('numb1').value);
var num2= Number(document.getElementById('numb2').value);
var result=document.getElementById('result');

function calc(x,y){
    a = x + y;
    m = x * y;
    d = x/y;
    s = x - y;
    return " Sum = "+ a + " Muliti = "  + m + " Div  = " + d + "   Sub  = "+ s
}
function domath(){
  
    try{
        if(num1 =="" || num2 =="") {
            throw "enter input number for num1 and or num2";
            
        }else if (isNaN(num1) || isNaN(num2)){
            throw 'input must be number';
        }else{
            result.innerHTML += calc(num1,num2)//funciton call with the two input number from user
        }
    }catch(error){
        err_msg.innerHTML = error
    }finally{
        last_msg.innerHTML = "You have done sum, muliti, div, and sub of two numbers"
    }
}
