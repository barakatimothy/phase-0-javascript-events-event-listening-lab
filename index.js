const input = document.getElementById("button");
function addingEventListener(){
 function clickAlert(){
    alert('I was clicked!')
}
input.addEventListener('click', clickAlert);
}
addingEventListener();