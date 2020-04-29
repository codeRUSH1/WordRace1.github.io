const btn = document.querySelector('button');
const title = document.querySelector("a");


function random(number) {
    return Math.floor(Math.random() * (number+1));
  }
  
function bgChange() {
  const rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}   

btn.addEventListener('click', bgChange);

btn.addEventListener('click', function(){
 title.style.color = "white";
});

title.addEventListener('mouseover', function(){
  title.style.color = "black";
})
