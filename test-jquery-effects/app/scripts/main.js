/*
$(".bttn").click(function(){
    $("#div1").fadeIn();
    $("#div2").fadeIn("slow");
    $("#div3").fadeIn(3000);
});
*/
/*
$("button").fadeIn(1000, function(){

	//$("")
	console.log("btn");
});
*/
   $('#div1').hide();
   $('#div2').hide();
   $('#div3').hide();
   $('#div4').hide();
   
$("#button1").click(function(){

   $('#div1').fadeIn();
   $('#div2').fadeTo(500, 1);  // 500 milisekund, opacity
   $('#div3').slideDown();
   $('#div4').show();
});
$('#button2').click(function(){
	$('#div1').animate({left: '250px'}, 500);
});
