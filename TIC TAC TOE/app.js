let btn=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset-btn");
let newGameBtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
const cells = document.querySelectorAll('.cell');
let tutno=true;
let count=0;
const patterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [3,4,5],
    [6,7,8]
];

btn.forEach((box)=>{
    box.addEventListener("click",()=>{
      if (tutno){
        box.innerText="O";
        box.style.color="black";
        tutno=false;
      }
      else{
        box.innerText="X";
        box.style.color="red";
        tutno=true;
      }
    box.disabled=true;
    count++; 
    let isWinner=checkWinner(); 
    if(count==9 &&!isWinner){
      gameDraw();
    }
    });
});

const checkWinner=()=>{
    for (let winpatterns of patterns)
    {
        let pos1=btn[winpatterns[0]].innerText;
        let pos2=btn[winpatterns[1]].innerText;
        let pos3=btn[winpatterns[2]].innerText;
        if (pos1!="" &&pos2!=""&&pos3!="")
        {
            if (pos1===pos2 &&pos2===pos3)
            {
                showWinner(pos1,winpatterns);
                return true;
            }
        }
    }
   return false;
};


const showWinner=(winner,winpatterns)=>{
  msg.innerText=`congratulations,winner is ${winner}`;
  msgContainer.classList.remove("hide");
  

  applyStrike(winpatterns);
  disableBoxes(); 
   

};



const applyStrike = (winPatterns) => {
  const winPatternType = determinePatternType(winPatterns);

  winPatterns.forEach(index => btn[index].classList.add('strike', winPatternType));
};

const determinePatternType = (pattern) => {
  if (pattern[0] === pattern[1] - 1 && pattern[1] === pattern[2] - 1) return 'diagonal1';
  if (pattern[0] === pattern[1] + 1 && pattern[1] === pattern[2] + 1) return 'diagonal2';
  if (pattern[0] % 3 === pattern[1] % 3 && pattern[1] % 3 === pattern[2] % 3) return 'vertical';
  if (Math.floor(pattern[0] / 3) === Math.floor(pattern[1] / 3) && Math.floor(pattern[1] / 3) === Math.floor(pattern[2] / 3)) return 'horizontal';
};


const disableBoxes=()=>{
  for(let box of btn){
    box.disabled=true;
  }
};



const enable=()=>{
  for(let box of btn){
    box.disabled=false;
    box.innerText="";
    box.classList.remove("strike");
  }
};

const resetGame=()=>{
  tutno=true;
  count=0;
  enable();
  msgContainer.classList.add("hide");
};


const gameDraw=()=>{
  msg.innerText=`game was a Draw`;
  msgContainer.classList.remove("hide");
  disableBoxes();

};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);