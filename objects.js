/*
var person = {
	firstName: "Bart",
	lastName: "Karp",
	age:12
};
console.log(person.firstName); // Bart

*/
/*
var person = {

	firstName: "Bart",
	lastName: "Karp",
	age:12
	
	alertName: function(){
		alert(this.firstName);
	}
};
	person.firstName = "Irek";
	delete person.firstName;

person.alertName(); //undefined

*/
var friends = [];

	function addFriend(fName, lName, a, s){
		// var s = s || "m";
		var person = {
	
			firstName: fName,
			lastName: lName,
			age: a,
			sex: s || "m"  // jeśli nie będzie podanego arg. s, to wpisz domyślnie "m"
		};
		friends.push(person);
	}
addFriend("Ala", "Makota", 20, "f");
addFriend("Marek", "Kowalski", 30);
addFriend("Jan", "Nowak", 40);

console.log(friends[0]);
console.log(friends[1]);
console.log(friends[2]);
console.log("=================");

friends.forEach(function (element) {
		if (element.sex === "f"){
			console.log(element);
		}
});

console.log("=================");

//pętla for in  --> nadaje się tylko do obiektu
//pętla for:each

/*
var friends = ["ja", "ty", "my", "wy", "oni" ];
friends.forEach(function (element) {
		console.log(element);
});
*/