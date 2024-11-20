let timer = 20;
let score = 0;
let hitrn = 0;

function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score; 
}

function getNewHit(){
    hitrn = Math.floor(Math.random()*10) 
    document.querySelector("#hitval").textContent= hitrn;
}

function makeBubble () {
    let clutter = ' ';

for (let i=1;i<=133;i++ ){
    let rn = Math.floor(Math.random()*10)
    clutter +=  `<div class="bubble">${rn}</div>`
}

document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    let timerint = setInterval(function () { 
        if (timer>0){
            timer--;
            document.querySelector("#timerval").innerHTML = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    },1000);
}

document.querySelector("#pbtm").addEventListener("click",function(details){
    let clickedNumber = Number(details.target.textContent);
    if (clickedNumber === hitrn) {
        increaseScore();
        makeBubble();
        getNewHit();
    }
})

makeBubble()
getNewHit()
runTimer()
