
function getRandomColor()
{
    var letters='0123456789ABCDEF'
    var color = '#'
    for (var i =0 ; i < 6 ;i++)
    {
        var r1 = Math.floor(Math.random()*16)
       color=color+letters[r1]
    }
    return color
             
    }
  
    
    var myh1 = document.querySelector("button")
    
     myh1.addEventListener('click',function(){

       var bdy = document.querySelector("body")
        bdy.style.background=getRandomColor()
        


     })