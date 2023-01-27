"use strict";
const priceSmall = 15;
const priceMedium = 20;
const priceLarge = 25;

function displayValues() {
    let output = "";
    let pizza_size = document.querySelector('input[name="pizza_size"]:checked');
    let subtotal = 0;

    switch (pizza_size.value) {
        case "10":
            subtotal = priceSmall;
            break;
        case "12":
            subtotal = priceMedium;
            break;
        case "15":
            subtotal = priceLarge;
            break;
    }
    console.log(`subtotal is ${subtotal}`);

    let pstToPay = subtotal * 0.07;
    let gstToPay = subtotal * 0.08;
    total = subtotal + pstToPay + gstToPay;

    document.getElementById("total").value = Math.round(total);
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("gstToPay").value = Math.round(gst);
    document.getElementById("pstToPay").value = Math.round(pst);

    output += "Subtotal: $" + subtotal + "<br>";
    output += "GST: $" + gst + "<br>";
    output += "PST: $" + pst + "<br>";
    output += "Total: $" + total + "<br>";
    console.log(output);
    document.getElementById("output").innerHTML = output;
}
