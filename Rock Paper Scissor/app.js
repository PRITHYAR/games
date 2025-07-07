
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const usercount0=document.querySelector("#user-count");
const compcount0=document.querySelector("#comp-count");
let usercount=0;
let compcount=0;

const gencompchoice=()=>
{
    const options=["rock","paper","scissors"];
    const randidx=Math.floor(Math.random()*3);
    return options[randidx];
};
const drawgame=()=>{
    msg.innerText="game is draw.play again";
    msg.style.backgroundColor="black";
};

const showwinner=(userwin)=>{
    if(userwin){
        usercount++;
        usercount0.innerText=usercount;
        msg.innerText="you win!";
        msg.style.backgroundColor="green";

    }
    else{
        compcount++;
        compcount0.innerText=compcount;
        msg.innerText="you lose";
        msg.style.backgroundColor="red";

    }


};



const playgame=(userchoice)=>{
    const compchoice=gencompchoice();
    if (userchoice===compchoice){
        drawgame();
    }
    else {
        let userwin=true;
           if (userchoice==="rock"){
            userwin=compchoice==="paper"?false:true;
           }
           else if(userchoice==="paper"){
            userwin=compchoice==="scissors"?false:true;
           }
           else{
            userwin=compchoice==="rock"?false:true;

           }
        showwinner(userwin);
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice= choice.getAttribute("id");
        playgame(userchoice);

    });

});