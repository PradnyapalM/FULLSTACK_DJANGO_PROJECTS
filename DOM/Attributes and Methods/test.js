// var x = document.querySelector("h1")
// x.style.color="red"


var x1 = document.querySelectorAll("h1")
for(h1 of x1)
{
    h1.style.color="red"

}

// var myh1 = document.querySelector("h1")
// myh1.innerHTML='<a href="https://google.com"> google</a>'

var fb = document.querySelector('a')
fb.getAttribute('href')
fb.setAttribute('href', "https://yahoo.com")