//alert("Hello World")

/*
if (isNaN(zmienna) == true){
	alert("wprowadź wartość liczbową!");
}

*/
var ciasteczko = "sernik";
	console.log(ciasteczko); 		// do debugowania
if (isNaN(ciasteczko) == true){
	alert("wprowadź wartość liczbową!");
}
else{
	alert(ciasteczko);
}
console.log(typeof(ciasteczko)); // nawias w typeof jest opcjonalny 
console.log(typeof 123); //number
console.log(typeof "ser"); // string
console.log(typeof undefined); //undefined
console.log(typeof NaN);  //number
console.log(typeof null); //object
console.log(typeof Infinity); // number 
console.log(typeof true);  // boolean

var czyToSernik = (ciasteczko == "sernik");
	 console.log(typeof czyToSernik);

var osoba = {

	firstName: "Bart",
	lastName: "Karp",
	age: 12

};
	console.log(osoba);
	console.dir(osoba);
	console.log(osoba.toString());

var zakupy = ["abc", "def", "ghi"];

	console.log(typeof zakupy);  // Object
	console.log(zakupy.toString());

for (var i=0; i < zakupy.length; i++)
	console.log(i);
}
var str = "\"To jest backslash - \\\""
	console.log(str);
	
// true && false = false
// true && true = true

//"5" == 5 // true  == typ jest nieważny
//"5" === 5 // false, === sprawdza typy

//alert();
//confirm();  // anuluj, OK
//prompt(); // wprowadź wartość

/*
var myName = 128;

if (typeof(myName) == "string"){
	alert(myName);
} else{
	alert("this ain't a name, bro");
}
*/
/*
var myName = null;
if (typeof(myName) == "string"){
	alert(myName);
} else if (typeof(myName) == number){
	alert("this ain't a name, bro");
} else {
	alert();
}
*/


