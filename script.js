$(document).ready(function(){

    $('img').click(function(){

        var newScr1 = $(this).attr("data-alt-src");
        var newSrc2 = $(this).attr("src");

            $(this).attr('data-alt-src',newSrc2);
            $(this).attr('src',newScr1);
            
    });
});