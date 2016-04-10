$("li:first").text('abecadło');  //zmieni tekst pierwszego elementu listy na abecadło

var $elements = $("li");

$elements.eq(0).text("abecadło"); //zmieni tekst pierwszego elementu listy na abecadło
$elements.eq(2).text("ciasteczko");
$("li:even").prepend('parzysty: ');
$("li:odd").prepend('nieparzysty: ');

//$("li:odd").remove();   // usunie li nieparzyste

//jQuery: manipulacje DOM
//element.addClass("test");
//element.removeClass("test");
//element.css("background", "#fff");

$("li:even").addClass("test");
setTimeout(function(){
		//$("li:even").removeClass("test");
		$("li").css("background", "blue");
	},2000);
//==========================================
/*
var i=0;
setInterval(function(){
		console.log(i);
		i++;
}, 1000);
*/
$('#signin-password').attr('type') // #signin-pass - nazwa pola hasła na twitterze  attr('type') zwróci rodzaj
$('#signin-password').attr('value')  // zwróci wartość z tego okienka
$('#signin-password').attr("type", "text") // zamieni type atrybutu na text

//=============================
//chaining w wygodny sposób
$(".element").addClass("xxx")
    .removeAttr("type")
    .css({
        color:'red'	
    })
    .append("ciasteczko");
//=============================
 $("img").each(function(index){
 	console.log(index);
 });
 $("img").each(function(index, img){
 	//tutaj: this === img
 	console.log(index, img.src);
 });




