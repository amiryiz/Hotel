$(function() {
    var wheight= $(window).height(); //get the height of the window

    $('.fullheight').css('height', wheight); // adjust the height of the rooms pics and the intro pic. 

    $(window).resize(function() { // when resize the window get the new height 
        var wheight= $(window).height();
        $('.fullheight').css('height', wheight); // adjust the height of the rooms pics and the intro pic.  
    })
});