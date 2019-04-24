let fadeOutText = document.getElementById('fadeOutText');
let rect = document.getElementById('Rectangle');
let yes = document.getElementById('Yes');


let textEntryField = document.getElementById('textEntryField');


// OnClick of the button.
rect.addEventListener('click', function() {


    fadeOutText.classList.add('fadeOut');
    rect.classList.add('fadeOut');
    yes.classList.add('fadeOut');

    textEntryField.style.visibility = "visible";



}, false);
