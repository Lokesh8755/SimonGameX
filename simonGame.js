let gameSeq=[];
let userSeq=[];
//for random  color button
let btns=["red","yellow","green","purple"];

let started=false;
let level=0;
let h2= document.querySelector("h2");

document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game  is started");
        started=true;
        
        levelUp();
    }
});
//classList jo add hui h usse btn white hoga and "setTimeout"se remove hoga,so hame flash jesa lagega
function gameFlash(btn){
btn.classList.add("flash");
setTimeout(function(){
    btn.classList.remove("flash");
    },250);
}
// userFlash banayi taki jo bhi button user press kare alag se green color m dikhe  
    function userFlash(btn){
        btn.classList.add("userFlash");
        setTimeout(function(){
            btn.classList.remove("userFlash");
            },250);
            }

function levelUp(){
    userSeq = [];//user seq. ki empty value ,so user ko suruaat se sare number daalne padenge
    level++;
    h2.innerText=`level ${level}`;
    
    let randIdx=Math.floor(Math.random()*3);
    let randColor=btns[randIdx];
    let randBtn=document.querySelector(`.${randColor}`);
    console.log(randBtn);
    console.log(randIdx);
    console.log(randColor);
     //step-4 ke h do line
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}
 function checkAns(idx){
    // console.log("current level:", level);
    if (userSeq[idx]=== gameSeq[idx]){
      if(userSeq.length == gameSeq.length){
       setTimeout(levelUp,1000);
      }
    }else{
        h2.innerHTML=`Game Over! your score was <b>${level}</b> <br> Press any key to Start.`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        reset();   
    }  
 }

//step-3 button Event Listeners
function btnPress(){
   let btn = this;// with the help of "this " hame pata chalega ki konsa button press hua h
   userFlash(btn);//don't get confused ki hamne itni jagaj "button" variable use kiya h , they all are defined in their function, so in sabke liye function scope apply ho rha h,   // btn flash lagaya h ab sare button page par flash ho sakte h

   userColor= btn.getAttribute("id");
   userSeq.push(userColor); 
   checkAns(userSeq.length-1);
}
let allBtns=document.querySelectorAll(".btn"); 
for (btn of allBtns){
    btn.addEventListener("click",btnPress);
}
function reset(){
    started=false;
    gameSeq= [];
    userSeq= [];
    level=0;
}







