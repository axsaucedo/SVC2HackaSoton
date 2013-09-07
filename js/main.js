window.onload = function() {    


    var animateMe = function(targetElement, speed){

        $(targetElement).css({left:'-200px'});
        $(targetElement).animate(
            {
            'left': $(document).width() + 200
            },
            {
            duration: speed,
            complete: function(){
                animateMe(this, speed);
                }
            }
        );

    };
    animateMe($('#header-year'), 100000);
    animateMe($('#object2'), 3000);

}