// store display element once
const display = document.getElementById("display");


// add numbers or operators to screen
function appendValue(value) {
    display.value += value;
}


// clear calculator screen
function clearDisplay() {
    display.value = "";
}


// delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// convert number to percentage
function percentage() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}


// calculate power
function power() {

    let base = parseFloat(display.value);
    let exponent = prompt("Enter power");

    if (!isNaN(base) && !isNaN(exponent)) {
        display.value = Math.pow(base, exponent);
    }
}


// perform calculation
function calculateResult() {

    let expression = display.value;

    if (expression.trim() === "") return;

    try {

        // support power operator
        expression = expression.replace("^", "**");

        let result = Function("return (" + expression + ")")();

        display.value = result;

        // store history
        saveHistory(expression, result);

    } 
    catch {
        display.value = "Error";
    }
}


// save calculation history
function saveHistory(expression, result) {

    const historyList = document.getElementById("historyList");

    if (!historyList) return;

    const item = document.createElement("li");

    item.textContent = expression + " = " + result;

    historyList.prepend(item);
}


// show / hide history panel
function toggleHistory() {

    const historyContainer = document.getElementById("historyContainer");

    if (historyContainer.style.display === "none") {
        historyContainer.style.display = "block";
    } 
    else {
        historyContainer.style.display = "none";
    }

}


// keyboard support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // numbers and operators
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    // enter → calculate
    if (key === "Enter") {
        calculateResult();
    }

    // backspace → delete
    if (key === "Backspace") {
        deleteLast();
    }

    // c → clear
    if (key === "c") {
        clearDisplay();
    }

    //h -> history
    if(key === "h") {
        toggleHistory();
    }

});

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }

}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }

=======
// store display element once
const display = document.getElementById("display");


// add numbers or operators to screen
function appendValue(value) {
    display.value += value;
}


// clear calculator screen
function clearDisplay() {
    display.value = "";
}


// delete last character
function deleteLast() {
    display.value = display.value.slice(0, -1);
}


// convert number to percentage
function percentage() {
    if (display.value !== "") {
        display.value = parseFloat(display.value) / 100;
    }
}


// calculate power
function power() {

    let base = parseFloat(display.value);
    let exponent = prompt("Enter power");

    if (!isNaN(base) && !isNaN(exponent)) {
        display.value = Math.pow(base, exponent);
    }
}


// perform calculation
function calculateResult() {

    let expression = display.value;

    if (expression.trim() === "") return;

    try {

        // support power operator
        expression = expression.replace("^", "**");

        let result = Function("return (" + expression + ")")();

        display.value = result;

        // store history
        saveHistory(expression, result);

    } 
    catch {
        display.value = "Error";
    }
}


// save calculation history
function saveHistory(expression, result) {

    const historyList = document.getElementById("historyList");

    if (!historyList) return;

    const item = document.createElement("li");

    item.textContent = expression + " = " + result;

    historyList.prepend(item);
}


// show / hide history panel
function toggleHistory() {

    const historyContainer = document.getElementById("historyContainer");

    if (historyContainer.style.display === "none") {
        historyContainer.style.display = "block";
    } 
    else {
        historyContainer.style.display = "none";
    }

}


// keyboard support
document.addEventListener("keydown", function (event) {

    const key = event.key;

    // numbers and operators
    if (!isNaN(key) || ["+", "-", "*", "/", "."].includes(key)) {
        appendValue(key);
    }

    // enter → calculate
    if (key === "Enter") {
        calculateResult();
    }

    // backspace → delete
    if (key === "Backspace") {
        deleteLast();
    }

    // escape → clear
    if (key === "c") {
        clearDisplay();
    }

});

function toggleTheme() {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme","dark");
    } else {
        localStorage.setItem("theme","light");
    }

}

window.onload = function () {

    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-mode");
    }
};
