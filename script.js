const rules = document.getElementsByClassName("rules-display");

let pickedSign = "";


/* DISPLAY RULES */
const displayRules = () => {
    rules[0].setAttribute("id", "display-rules");
}

/* HIDE RULES */
const hideRules = () => {
    rules[0].setAttribute("id", "hide-rules");
}

/* PICK SIGN (ROCK, PAPER OR SCISSORS) */
const pickSign = (className) => {
    pickedSign = className;
    console.log(pickedSign);
    
    
}