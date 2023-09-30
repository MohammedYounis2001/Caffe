let name = prompt("Please enter your name");
if (name == null || name == "") {
    name = prompt("Please enter your name");
  }  
  
  let gender = prompt("Please enter your gender , Male or Female");

  if (gender == null || gender == "") {
    gender = prompt("Please enter your gender , Male or Female");
  }  

  else{
  if (gender == "Male" || gender=="male") {
    alert("Mr " + name +",\nWelcome to our family");
} else if (gender == "Female" || gender=="female") {
    alert("Ms " + name + ",\nWelcome to our family");
} else {
    alert(name + " welcome to our family");
}}

let drink = prompt(name +" do you want a hot or cold drink ?");

if(drink == null || drink==""){
    drink = prompt(name +" do you want a hot or cold drink ?");
} 

let drinkwant = prompt("Please write the name of the drink you want");
if ( drinkwant == null || drinkwant =="" )
{
    drinkwant = prompt("Please write the name of the drink you want");
}
 alert("The " + drinkwant+ " is being prepared");

 console.log("Name of user : "+ name + " and the ordered : " + drinkwant);



 