let keys = document.getElementsByClassName("key-item");

for(i=0; i < keys.length; i++){
    keys[i].addEventListener('click', keyPressed);
}
function keyPressed(){
    let keyValue = this.innerHTML;
    if(keyValue == "="){
        let math = document.getElementById("display").value;
        document.getElementById("display").value = eval(math);
    }else if(keyValue == "AC"){
        document.getElementById("display").value = "";
    }else{
        document.getElementById("display").value += this.innerHTML;
    }
    
}