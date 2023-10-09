AOS.init();

// navbar
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > navbar.offsetTop) {
        navbar.classList.add("sticky");
    } else {
        navbar.classList.remove("sticky");
    }
});     


// pop up video
$("#ShowClip").click(function(){
    console.log('tes')
    if($('.clip').css("display") == "none"){
        $('.clip').show(100);
    }
    // $('.Clip').
});
// end navbar
$("#hideClip").click(function(){
    console.log('tes')
    if($('.clip').css("display") == "block"){
        $('.clip').hide();
    }
    // $('.Clip').
});
