
var nav1 = $("#head1").offset().top
$(window).scroll(function(){
    var wScrol = $(window).scrollTop()
    if(wScrol > 100){
        $("#head2").slideDown(400)
        $("#head2").css("display","block")
    
        console.log("ghnfg")
        }
    else {
         $("#head2").slideUp(400)
        
        
           

                console.log("hccghf")

    }
})


/*
var head = document.getElementById("head2")
var sticky = head.offsetTop;
var h = window.innerHeight;
window.onscroll = function(){scrolling()}
var pix = 80;

function scrolling(){
    if(window.pageYOffset >= sticky){
        head.style.display = block;
        head.classList.add("sticky")
        console.log("52734dfjk")
    }
    else {
        console.log("hkjhgd")
        head.classList.add("dis")
        head.classList.remove("sticky")
    }
}*/