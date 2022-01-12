
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
  
    function getRandomName()
    {
        var names=['PUNE','NGP', 'DELHI','GOA','BOMBAY','CHENNAI','BHOPAL','UTI']

        var r = Math.floor(Math.random()*8)

        return names[r]
    }
    var myh1 = document.querySelector("h1")

    function changeColor()
    {
        myh1.style.color=getRandomColor()
    }


    function changeContentColor()
    {
        myh1.textContent=getRandomName()
        myh1.style.color=getRandomColor()
    }

    myh1.addEventListener("mouseover", changeContentColor)
    myh1.addEventListener("mouseout", changeColor)
