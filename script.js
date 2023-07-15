'use strict'
let firstnumber = 0;
let action = 0;
let secondnumber = 9999999999999999;
b1.addEventListener("click", function () {
    output.innerHTML = 0;

})
b5.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 1;
})
b6.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 2;
})
b7.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 3;
})
b9.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 4;
})
b10.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 5;
})
b11.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 6;
})
b13.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 7;
})
b14.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 8;
})
b15.addEventListener("click", function () {
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "";
    }
    output.innerHTML = output.innerHTML + 9;
})
b17.addEventListener("click", function () {
    output.innerHTML = output.innerHTML + 0;
    if (parseInt(output.innerHTML) === 0) {
        output.innerHTML = "0";
    }
})
b2.addEventListener("click", function () {

    if (output.innerHTML.includes("-")) {
        output.innerHTML = output.innerHTML.substring(1);
    } else {
        output.innerHTML = "-" + output.innerHTML;
    }
})
b3.addEventListener("click", function () {
    output.innerHTML = parseInt(output.innerHTML) / 100;
})
b4.addEventListener("click", function () {
    firstnumber = parseInt(output.innerHTML);
    action = "/";
    output.innerHTML = 0;
})
b8.addEventListener("click", function () {
    firstnumber = parseInt(output.innerHTML);
    action = "*";
    output.innerHTML = 0;
})
b12.addEventListener("click", function () {
    firstnumber = parseInt(output.innerHTML);
    action = "-";
    output.innerHTML = 0;
})
b16.addEventListener("click", function () {
    firstnumber = parseInt(output.innerHTML);
    action = "+";
    output.innerHTML = 0;
})
b19.addEventListener("click", function () {
    secondnumber = parseInt(output.innerHTML);
    if (action === "/") output.innerHTML = Math.round(firstnumber / secondnumber);
    if (action === "*") output.innerHTML = firstnumber * secondnumber;
    if (action === "+") output.innerHTML = firstnumber + secondnumber;
    if (action === "-") output.innerHTML = firstnumber - secondnumber;
})

