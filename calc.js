function calc(){
	
	function odejmowanie(arg1, arg2){
		return arg1 - arg2;
	}
	function dodawanie(arg1, arg2){
		return arg1 + arg2;
	}
	function mnozenie(arg1, arg2){
		return arg1 * arg2;
	}
	function dzielenie(arg1, arg2){
		return arg1 / arg2;
	}
	var mix = odejmowanie(3,2)+dodawanie(2,5)*mnozenie(4,2)/dzielenie(8,4);

	console.debug(mix);
}
calc();

//closures (domknięcia leksykalne)
//wyrażenia funkcyjne

var haha = function(){
	console.log("Lubie Placki");
}
var blabla = function(){
	//console.log("Druga Funkcja");
	haha();
}
haha();
blabla();

/*
function sayMyName(name){
	var prefix = "Moje imie to: ";
	return name;
}
function returnMyName(){
		return prefix + name;
}
var heisenberg = sayMyName("Heisenberg");
//console.log(heisenberg); // "Heisenberg"
console.debug(heisenberg());
*/
/*
function kalkulator(arg1, arg2){

	var string = 'Wynik to: ';
	
	function dodawanie(dod1, dod2){
		return dod1 + dod2;
	}
	function odejmowanie(ode1, ode2){
		return ode1 - ode2;
	}
	var wynik = dodawanie(arg1, arg2); //5
	wynik = wynik + odejmowanie(arg1, arg2); // 5 + (-1) = 4
	//return wynik; //4
	return string + wynik;
}
console.log(kalkulator(2,3));
*/


