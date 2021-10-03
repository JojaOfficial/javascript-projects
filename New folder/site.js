var count=0;


let dieter = {
	name:"Dieter",
	age:22,
	nationality:"Germany",
	haircolor:"gray"
}
var person_selector = ["name","age","nationality"];
person_selector[5] = "haircolor";
// console.log(person_selector)
//console.log(dieter[person_selector[2]])
function sayHello(){
	console.log(dieter[person_selector[count]])
	count +=1;
}
function greet(name,lastName){
	document.getElementById("heading").innerHTML = ("Hello "+ name+" "+lastName);
	// console.log("Hello "+ name,lastName);
}
// console.log(Date())
var num = 31;
// console.log((31).toString(2))
// greet("johann","peters");


// arrays finally

const cars = ["Saab", "Volvo", "BMW"];

// const cars2 = [
//   "Saab",
//   "Volvo",
//   "BMW"
// ];

// const cars3 = [];
// cars3[0]= "Saab";
// cars3[1]= "Volvo";
// cars3[2]= "BMW";

// const cars4 = new Array("Saab", "Volvo", "BMW");
// console.log(cars4)

let text = "<ul>";
for (const x of cars) {
	text += "<li>" + x + "</li>";
}
text += "</ul>";
document.getElementById("array").innerHTML = text;



// if after many hours

let hour = 16;

if (hour<10){
	greeting = "good morning"
} else if (hour<20){
	greeting = "good day"
}else {
	greeting = "good evening"
}


console.log(greeting);

switch(new Date().getDay()) {
	case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
document.getElementById("weekDay").innerHTML = "Today is " + day;

let fortext = "";

for (let i=0; i<2000;i++) {
	text += i + "->" + (i>>2) + "<br>"
	
}
document.getElementById("demoP").innerHTML = text

