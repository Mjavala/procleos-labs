let fadeOutText = document.getElementById('fadeOutText');
let ctaBtn = document.getElementById('ctaBtn');

// This is used for the onclick ctaBtn event.
// When users click on the CTA button.
// The CTA text fades out.
// The CTA buttonis also faded out.

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
