// nav bar change color when scroll down
let scrollOffset = $('#about').offset().top;
$(window).scroll(function(){
    let windowScroll = $(window).scrollTop();
    if(windowScroll > scrollOffset -100){
        $('.navbar').css('background-color' , 'rgba(0,0,0,0.8)')
        $('.navbar').css('padding' , '10px')
        $('#btnUp').fadeIn()
    }else{
        $('.navbar').css('background-color' , 'transparent')
        $('.navbar').css('padding' , '0')
        $('#btnUp').fadeOut()
    }
})

// move from the section to others
$("a[href^='#']").click(function(e){
    let scrollHref = $(e.target).attr('href')
    let hrefOffset = $(scrollHref).offset().top;
    console.log(hrefOffset)
    $('html,body').animate({scrollTop:hrefOffset}, 100)
})

// scroll top button
$('#btnUp').click(function(){
    $('html,body').animate({scrollTop:0},150)
})

// Spinner till the page is ready
$(document).ready(function(){
    $('.spin .spinner').fadeOut(500 , function(){
        $('.spin').fadeOut(500 , function(){
            $('.spin').remove()
            $('body').css('overflow' , 'auto')
        })
    })
})
