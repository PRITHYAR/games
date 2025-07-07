const newtxtbox1=document.querySelector("#newtxtbox1");
const newtxtbox2=document.querySelector("#newtxtbox2");
const guessbtn=document.querySelector("#guessbtn");
const guesstxtbox1=document.querySelector("#guesstxtbox1");
const show=document.querySelector("#show");
newtxtbox1.value=1;
newtxtbox2.value=100;

//let rand1=randGen();
const randGen=()=>{
    return Math.floor(Math.random()*100);
    
}


 const playgame=()=>{
    let rand1=randGen();
    guessbtn.addEventListener("click",()=>{
        let val=Number(guesstxtbox1.value);
        
        if(rand1===val){
           show.innerText="your guess is right";
           show.style.backgroundcolor="green";

        }
        else if(val>rand1){
            show.innerText="your number is greater";
            show.style.backgroundcolor="red";
        }
        else{
            show.innerText="your number is smaller";
            show.style.backgroundcolor="red";
        }

    });
 }

 playgame();