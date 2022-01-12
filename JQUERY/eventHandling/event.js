$('h1').click( function(){
   alert('Please click button to get greeting messages')  
})

$('button:first').click( function(){
    alert('Hello dont sleep first')
    $(this).css('background','red')  
 })
 

 $('button:nth-of-type(2)').click( function(){
    alert('Hello dont sleep second')
    $(this).css('background','pink')  
 })


 $('button:last').click( function(){
    alert('Hello dont sleep first')
    $(this).css('background','purple')  
 })


//  $('input').keypress(function () {
//      alert("Inseted one character")
     
//  })

$('input').keypress(function (event) {
    if (event.which==88 || event.which==120) {
        alert("YOu pressed X|| x")
    }
    
    
})

$('h1').on('mouseover' , function () {

    $(this).text("Nagpur -City")
    $(this).css({background:'red',color:'white'})
    
})


$('h1').on('mouseout' , function () {

    $(this).text("Bombay -City")
    $(this).css({background:'green',color:'white'})
    
})

$('button:nth-of-type(3)').on('click',function (event) {

    alert("Dont Click me")
})


$('button:nth-of-type(4)').on('dblclick',function (event) {

    alert("will kill you")
})