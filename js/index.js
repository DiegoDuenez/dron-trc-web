

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {

    var currentScrollPos = window.pageYOffset;

    if(currentScrollPos > 50){


        if (prevScrollpos > currentScrollPos) {
            $('.navbar').css('top', '0').css('height', '4rem').css("padding", "0")
            $('.navbar').css('background-color', 'var(--negro)')
        } else {
            $('.navbar').css('top', '-250px')
            $('.navbar').css('background-color', 'var(--negro)')

        }

        prevScrollpos = currentScrollPos;
    }
    else{
        $('.navbar').css('height', '12rem').css("padding", "1rem 5rem").css("padding-top", "3rem")
        $('.navbar').css('background-color', 'transparent')

    }

}


$('#btnPlay').click(function(){
    $('body').css('overflow', 'hidden')
    $('.modal').fadeIn(500).css('display', 'flex')
})

$('#btnCloseModal').click(function(){
    $('body').css('overflow-y', 'scroll')
    $('.modal').fadeOut(500)
})