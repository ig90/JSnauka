 //Closure (domknięcie)

 /*
function przedstawSie(zwrot){

	var title = 'inż.';
	return function(imie){
	//	console.log(zwrot, imie);
	return zwrot + ' ' + title + ' '+ imie;
	};
}
var pan = przedstawSie('pan'); // zmienna pan też będzie funkcją
console.log(pan);

var jan = pan('Jan');
console.log(jan);
*/
function przedstawSie(zwrot){
	var zwrot = this.zwrot;  // bez this byłby kontekst globalny
	return function(imie){
		return zwrot + ' '+ imie;
	};
}
/*
var pan = przedstawSie.bind({zwrot: 'pan'});
console.log(pan('jan'));
*/
var newPrzedstawSie = przedstawSie.bind({zwrot: 'pan'});
var pan = newPrzedstawSie();
console.log(pan('marek'));



