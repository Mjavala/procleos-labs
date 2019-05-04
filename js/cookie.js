let emailForm = document.getElementById('emailForm');
console.log(emailForm);


let fadeOutTextCookie = document.getElementById('fadeOutText');
let ctaBtnCookie = document.getElementById('ctaBtn');

// emailForm.addEventListener('submit', function(e) {
//
//     e.preventDefault();
//
//
//     document.cookie = 'name=sent';
//
//
// }, false);
//


function WriteCookie() {
    document.cookie = "name=cookievalue";
}
