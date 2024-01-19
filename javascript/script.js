let userScore=0;
let comScore=0;
const choices=document.querySelectorAll(".choice");
const msg1=document.querySelector("#msg");
const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const genCompChoice=()=>{
    const options=["rock","paper","scissors"];
    const ran=Math.floor(Math.random()*3);
    return options[ran];
};
const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);
    const compChoice=genCompChoice();
    console.log("computer choice=",compChoice);
    if(userChoice===compChoice){
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            userWin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userChoice=compChoice==="scissors"?false:true;
        }
        else{
            userChoice=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice);
        
    }
};
const drawGame=()=>{
    msg1.innerText="Game was Draw.Play Again.";
    msg1.style.backgroundColor="#081b31";
};

const showWinner=(userWin,userChoice,compChoice)=>{
        if(userWin){
            userScore++;
            userScorePara.innerText=userScore;
            msg1.innerText=`You Won! your ${userChoice} beats ${compChoice}`;
            msg1.style.backgroundColor="green";
        }
        else{
            console.log("You lose");
            comScore++;
            compScorePara.innerText=comScore;
            msg1.innerText=`You Lost.${compChoice} beats your ${userChoice}`;
            msg1.style.backgroundColor="red";
            
        }
    };

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
})
















