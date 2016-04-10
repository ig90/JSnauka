//var licznik=1;
/*
while(licznik<10){
	licznik =licznik + 1;
	console.log(licznik);
}
*/
//console.info(licznik);  // dodaje tylko niebieską ikonkę
//console.debug( ... );      // koloruje fonta na ciemny niebieski

/*
var wynik = 2;
var limit = 12;

while(licznik <limit){
	wynik=wynik*2;
	licznik++;
}
console.log(wynik);
*/
//console.log(Math.pow(2,12));

//trójkącik pętlą while
/*
var star = "";
var limit = 5;
var licznik =0;
while(licznik < limit){

	star += "*";
	console.log(star);
	licznik++;

}
*/
//trójkącik pętlą do...while
/*
var stars = "";
var limit = 5;
var counter =0;

do{
	stars += "*";
	console.log(stars);
	counter++;
} while (counter < limit);
*/
/*
for (var i=0; i<=10; i=i+2){
	console.log(i);
}
*/
var stars = " ";
var h = 5;
/*
for (var i=0; i<=5; i++){
	console.log(stars);
	stars+="*";
}
*/
/*
for (var i = 1; i <= h-1; i++)
{ 
	for (var k = 1 ; k <= h-i-1 ; k++){ 
		console.log(" ");
	}
		for (var j = 1; j <= 2*i-1 ; j++){
			console.log("*");
		}
		console.log(" ");
}
*/

/*
for (var i=1; i<=10; i++){
	if(i % 2 == 0){ // jeśli liczba jest parzysta
		console.log(i);
		//break;
	}
	
}
*/

/*
for(var i=0; i<=100; i++){

	if(i%3===0 && i%5===0){
		console.log(i+ " Ferdek Kiepski");
	}else if(i%3===0){
		console.log(i+ " Ferdek");
	}else if(i%5===0){
		console.log(i+ " Kiepski");
	}
}
*/
function dodawanie(liczba1, liczba2){

	var wynik = liczba1 + liczba2;
	return wynik;
}

//var wynik = dodawanie(4,5);
//console.log(wynik);
//console.log(dodawanie(2, 2));

function func2(num1, num2){
	var wynik = (num1*num2) - dodawanie(num1, num2);
	return wynik;
}
console.log(func2(1,1));

// console.log(wynik);  --> wynik jest zmienną lokalną, poza funkcją nie ma do niej dostępu.

//Choinka
var poziomy = 5;

var char = "*";
for (var i=1; i<=poziomy; i++){
	var line = "";
	var spaceCount = poziomy-i;

	for (var j=0; j<=spaceCount; j++){
		line = line+ " ";
	}
	for (var k=0; k<i+i-1; k++){
		line=line+char;
	}
	console.log(line);

}


