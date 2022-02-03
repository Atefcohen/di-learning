//EXERCISE 1
function myMove() {
    let id = null;
    const redBox = document.getElementById("animate");   
    let position = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (position == 350) {
        clearInterval(id);
      } else {
        position++; 
        redBox.style.top = position + "px"; 
        redBox.style.left = position + "px"; 
      }
    }
  }

//EXERCISE 2
const blueBox = document.getElementById('animateToo');
blueBox.addEventListener('dragstart', dragStart);
blueBox.addEventListener('dragend', dragEnd);

function dragStart(){
    this.className += ' hold';
    
}
function dragEnd(){
    
}

