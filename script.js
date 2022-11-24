const rules = document.getElementsByClassName("rules-display");

const displayRules = () => {
    rules[0].setAttribute("id", "display-rules");
}

const hideRules = () => {
    rules[0].setAttribute("id", "hide-rules");
}