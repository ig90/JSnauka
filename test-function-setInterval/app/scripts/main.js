/*
setInterval(function() {
	console.log('jestem');
}, 1000);

*/
var i =0;
var interval = setInterval( function() {
	
	i++;
	console.log('jestem' + i);
	
	if (i === 10){
		clearInterval(interval);
	}
}, 1000);
console.log(interval);


