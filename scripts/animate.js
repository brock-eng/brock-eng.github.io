/**
 * Applies a specified animation class to a target classes on scroll reveal.
 * @author Zach Brock
 * @param {string} targetClass           Class to be animated.
 * @param {string} animationClass        Animation class to be applied on scroll.
 */
function AnimateOnScroll(targetClass, animationClass) {
    targetClass = "." + targetClass;
    jQuery(function($) {
        $(window).on("load",function() {
            $(window).scroll(function() {
                var windowBottom = $(this).scrollTop() + $(this).innerHeight();
                $(targetClass).each(function() {
                    /* Check the location of each desired element */
                    var objectBottom = $(this).offset().top;
                    
                    if (objectBottom < windowBottom) {
                        $(this).addClass(animationClass);
                    }
                });
            }).scroll(); //invoke scroll-handler on page-load
        });
    });
};

$(document).ready(function() {
    AnimateOnScroll("logos", "slide-in")
});


