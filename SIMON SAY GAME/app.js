let gameSeq =[];
let userSeq = [];

let btns = ["yellow","red","lightblue","grey"];

//step 1 --> press any key to start the game 
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress",function(){
        //if gamestart nahi hua toh false hai toh started ki condition ko update karo 
        if(started === false){
            console.log("game is started");
            started = true;
           
        }
        levelUp();   
});

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },200);

}
function userFlash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
        btn.classList.remove("userflash");
    },200);

}

function levelUp() { //color generate function levelUp
    level++;
    userSeq=[];
    //now updating h2 when any key is pressed and game is started h2 will change to level 1     
    h2.innerText = `Level ${level}`;

    //random button choose karega then gameflash call lagega
    let randomIdx = Math.floor(Math.random()*4);
    let randmColor = btns[randomIdx];
    let randbtn = document.querySelector(`.${randmColor}`);


    gameSeq.push(randmColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}


function checkAns(idx){
        // console.log("current level:", level);
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else{
        h2.innerHTML =`Game Over! Your score was <b>${level}<b/> <br>Press any key to start!`;
        resetGame();
    }
}

function btnPress(){ //btn press fucntion jo user press karega game ka randm generate karne ke baad toh user seq mein jaake store karega
    // console.log(this);
    let btn = this;
    userFlash(btn);

    let userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor); 
    //ab iske baad ab hum userseq ko check karenge ki uske game sequence ke hissab se click kiya hia ki nhi toh hum ek function bana denge checkAns
   checkAns(userSeq.length-1);

}

let allBtns = document.querySelectorAll(".btn")
for(btn of allBtns){
    btn.addEventListener("click", btnPress);
}


function resetGame() {
    started = false;
    level = 0;
    gameSeq = [];
    userSeq = [];
}


