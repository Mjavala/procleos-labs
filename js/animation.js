let fadeOutText = document.getElementById('fadeOutText');
let ctaBtn = document.getElementById('ctaBtn');


let textEntryFieldWrapper = document.getElementById('textEntryFieldWrapper');
// OnClick of the button.
ctaBtn.addEventListener('click', function() {
    fadeOutText.classList.add('fadeOut');
    ctaBtn.classList.add('fadeOut');

    textEntryFieldWrapper.style.visibility = "visible";
}, false);
