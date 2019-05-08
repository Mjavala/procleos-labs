let laptopContent = document.getElementById('laptopContent');
let mobileContent = document.getElementById('mobileContent');

if (window.innerWidth <= 360) {
    // laptopContent.style.visibility = "hidden";
    // mobileContent.style.visibility = "visible";
    // laptopContent.setAttribute("viewBox", "0 0 360 640");

    laptopContent.style.display = "none";
    mobileContent.style.display = "block";
} else {
    laptopContent.style.display = "block";
    mobileContent.style.display = "none";
}


window.addEventListener('resize', function() {
    if (window.innerWidth <= 360) {
        laptopContent.style.display = "none";
        mobileContent.style.display = "block";
    } else {
        laptopContent.style.display = "block";
        mobileContent.style.display = "none";
    }
}, false);
