
let gamesequence = [];
let usersequence = [];
let btnsinarrays =["c1","c2","c3","c4"];
let gamestarted = false;
let higestvalue = 0;
// let gameended = false;
let level = 0;

let h2 = document.querySelector("h2");


// if(gamestarted == false && gameended == true){
//         document.addEventListener("click",function(){
//         alert("Click the keybord key ")
//         return;
//     })
        
// }


document.addEventListener("keypress",function(){

if(gamestarted == false){
    console.log("Game is started");
    gamestarted = true;
    levelup();
}
}
);


function btnflash(btn){
    btn.classList.add("flash");
    setTimeout(function(){
    btn.classList.remove("flash");
    },300);
// button main hi who class add kiya 
// fir button se hi who  class 1 sec ke bad remove ker diya 
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
    btn.classList.remove("userflash");
    },90);
// button main hi who class add kiya 
// fir button se hi who  class 1 sec ke bad remove ker diya 
}

function outcolor(element){
    element.classList.add("bodycolor");
    setTimeout(function(){
    element.classList.remove("bodycolor");
    },100);
}




function levelup(){
usersequence = [];
level++;
h2.innerText = `Level ${level}`;

let randomindex =  Math.floor(Math.random()*3);
let randomcolor =  btnsinarrays[randomindex];
let randombutton = document.querySelector(`.${ randomcolor}`);

gamesequence.push(randomcolor);
console.log("Game sequence "+gamesequence);

// console.log(randomindex);
// console.log(randomcolor);
// console.log(randombutton);
// <div class="btn c3" type="button"> 3 </div> //pura ka pura div call horaha hain 

// note we gave the class name and the of colors and the values in the arrays as same 
// random button flash 
btnflash(randombutton);
}

function checkanswer(lastindex){
// remember current level size = game sequence and user sequence
// console.log("Current level:",level);
 if(usersequence[lastindex] === gamesequence[lastindex]){
   // usersequence[0]  ===  gamesequence[0];
console.log(" if Usersequence "+usersequence[lastindex]+", and gamesequence "+gamesequence[lastindex])
  if(usersequence.length == gamesequence.length){
    setTimeout(levelup(),1000);
  }
 }

else{

h2.innerHTML =`game over ! Your score is <b> ${level}</b> <br> Press any key to start `;

if(higestvalue < level){
    higestvalue  = level;
}
else{
    higestvalue =  higestvalue ;
}
let higestscore = document.querySelector("p");

higestscore.innerText = `The higest score is ${ higestvalue}`;



//    gameended = true;
// document.querySelector("body").style.backgroundColor="red";
// setTimeout(function(){
// document.querySelector("body").style.backgroundColor="white"; 
// },250);
let body =  document.querySelector("body");
outcolor(body);
resetgame();

}


}

//  user 
function btnpress(){
let btn = this; // jo bhi button click kiya hai 
userflash(btn);
// console.log(this);//btn
// hame button ka attribute chiye...
let usercolor = btn.getAttribute("id");
usersequence.push(usercolor);
console.log("User sequence "+usersequence);
checkanswer(usersequence.length-1);

}

let buttons = document.querySelectorAll(".btn");
for(btn of buttons){
    btn.addEventListener("click",btnpress);
}


    
function resetgame(){
    gamestarted = false;
    // tab hi who condition main jayega uuper;
    gamesequence =[];
    usersequence =[];
    level = 0;
}



















































