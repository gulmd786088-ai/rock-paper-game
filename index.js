const allImg = document.querySelectorAll(".image-box img");
const choiseEl = document.querySelectorAll(".choise");
const countEl = document.querySelectorAll(".count");
const msgEl = document.querySelector(".msg");
let userCore = 0;
let cmpScore = 0;

const generateCmpChoise = () =>{
    // rock, paper,scissors
    const options = ["rock","paper","scissors"];
    let randNo = Math.floor(Math.random()*3);
    return options[randNo];
}

const showWinner = (userWin,userChoise,cmpChoise) =>{
    choiseEl[0].innerText = userChoise;
    choiseEl[1].innerText = cmpChoise;
    if(userWin)
    {
        userCore++;
        console.log("You Win !");
        msgEl.innerText = "You Win !";
        msgEl.style.background = "green";
        countEl[0].innerText = userCore;
    }
    else
    {
        cmpScore++;
        console.log("You Lost !");
        msgEl.innerText = "You Lost !";
        msgEl.style.background = "red";
        countEl[1].innerText = cmpScore;
    }
}

const playGame = (userChoise) =>{
    let cmpChoise = generateCmpChoise();
    console.log("Users "+userChoise);
    console.log("Comp "+cmpChoise);
    if(userChoise === cmpChoise)
    {
        msgEl.innerText = "Game Draw !";
        msgEl.style.background = "cornflowerblue";
        choiseEl[0].innerText = userChoise;
        choiseEl[1].innerText = cmpChoise;
    }
    else
    {
        let userWin = true;
        if(userChoise == "rock")
        {
            userWin = cmpChoise === "paper" ? false : true
        }
        else if(userChoise == "paper")
        {
            userWin = cmpChoise === "scissors" ? false : true
        }
        else
        {
            userWin = cmpChoise === "rock" ? false : true
        }
        showWinner(userWin,userChoise,cmpChoise);
    }
}

allImg.forEach((img)=>{
    img.onclick = () =>{
        let userChoise = img.id;
        playGame(userChoise);
    }
});
