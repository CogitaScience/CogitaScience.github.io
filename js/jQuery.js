$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 100)
        {
            $(".navbar").addClass("sticky");
            $(".goTop").fadeIn();
        }
        else
        {
            $(".navbar").removeClass("sticky");
            $(".goTop").fadeOut();
        }
    });

    $(".goTop").click(function(){
       scroll(0,0); 
    });

    $(".menu-toggler").click(function(){
        $(this).toggleClass("active");
        $(".navbar-menu").toggleClass("active");
    })

    $(".navbar-menu").click(function(){
        $(this).toggleClass("active");
        $(".menu-toggler").toggleClass("active");
    })
});