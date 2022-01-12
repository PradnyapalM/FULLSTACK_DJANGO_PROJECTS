var restbtn = document.querySelector('#b')
var cells = document.querySelectorAll('td')
function clearCells()
{
  for(cell of cells)
  {
      cell.textContent=''
  }
    
}
restbtn.addEventListener('click',clearCells)


function changeContent(){
    if (this.textContent==='') 
    {
        this.textContent='X'
        
    }


    else if (this.textContent=='X') 
    {
        this.textContent='O'    
    }

    else
    {
        this.textContent=''
    }
    
    
}


for(cell of cells)
{
    cell.addEventListener('click', changeContent)
}