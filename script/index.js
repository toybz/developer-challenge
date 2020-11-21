$(".header__nav__item--dropdown").mouseover(function () {
    $(this).find(".drop-section").show()

})
    .mouseout(function () {
        $(this).find(".drop-section").hide()
    })

/*
$(".selected-country").click(function (){
    console.log("Select country click", this)
   // $(".footer__row").find(".dropdown").show()

})

$("body").click(function (){
    //if ()
    console.log("Select country click", this)
   // $(".footer__row").find(".dropdown").hide()
})*/

var  toggleIsClicked = false;
$(".toggler").click( function () {

  toggleIsClicked = !toggleIsClicked

    if(toggleIsClicked){
        $(".header__nav__list").css('opacity', 1)
        $(".header__nav__list").css('pointer-events', 'auto')

    }
    else{
        $(".header__nav__list").css('opacity', 0)
        $(".header__nav__list").css('pointer-events', 'none')

    }
})