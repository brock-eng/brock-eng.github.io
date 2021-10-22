

$(document).ready(function() {
    /**
     * Applies a specified animation class to a target class on scroll reveal.
     * @author Zach Brock
     * @param {string} targetClass           Class to be animated.
     * @param {string} animationClass        Animation class to be applied on scroll.
     * @param {boolean} resetOnScrollUp      Set to true to reset the animation when scrolling back up the page
     */
    function AnimateOnScroll(targetClass, animationClass, resetOnScrollUp) {
        targetClass = "." + targetClass;
        jQuery(function($) {
            $(document)
            $(window).on("load",function() {
                $(window).scroll(function() {
                    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
                    $(targetClass).each(function() {
                        /* Check the location of each desired element */
                        var objectBottom = $(this).offset().top;
                        if (objectBottom < windowBottom) {
                            $(this).addClass(animationClass);
                        } else if (resetOnScrollUp) {
                            $(this).removeClass(animationClass);
                        }
                    });
                }).scroll(); //invoke scroll-handler on page-load
            });
        });
    };

    // optimize performance for mobile device
    mobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    console.log("Mobile device detected?: " + mobile);

    AnimateOnScroll("logos", "slide-in", !mobile);
    AnimateOnScroll("to-wiggle", "wiggle", !mobile);
});



