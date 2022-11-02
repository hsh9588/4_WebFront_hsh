const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");

const result = document.getElementById("result");


function plus(){

    result.innerHTML = Number(num1.value) + Number(num2.value);
}

function minus(){

    result.innerHTML = Number(num1.value) - Number(num2.value);
}

function multi(){

    result.innerHTML = Number(num1.value) * Number(num2.value);
}

function div(){

    result.innerHTML = Number(num1.value) / Number(num2.value);
}

function mod(){

    result.innerHTML = Number(num1.value) % Number(num2.value);
}
