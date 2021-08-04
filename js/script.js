$(".search").click(function()
{
    $("#search-part").slideDown()
})
$(".close").click(function()
{
    $("#search-part").slideUp()
})

$(".btt").click(function()
{
    $("html,body").animate({
        scrollTop:0
    },1000)
})


$(window).scroll(function(){
    if((window).scrollTop()>200){
        $(".menu").addClass("test")
    }else{
        $(".menu").removeClass("test")
    }
})

$('.venobox').venobox();

