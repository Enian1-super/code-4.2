function clearScreen(){
    document.getElementById("result").value = ""; 
}

function SetScreenValue(value) {
    const r = document.getElementById("result");
    if(r.value === "Enter an expression" || r.value === "invalid expression") r.value = "";
    r.value += value;
}

function CalculateResult() {
    const resultElement = document.getElementById("result");
    const expression = resultElement.value.trim();

    if(expression === "") {
        resultElement.value = "Enter an expression";
        return;
    }

    try {
        resultElement.value = eval(expression);
    }
    catch(e) {
        resultElement.value = "Invalid expression";
    }
}