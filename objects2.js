var people = {

	john: {
		firstName: "John",
		lastName: "Smith"
	},
	igor: {
		firstName: "Igor",
		lastName: "Filipiuk"
	}
}
for (var i in people){
	console.log(i); // key
	console.log(people[i]); // value
}
//odwołanie się tylko do jednego propertiesa obiektu john
/*	
console.log(people.john.firstName);
*/
/*
var obj = {
	key: "value"  // key jest zawsze stringiem
};
for (var i in obj){
	console.log(i); // key
	console.log(obj[i]); // value
}
*/
//console.log(obj.key);  // value