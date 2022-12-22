// Step 1

document.getElementById("error").style.display = "none";
document.getElementById("success").style.display = "none";

// Step 2

function generatePin(){
    let randNumber = (1000 + Math.random() * 9000).toFixed(0);
    document.getElementById('displayPin').value = randNumber;
    
}

// Step 3

let inputItems = document.getElementsByClassName("button");

for(i=0; i<inputItems.length; i++){
    inputItems[i].addEventListener("click", clickedBtn);
}


let displayValue = document.getElementById("displayValue");

function clickedBtn(){
    if(this.innerHTML == "C"){
        displayValue.value = "";
    }else if(this.innerHTML == "<" || this.innerHTML == "&lt;"){
        if(displayValue.value.length < 1){
            alert("Nothing To Delete!!")
        }else{
            let newNum  = displayValue.value.substring(0, displayValue.value.length - 1);
            document.getElementById("displayValue").value = newNum;
        }
    }
    else{
        displayValue.value += this.innerHTML;
    }
}
let count = 3;
function validatePin(){
    let pin = document.getElementById("displayPin").value;
    if(displayValue.value == pin && displayValue.value.length == 4){
        document.getElementById("success").style.display = "block";
        document.getElementById("error").style.display = "none";
        document.getElementById('displayPin').value = "";
        count = 3;
        document.getElementById("action-left").innerHTML = count + " try left"
    }else{
        document.getElementById("success").style.display = "none";
        document.getElementById("error").style.display = "block";
        count--;
        document.getElementById("action-left").innerHTML = count + " try left"
        if(count < 1){
            document.getElementById("submit-button").style.display = "none";
            document.getElementById("action-left").innerHTML = count + " try left / please refresh to try again"
        }
    }
}