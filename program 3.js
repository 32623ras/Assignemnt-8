alert("please input your marks");
var English=prompt("English");
var English1=parseInt(English);
var Urdu=prompt("Urdu");
var Urdu1=parseInt(Urdu);
var Chemistry=prompt("Chemistry");
var Chemistry1=parseInt(Chemistry);

// calculation
var result=(English1+Urdu1+Chemistry1)/3;
if(result>=80){
    alert("You are above standard,Admission Granted!");  
}
else{
    alert("Admission Not Granted");
}
