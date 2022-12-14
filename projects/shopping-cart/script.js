alert("First attempt to create shopping cart system using javascript | the increase and decrease buttons are functional and total, subtotal and tax works as expected | Everything updates instantly.");

let totalPrice = 0;

function qtyToPriceCalculator(currentQTY, productPrice, toAdd, displayTotalPrice){
    
    if(toAdd == false && parseInt(currentQTY.value) > 1){
        let updatedQty = parseInt(currentQTY.value) - 1;
        currentQTY.value = updatedQty;

        // per item total price
        perItemPriceCalc(updatedQty, productPrice, displayTotalPrice);

        // sub total cart price
        subTotalCalc();

    }else if(toAdd == true){
        let updatedQty = parseInt(currentQTY.value) + 1;
        currentQTY.value = updatedQty;

        // per item total price
        perItemPriceCalc(updatedQty, productPrice, displayTotalPrice);

        // sub total cart price
        subTotalCalc();
    }
}

function perItemPriceCalc(updatedQty, productPrice, displayTotalPrice){
    let totalPerItem = updatedQty * productPrice;
    displayTotalPrice.querySelector('.price').innerHTML = "$" + totalPerItem;
}
function subTotalCalc(){
    let price1 = document.getElementById("price1").innerHTML;
    let price2 = document.getElementById("price2").innerHTML;
    totalPrice = parseInt(price1.split("$")[1]) + parseInt(price2.split("$")[1]);

    document.getElementById("subtotal").innerHTML = "$" + totalPrice;

    calculateTax(totalPrice);
}

function calculateTax(totalPrice){
    let tax = (totalPrice * 10) / 100;
    document.getElementById("tax").innerHTML = "$" + tax;

    calculateFinalTotal(totalPrice, tax);
}

function calculateFinalTotal(totalPrice, tax){
    let finalTotal = totalPrice + tax;
    document.getElementById("final-total").innerHTML = "$" + finalTotal;
}