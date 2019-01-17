// HOVERING NAVBAR


$('.nav-item').mouseenter(function() {
 // alert('sdasdasdsds');
  $(this).toggleClass('nav-highlighted');
  $(this).find('#nav-text-id').css({'color':'rgb(0,0,0)','transition':'color 1s'});
});

$('.nav-item').mouseleave(function() {
    $(this).toggleClass('nav-highlighted');
    $(this).find('#nav-text-id').css({'color':'rgb(140,140,140)','transition':'color 1s'});
  // $(this).find('.nav-link').css({'color':'black'});
});


// Decides if image or text brand should be shown based on whether the navbar is collapsed or not

resize_actionlist=function() {
  if ( ($('.navbar-toggler').css('display'))=='block' ){
    $('.name-logo').css({'display':'none'});
    $('.navbar-brand').css({'display':'block'});
    $('.navbar-brand').css({'display':'block'});

  }else if ( ($('.navbar-toggler').css('display'))=='none' ) {
    $('.name-logo').css({'display':'block'});
    $('.navbar-brand').css({'display':'none'});
  }



};

window_scroll=function(){

 scroll_pixel=$(document).scrollTop()

  if (scroll_pixel>25) {
        $('header').addClass('header-height-change');
        $('header img').addClass('img-height-change');
        $('header span').addClass('span-height-change');
        $('header a').eq(1).addClass('a-height-change');
        $('header a').eq(1).removeClass('a-height-normal');
  }else {
        $('header').removeClass('header-height-change');
        $('header img').removeClass('img-height-change');
        $('header span').removeClass('span-height-change');
        $('header a').eq(1).removeClass('a-height-change');
        $('header a').eq(1).addClass('a-height-normal');
  }
}

tooltip_init=function () {
  $('[data-toggle="tooltip"]').tooltip()
}

scroll_animation= function(){
  console.log($(this).index('.link-to-section'));
  var scroll_top=$(".section").eq($(this).index('.link-to-section')).offset().top - $('.whole-nav-div').height()-20;
  $("html, body").animate({ scrollTop: scroll_top }, 500);
}

//  Main Sub
resize_actionlist();
window_scroll();
$( window ).resize(resize_actionlist);
$( window ).scroll(window_scroll);
$(".link-to-section").click(scroll_animation)
