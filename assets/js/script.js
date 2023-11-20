// library animation
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
// end navbar


// pop up video
$("#ShowClip").click(function(){
    console.log('tes')
    if($('.clip').css("display") == "none"){
        $('.clip').show(100);
    }
    // $('.Clip').
});

$("#hideClip").click(function(){
    console.log('tes')
    if($('.clip').css("display") == "block"){
        $('.clip').hide();
    }
    // $('.Clip').
});


// Pop up Notification
function message(){
    var Name = document.getElementById('name');
    var email = document.getElementById('email');
    var msg = document.getElementById('msg');
    var popup = document.getElementById("alert")
    let warning = document.getElementById("warning-alert")

    if(Name.value === '' || email.value === '' || msg.value === ''){
        warning.classList.add("warning-popup")
    }
    else{
        popup.classList.add("open-popup")
    }
}

function closePopup(){
    window.location.reload()
}
// end pop up

const goTopBtn = document.querySelector('.back-to-top');

window.addEventListener('scroll', checkHeight)

function checkHeight(){
    if(window.scrollY > 300) {
        goTopBtn.style.display = "flex"
    } else {
        goTopBtn.style.display = "none"
    }
}

