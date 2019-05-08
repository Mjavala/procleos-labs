let fadeOutText = document.getElementById('fadeOutText');
let ctaBtn = document.getElementById('ctaBtn');

// This is used for the onclick ctaBtn event.
// When users click on the CTA button.
// The CTA text fades out.
// The CTA button is also faded out.

// Then, the text entry field wrapper will be visible.
// The text entry field wrapper includes the text entry field and Send button.

// See fadeOut class styling inside the css/stylesheet.css
let textEntryFieldWrapper = document.getElementById('textEntryFieldWrapper');
// OnClick of the button.
ctaBtn.addEventListener('click', function() {
    fadeOutText.classList.add('fadeOut');
    ctaBtn.classList.add('fadeOut');

    textEntryFieldWrapper.style.visibility = "visible";
}, false);




let fadeOutText2Fadeout = document.getElementById('fadeOutText2');
let resendBtn = document.getElementById('resendBtn');

// This is used for the onclick resendBtn event.
// When users click on the Re-send form button.
// The text in 6 fades out.
// The Re-send form button is also faded out.

// Then, the text entry field wrapper will be visible.
// The text entry field wrapper includes the text entry field and Send button.

resendBtn.addEventListener('click', function() {
    fadeOutText2Fadeout.classList.add('fadeOut');
    resendBtn.classList.add('fadeOut');

    textEntryFieldWrapper.style.visibility = "visible";
}, false);
