$("table tr td.value").click(function(){
    var input = this.innerHTML;
    $("p.calc-display").append(input)
});

$("#clear-entry").click(function(){
    $("p.calc-display").text("");
});
$("#clear-all").click(function(){
    $("p.calc-display").text("");
});

$("#result").click(function(){
   var val = $("p.calc-display").text();
   var calcresult = eval(val);
   $("p.calc-display").text(calcresult);
});