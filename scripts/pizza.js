"use strict";
const priceSmall = 15;
const priceMedium = 20;
const priceLarge = 25;

function displayValues() {
    let output = "";

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
            console.log("subtotal is $(subtotal)");
    }

    pstToPay = subtotal * 0.07;
    gstToPay - subtotal * 0.08;
    total = subtotal + pstToPay + gstToPay;

    document.getElementById("total").value = Math.round(total);
    document.getElementById("subtotal").value = subtotal;
    document.getElementById("gstToPay").value = Math.round(gst);
    document.getElementById("pstToPay").value = Math.round(pst);
    document.getElementById("output").innerHTML = output;
    console.log(output);

    output += "Subtotal: $" + subtotal + "<br>";
    output += "GST: $" + gst + "<br>";
    output += "PST: $" + pst + "<br>";
    output += "Total: $" + total + "<br>";
}

function removeSelectDefaults() {
    var emptyBoxes = document.getElementsByTagName("select");
    for (var i = 0; i < emptyBoxes.length; i++) {
        emptyBoxes[i].selectedIndex = -1;
    }
}

function createEventListeners() {
    //get click from add passenger button to a variable
    var submitButton = document.getElementById("reservationButton");
    if (submitButton.addEventListener) {
        submitButton.addEventListener("click", registerDetails, false);
    } else if (submitButton.attachEvent) {
        submitButton.attachEvent("onclick", registerDetails);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}

/* remove default selected options */
if (window.addEventListener) {
    window.addEventListener("load", removeSelectDefaults, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", removeSelectDefaults);
}

//create function to validate form
function validate() {
    //check if user input name and if not, show alert message
    if (document.shuttleReservationForm.id_name.value == "") {
        alert("Please input your first name!");
        document.formData.fName.focus();
        return false;
    }
    if (document.shuttleReservationForm.id_name.value == "") {
        alert("Please input your address!");
        document.formData.id_address.focus();
        return false;
    }

    if (document.formData.id_name.value == "") {
        alert("Please input your phone numberame!");
        document.formData.id_phone.focus();
        return false;
    }

    if (document.formData.id_name.value == "") {
        alert("Please input size of pizza you'd like!!");
        document.formData.smallsize.focus() ||
            document.shuttleReservationForm.mediumsize.focus() ||
            document.shuttleReservationForm.largesize.focus();
        return false;
    }

    if (document.formData.id_name.value == "") {
        alert("Please input your phone number!");
        document.formData.id_delivery.focus();
        return false;
    }

    if (document.formData.id_crust1.value == "") {
        alert("Please input your crust choice!!");
        document.formData.id_crust1.focus();
        return false;
    } else if (document.formData.id_crust1.value == "") {
        alert("Please input your phone number!");
        document.formData.id_crust1.focus();
        return false;
    } else if (document.formData.id_crust2.value == "") {
        alert("Please input your phone numberame!");
        document.formData.id_crust2.focus();
        return false;
    } else document.formData.id_crust3.value == "";
    {
        alert("Please input your crust choice!!");
        document.formData.id_crust3.focus();
        return false;
    }

    if (document.formData.id_paymentmethod.value == "") {
        alert("Please input your crust choice!!");
        document.formData.id_paymentmethod.focus();
        return false;
    }
}
