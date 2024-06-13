let gameSeq = [];
let userSeq = [];

let started = false;
let level = 0;
//  let highestScore = 0;

let btns = ["yellow" , "red" , "purpal" , "green"];
let h2 = document.querySelector("h2")
document.addEventListener("keypress" , function(){
    if(started == false){
        console.log("ggame is started");
    started = true;
levelup();
    }
})

 function btnflash(btn){
 btn.classList.add("flash");
 setTimeout(function() {
    btn.classList.remove("flash");
   // console.log("flash is removed from classList");
 },250);
}

function userflash(btn){
    btn.classList.add("user");
    setTimeout(function() {
       btn.classList.remove("user");
      // console.log("flash is removed from classList");
    },250);
   }


function levelup(){
    userSeq= [];
level++;
h2.innerText = `level ${level}`;

let randind =Math.floor(Math.random() *3) ;
let randomColor = btns[randind];
let ranbtn = document.querySelector(`.${randomColor}`);

gameSeq.push(randomColor);
console.log("game sequece " ,gameSeq);
btnflash(ranbtn);

}

function checkans(idx){

if(userSeq[idx] === gameSeq[idx]){
    if(userSeq.length == gameSeq.length){
      setTimeout( levelup , 1000);  
    } 
}
else {
    h2.innerHTML = `game over! your score was ${level} <br> press anykey to start`;
    document.querySelector('body').style.backgroundColor = "red";
    setTimeout(() => {
        document.querySelector('body').style.backgroundColor = " white";
        
    }, 150);
    reset();
}
}


function btnpress(){
  //  console.log(this);
  let btn = this;
  userflash(btn);

  usercolor = btn.getAttribute("id");
  //console.log(usercolor);

  userSeq.push(usercolor);
  console.log( " user sequence" ,userSeq);
  checkans(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click" , btnpress);
}

function reset(){
    started = false;
    gameSeq = [] ;
    userSeq = [];
    level = 0 ;
}

