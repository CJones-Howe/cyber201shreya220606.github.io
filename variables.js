//using let
let name="Shreya";
let age=18;
let isStudent= true;

document.getElementById("demo1").innerHTML=
"Name: " + name + "<br>Age: " + age + "<br>Student: " + isStudent;

var city="Albany";		//function-scoped
let state= "NY";		//block-scoped
const country="USA"; //cannot be reassigned

document.getElementById("demo2").innerHTML=
"Location: " + city +", " + state + ", " + country;
