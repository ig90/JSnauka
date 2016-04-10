//console:
// window.navigator.userAgent
//wyrażenie regularne:

(/Chrome/).test(navigator.userAgent)
(/Firefox/).test(navigator.userAgent)
(/chrome/i).test(navigator.userAgent) // i - ignoruje wielkość liter
(/version(.*/).test(navigator.userAgent)

//pasek adresu
location.pathname  
location.protocol
location.href
location.hash
location.hash = "ciastaczko"
//w url po hashu dodawać ! ( ../#!/..)  // żeby google bot odczytał to jako poprawny link / stronę