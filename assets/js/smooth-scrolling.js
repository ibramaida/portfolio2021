$(document).ready(function() {
    var scrollLink = $('.scroll');
    // smooth scrolling
    
    // scrollLink.click(function(e) {
    //     e.preventDefault();
    //     $('body,html').animate({
    //         scrollTop: $(this.hash).offset().top - 100
    //     }, 1000);

    // });

    // active link item switching

    $(window).scroll(function() {
        var scrollBarLocation = $(this).scrollTop();

        scrollLink.each(function() {

            var sectionOffset = $(this.hash).offset().top - 120;

            if (sectionOffset <= scrollBarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        })
    })
});