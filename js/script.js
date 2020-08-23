//------------Nav Bar-------------
$(document).ready(function(){
    let hamStatus = true;
    $('#hamburger') .click(function(){
        hamStatus=false;
        $('.nav-links').toggleClass('height180px');
    })
    $(document).click(function(){
        if($('.nav-links').hasClass('height180px') && hamStatus){
            $('.nav-links').removeClass('height180px');
        }
        hamStatus=true;
    })
    $('.nav-links li a').on('click', function(){
        $('.nav-links').removeClass('height180px');
    });
})