var contentwidth = jQuery(window).width();
if ((contentwidth) > '319') {
    jQuery('.filter-btn').append('<span class="according-menu"></span>');
    jQuery('.filter-btn').click(function () {
        jQuery('.filter-btn').removeClass('active');
        jQuery('.filter-content').slideUp('normal');
        if (jQuery(this).next().is(':hidden') == true) {
            jQuery(this).addClass('active');
            jQuery(this).next().slideDown('normal');
        }
    });
    jQuery('.filter-content').hide();
} else {
    jQuery('.filter-content').show();
}

$(".car-select li").click(function () {
    $(this).addClass('active').siblings().removeClass('active');
});

$(".open-select").click(function () {
    $(this).parent().find(".selector-box, .selector-box-flight").addClass("show");
});

$(".setting a").click(function () {
    $(".setting-open").toggleClass("show");
});

$(".search-bar i").click(function () {
    $(".form-control-search").toggleClass("open");
});

// collection filter
$('.mobile-filter').on('click', function(e) {
    $('.left-sidebar, .top-filter-section').css("left","-1px");
});
$('.back-btn').on('click', function(e) {
    $('.left-sidebar, .top-filter-section').css("left","-365px");
});

$(".respon-filter-btn").click(function(){
    $(".respon-filter-content").toggleClass("show");
});

$(".view-map").click(function(){
    $(".onclick-map").toggleClass("show");
});

$(".popup-btn").click(function(){
    $(".sidebar-popup").toggleClass("open");
});

var width_content = jQuery(window).width();
if ((width_content) > '991') {

    $(".filter-bottom-title").click(function () {
        $(".filter-bottom-content").slideToggle("");
    });
    $(".close-filter-bottom").click(function () {
        $(".filter-bottom-content").slideUp("");
    });
}
else {
    $(".filter-bottom-title").click(function () {
        $(".filter-bottom-content").toggleClass("open");
    });
    $(".close-filter-bottom").click(function () {
        $(".filter-bottom-content").removeClass("open");
    });
}

// fare calender
  $(".fare-calender").click(function(){
    $(".calender-external").addClass("show");
});
$(".modify-search").click(function(){
    $(".flight-search-detail").addClass("show");
});
$(".responsive-close").click(function(){
    $(".flight-search-detail").removeClass("show");
});

// flight top filter
$(".onclick-title h6").click(function(){
    $(this).parent(".onclick-title").toggleClass("show").siblings().removeClass('show');
});

// round trip selection
$(".round_trip .detail-bar .detail-wrap").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// address select js
$(".address-sec .select-box").click(function(){
    $(this).addClass('active').siblings().removeClass('active');
});

// resturant menu smooth scroll
$('.order-menu .nav-pills a').bind('click', function(e) {
    e.preventDefault(); 

    var target = $(this).attr("href"); 
    $('html, body').stop().animate({
        scrollTop: $(target).offset().top
    }, 600, function() {
        location.hash = target; 
    });

    return false;
});

// change on select cab layout
$('input:radio[name=exampleRadios]').change(function() {
    if (this.value == 'option1') {
        document.getElementById('dropdate').style.display ='block';
    }
    else if (this.value == 'option2') {
        document.getElementById('dropdate').style.display ='none';
    }
});