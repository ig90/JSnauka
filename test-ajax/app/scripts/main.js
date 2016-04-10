function ajax(url, callback){

	var xhr = new XMLHttpRequest();
	// console.log(xhr);
	// xhr.open('GET', 'data/list.json', true); // trzeci parametr - nie robić zapytań synchronicznych! czyli zawsze włączać async (true)

	xhr.open('GET', url, true);
	xhr.onreadystatechange = function(){

	//	console.log(this.readyState);
	if (this.readyState === 4) {

		callback(JSON.parse(this.responseText).ciasteczko);
	    //console.log(this.responseText);
	    //console.log(JSON.parse(this.responseText).ciasteczko);
	}
};

xhr.send();
//console.log(xhr.readyState);

}
//ajax('data/list.json');
ajax('data/list.json', function (response){ console.log(response)});

//===================================
function ajax2(url, callback){

	setTimeout(function(){
		console.log(url);
		callback();
	},1000);
}

ajax2('www.google.com', function(){
	console.log('to jest callback');

	});
//=====================================
function  funk(zaraportuj){

	setTimeout(function(){
		for(vat i =0; i<10000; i++){
			console.log();
		}
	}, 500);
}
function raport(){

 console.log('koniec');
}

