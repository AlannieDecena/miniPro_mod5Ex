   //attaching window object to a EventListene method, so when is 'loads' the function for the delay will activate
   window.addEventListener('load', function(){
    setTimeout(function open(event){
        document.querySelector('.popUpBox').style.display = 'block'; //getting the css property
    },5000) //delaying popUp for 5s

})
//for the onclick element on to change the text of the popUp box
function opps () {
    document.querySelector('.head').innerHTML = 'Opps!'
    document.querySelector('.text').innerHTML = 'Sorry you can not turn back'
}
