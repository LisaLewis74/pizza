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
    let total = subtotal + pstToPay + gstToPay;

    // these lines output to form elements
    document.getElementById("total").value = Math.round(total);
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("gstToPay").value = Math.round(gstToPay);
    document.getElementById("pstToPay").value = Math.round(pstToPay);

    // these lines output to the console and <span>
    output += `Subtotal: ${subtotal}<br>`;
    output += `GST: ${gstToPay}<br>`;
    output += `PST: ${pstToPay}<br>`;
    output += `Total: ${total}<br>`;
    console.log(output);
    
}
