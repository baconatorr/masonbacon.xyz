//declare variables
let wins = 0;
let losses = 0;
let ties = 0;
let options = ["rock", "paper", "scissors"];
let winner;
let popup = document.getElementById("popup");
let choice;
let image = document.getElementById("winner-image");

//winner popup

function openWinner() {
    if (popup) {
        popup.classList.add("open-popup");
        console.log("opened");
    } else {
        console.error("Popup element not found!");
    }
    const rockbutton = document.getElementById("rock");
    const scissorsbutton = document.getElementById("scissors");
    rockbutton.disabled = true;
    scissorsbutton.disabled = true;
}

function closeWinner() {
    popup.classList.remove("open-popup");
    console.log("closed");
    const rockbutton = document.getElementById("rock");
    rockbutton.disabled = false;
    const scissorsbutton = document.getElementById("scissors");
    scissorsbutton.disabled = false;
}

//simulator for rock
function playerRock() {
    let computerselect = options[Math.floor(Math.random() * 3)];
    console.log(computerselect);

    choice = rock;
    
    if (computerselect == "rock") {
        ties++;
        winner = "tied";
        image.src = "tie.png";
    } else if (computerselect == "paper") {
        losses++;
        winner = "computer";
        image.src = "X.png";
    } else if (computerselect == "scissors") {
        wins++;
        winner = "player";
        image.src = "throphy.png";
    }

    //tell user summary
    document.getElementById("summary").innerText = "You chose rock. Computer chose " + computerselect + ".";

    updateScreen();
}

//simulator for paper
function playerPaper() {
    let computerselect = options[Math.floor(Math.random() * 3)];
    console.log(computerselect);
    
    
    if (computerselect == "rock") {
        wins++;
        winner = "player";
        image.src = "throphy.png";
    } else if (computerselect == "paper") {
        ties++;
        winner = "tied";
        image.src = "tie.png";
    } else if (computerselect == "scissors") {
        losses++;
        winner = "computer";
        image.src = "X.png";
    }

    //tell user summary
    document.getElementById("summary").innerText = "You chose paper. Computer chose " + computerselect + ".";

    updateScreen();
}

//simulator for scissors
function playerScissors() {
    let computerselect = options[Math.floor(Math.random() * 3)];
    console.log(computerselect);
    
    
    if (computerselect == "rock") {
        losses++;
        winner = "computer";
        image.src = "X.png";
    } else if (computerselect == "paper") {
        wins++;
        winner = "player";
        image.src = "throphy.png";
    } else if (computerselect == "scissors") {
        ties++;
        winner = "tied";
        image.src = "tie.png";
    }

    //tell user summary
    document.getElementById("summary").innerText = "You chose scissors. Computer chose " + computerselect + ".";

    updateScreen();
}

//update screen
function updateScreen() {

//calculate popup screen
    if (winner == "player") {
        document.getElementById("winner-display").innerText = "Bravo, you win!";
    } else if (winner == "tied") {
        document.getElementById("winner-display").innerText = "Tied! Try again?";
    } else if (winner =="computer") {
        document.getElementById("winner-display").innerText = "Unlucky, you lost!";
    }


//display wins
    document.getElementById("wins").innerText = "Wins: " + wins;
    document.getElementById("ties").innerText = "Ties: " + ties;
    document.getElementById("losses").innerText = "Losses: " + losses;
}
