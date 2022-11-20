$(".single-photo").click(function(){
    if($(this).hasClass("focused")){
        alert('already focused');
    } else{
        $(".single-photo").removeClass("focused");
        $(this).toggleClass("focused");

    }
});