let timer=60;
let score=0;
let hitter=0;
function makebubble(){
    let clutter="";
for(let i=1;i<=168;i++){
   let rn= Math.floor(Math.random()*10);
   clutter+= `<div class="bubble">${rn}</div>`
   
}
document.querySelector("#panel-bottom").innerHTML=clutter;

}
makebubble();

function timerdon(){
    let time=setInterval(function(){
        if(timer>0){
         timer--;
         document.querySelector("#timerbox").textContent=timer;
        }
        else{
            document.querySelector("#panel-bottom").innerHTML=`<h1>GAME OVER</h1>`
         clearInterval(time);
        }
     },1000)
}
timerdon();
function hit(){
    hitter= Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitter;
}
hit();
function increasescore(){
   score+=10;
   document.querySelector("#scoreval").textContent=score;
}
document.querySelector("#panel-bottom").addEventListener("click",function(details){
    let bulbul=Number(details.target.textContent);
    if(bulbul===hitter){
        increasescore();
        makebubble();
        hit();
    }

})