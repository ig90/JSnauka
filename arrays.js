var friends = "Kasia Monika Paweł Piotrek Piotrek Piotrek";

// var friends = "Kasia", "Monika", "Paweł"];

	console.log(friends);

friendsList = friends.split(" ");  // " " znak, po którym ma dzielić (w stringu)

	console.log(friendsList);
	console.log(friendsList[3]);
	console.log(friendsList[0]);
	console.log(friendsList.length);
	console.log(friends.length);

friendsList.push("Igor"); // dodajemy ostatni element tablicy
	console.log(friendsList[6]);  // Igor
	console.log(friendsList.length); // 7
friendsList.unshift("Ala");  // dodajemy pierwszy element tablicy

	console.log(friendsList[0]); 
	console.log(friendsList.length); 

friendsList.pop(); // usuwamy ostatni element tablicy

	console.log(friendsList[6]); 
	console.log(friendsList.length); 

friendsList.shift(); // usuwamy pierwszy element tablicy

	console.log(friendsList[0]); 
	console.log(friendsList.length); 
	console.log(friendsList);

console.log(friendsList.join("*")); //Kasia*Monika*Paweł ...

//splice() // dodajemy elementy do środka tablicy
friendsList.splice(1,0, "Irek", "Bart"); // od jedynki przesuwamy.
//0 - liczba elementów do usunięcia
	console.log(friendsList);
	
friendsList.splice(1,1, "Irek", "Bart"); ///drugie imię wyleci z tablicy

	console.log(friendsList);

function showFriends(){

	for (var i=0; i<friendsList.length; i++){
		console.log(friendsList[i]);
	}
}
	showFriends();
	console.log("===========================");

/*
var ciasteczko = "sernik";
var ostLitera = ciasteczko[ciasteczko.length-1];
console.log(ostlitera);
*/

function printList(tab){
	for (var i=0; i<tab.length; i++){
		var imie = tab[i];
		var ostLitera = imie[imie.length-1];
		if(ostLitera=="a"){
			console.log("Pani "+ imie);
		} else{
			console.log("Pan " + imie);
		}	
	}
}
	printList(friendsList);


