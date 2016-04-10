//dodaje do każdego obrazka atrybut "alt" z wartością indeksu odpowiedniego 
// dla indeksu obrazka
 $("img").each(function(index, img){  // function - funkcja anonimowa
	$(img).attr('alt', index);
 });
/*
function za5minut() {
	console.log('po 5 minutach... ');
}
setTimeout(za5minut,  5 * 60 * 1000); // za 5 minut
*/
//JavaScript  -> window.onload
// w jQuery  -> jest wszystko bez 'on', czyli np. .load



