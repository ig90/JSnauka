var title = 'zegarek';

var butelka = {
	title: 'cisowianka'
};

function printTitle(){
	console.log(this.title); 
}
printTitle();
printTitle.call(butelka);

