let num1 ;
let num2 ;

num1 =prompt("Please enter first number");
num2 =prompt("Please enter second number");

let num3 = [num1 , num2];

 let num4 =num3.sort((x ,y) => x - y);
alert("Ascending order = " + num4);