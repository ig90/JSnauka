 //$("div")
//$("#my-element").width(640).height(480)
//$(".my-element").width(640).height(480)  //jeśli jest klasą

//jQuery
$("body").html('ciasteczko');
//odpowiednik w czystym javascript  (native DOM)
document.getElementsByTagName('body')[0].innerHTML = 'ciasteczko';
$("body").html('cia<hr> steczko');  //wprowadza html, więc możemy dodawać znaczniki
$("body").html('cia<hr> steczko').css({background: 'red'});
$("body").text('cia<hr> steczko');  // dodaje sam tekst, nie wstawi znaczników

//prepend  // przed contentem
//append  // po contencie
//after - po obiekcie
//before - przed obiektem
$("body").append('ciasteczko <span>');
$("body").html('cia<hr> steczko').css({background: 'red'}).append('<span> sernik').prepend('<span> ciastko');



