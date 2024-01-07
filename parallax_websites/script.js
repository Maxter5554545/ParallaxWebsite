
let text2 = document.getElementById("text2");
let sky = document.getElementById("sky");
let sun = document.getElementById("sun");
let Cloud1 = document.getElementById("cloud1")
let Cloud2 = document.getElementById("cloud2")
let Cloud3 = document.getElementById("cloud3")
let Hill1 = document.getElementById("hill1")
let Hill2 = document.getElementById("hill2")
let Hill3 = document.getElementById("hill3")

window.addEventListener('scroll', function(){
    console.log("scrolling")
    let scrollValue = window.scrollY
    console.log(scrollValue);

    text2.style.marginTop = scrollValue * 2.5 + 'px'
    sun.style.marginTop = scrollValue * 1.5 + 'px'
    Cloud1.style.marginLeft = scrollValue * -2.5 + 'px'; 
    Cloud2.style.marginTop = scrollValue * -2.5 + 'px';
    Cloud3.style.marginLeft = scrollValue * 2.5 + 'px';

})
