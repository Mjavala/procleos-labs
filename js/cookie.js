let emailForm = document.getElementById('emailForm');


let fadeOutTextCookie = document.getElementById('fadeOutText');
let ctaBtnCookie = document.getElementById('ctaBtn');

let fadeOutText2 = document.getElementById('fadeOutText2');


function setCookies(cname, value) {
    document.cookie = cname + "=" + value;
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}


emailForm.addEventListener('submit', function() {
    if (typeof(localStorage.sent) == "undefined") {
        localStorage.sent = 1;
        // document.cookie = "sent=" + localStorage.sent;
        let value = localStorage.sent;
        setCookies('sent', value);
    } else {
        // document.cookie = "sent=" + localStorage.sent;
        localStorage.sent++
        let value = localStorage.sent;
        setCookies('sent', value);
    }
}, false);


function textIn6Appear() {
    if (getCookie('sent') >= 1) {
        fadeOutTextCookie.style.display = 'none';
        ctaBtnCookie.style.display = 'none';
        fadeOutText2.style.display = "block";
    }
}
window.onload = function() {
    textIn6Appear();
};
