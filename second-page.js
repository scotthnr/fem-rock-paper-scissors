const query = window.location.search;
const params = new URLSearchParams(query);
const sign = params.get("sign");

const pickedByYou = document.getElementById("rond1");
const pickedByOponent = document.getElementById("house-picked");
const oponent = document.getElementById("oponent");

let oponentNb;
let oponentSign = "";
let winner = "";

/* DISPLAY PICKED SIGN ON 2ND PAGE */
const displayPickedSign = (sign) => {
    if (sign == "rock") {
        document.getElementById("picked-image").src = "./icon-rock.svg";
        pickedByYou.setAttribute("id", "rond3");
    } else if (sign == "paper") {
        pickedByYou.setAttribute("id", "rond1");
    } else if (sign == "scissors") {
        document.getElementById("picked-image").src = "./icon-scissors.svg";
        pickedByYou.setAttribute("id", "rond2");
    }

    setTimeout(function () {
        displayOponentSign();
    }, 2500);
}

const displayOponentSign = () => {
    oponentNb = Math.floor(Math.random() * 3);

    if (oponentNb == 0) {
        oponentSign = "paper";
        document.getElementById("oponent-image").src = "./icon-paper.svg";
        pickedByOponent.setAttribute("id", "rond1");
        oponent.setAttribute("id", "paper-btn");
    } else if (oponentNb == 1) {
        oponentSign = "rock";
        document.getElementById("oponent-image").src = "./icon-rock.svg";
        pickedByOponent.setAttribute("id", "rond3");
        oponent.setAttribute("id", "rock-btn");
    } else if (oponentNb == 2) {
        oponentSign = "scissors";
        document.getElementById("oponent-image").src = "./icon-scissors.svg";
        pickedByOponent.setAttribute("id", "rond2");
        oponent.setAttribute("id", "scissors-btn");
    }

    defineWinner();
}

const defineWinner = () => {
    if (sign == "rock") {
        if (oponentSign == "rock") {
            winner = "nobody";
        } else if (oponentSign == "paper") {
            winner = "oponent";
        } else if (oponentSign == "scissors") {
            winner = "you";
        }
    } else if (sign == "paper") {
        if (oponentSign == "rock") {
            winner = "you";
        } else if (oponentSign == "paper") {
            winner = "nobody";
        } else if (oponentSign == "scissors") {
            winner = "oponent";
        }
    } else if (sign == "scissors") {
        if (oponentSign == "rock") {
            winner = "nobody";
        } else if (oponentSign == "paper") {
            winner = "you";
        } else if (oponentSign == "scissors") {
            winner = "oponent";
        }
    }

    if (winner == "you") {
        document.getElementById("result").innerHTML = "YOU WIN";
    } else if (winner == "oponent") {
        document.getElementById("result").innerHTML = "YOU LOSE";
    } else if (winner == "nobody") {
        document.getElementById("result").innerHTML = "IT'S A DRAW";
    }

    document.getElementById("result-display").style.display = "flex";
}



window.onload = displayPickedSign(sign);