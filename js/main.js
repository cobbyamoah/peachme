//toggle comment box

$(".comment").click(function(){
    $(this).siblings('.input-group').toggleClass('sr-only');
    console.log("hello world");
});