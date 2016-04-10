/*
var img;
var person;
var name, surname;
*/

var img = document.getElementsByTagName("img")[0];
var person = document.getElementById("about-me");
var name = document.getElementsByClassName("my-name")[0];
var surname = document.getElementsByClassName("my-surame")[0];


console.log(img);
console.log(person);
console.log(name);
console.log(surname);


console.log(name.innerText);

console.log(surname.innerText);
console.log(surname.innerHTML);

console.log(person.innerText);
console.log(person.innerHTML);


surname.innerText = " ";
