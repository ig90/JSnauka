$("a").hover(function(event){
	//$("#hovered").show(event);
	console.log("hover!");
}, function(){
	//$("#hovered").hide();
	console.log("wychodzę!");
});

$("input").hover(function(){

}, function(){
});
//nie wywoła domyślnej funkcji po kliknięciu
/*
$("a").click(function(event){
	event.preventDefault();
});
*/
$("a").click(function(event){

	var xpos = event.pageX;
	var ypos = event.pageY;

	event.preventDefault();
	console.log(xpos + ',' + ypos);
});