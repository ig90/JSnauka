 var title = 'cisowianka';
 var kawa = {
 	title: 'tchibo'
 };
function printTitle(){
	//console.log('title');
	console.log(this.title);
}
setTimeout(printTitle, 1000); // funkcja  printTitle będzie uruchomiona po 1 sekundzie.
							  // parametrem powinna być funkcja, na pewno nie string
						      // uruchamia zawsze w globalnym kontekscie
window.setTimeout(printTitle.bind(kawa), 1000); // zmiana kontekstu przez bind // nie trzeba window, bo interpreter będzie wiedział, że setTimeout jest globalne





