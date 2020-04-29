const btn = document.querySelector('button');
const title = document.querySelector("a");
const container1 = document.getElementById('container1');


function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   

function containerChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.container1.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);
btn.addEventListener('click', containerChange)

btn.addEventListener('click', function(){
 title.style.color = "white";
});

