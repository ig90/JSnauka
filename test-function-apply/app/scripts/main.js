var title = 'zegarek';

var butelka = {
	title: 'cisowianka'
};

function printTitle(a,b,c){

	console.log(this.title, a,b,c); //a,b,c - kolejne elementy tablicy
}
printTitle();
//printTitle.call(butelka, new Date());
printTitle.call(butelka, 'dzis', 'jest', 'sobota'); // param. po prostu po przecinku
printTitle.apply(butelka, ['dzis', 'jest', 'sobota']);  // apply dodaje do tablicy 
// printTitle.bind(butelka, 'dzis', 'jest', 'sobota'); //nie uruchamia tej funkcji, tylko zwraca
var newPrintTitle = printTitle.bind(butelka, 'dzis', 'jest', 'sobota');
newPrintTitle();