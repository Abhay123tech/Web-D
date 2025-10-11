
const input = document.getElementById("number-input");
const result = document.getElementById("result");

function handleClickButton(el) {
    const exp = input.value + el.innerText;
    input.value = exp;

  // only calculate when it's NOT an operator
    if (["+", "-", "*", "/"].includes(el.innerText)) return;

    try {
      
    result.value = eval(exp);
    } catch (err) {
    result.value = "";
    }
}

function reset() {
    input.value = "";
    result.value = "";
}
