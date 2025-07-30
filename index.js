//Temperature Conversion Program

const InputValue = document.getElementById("inputnumber");
const C2F = document.getElementById("c2f");
const F2C = document.getElementById("f2c");
const Result = document.getElementById("mytxt");
const Submit = document.getElementById("ok");


let val;

Submit.onclick = function () {

    val = InputValue.value;
    val = Number(val);

    if (C2F.checked) {
        val = val * 9 / 5 + 32;
        Result.textContent = `${val.toFixed(1)} ℉`;
    }
    else if (F2C.checked) {
        val = (val - 32) * 5 / 9;
        Result.textContent = `${val.toFixed(1)} ℃`;
    }
    else {
        Result.textContent = "Select The Unit";
    }

}