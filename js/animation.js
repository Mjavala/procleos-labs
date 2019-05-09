// This is used for the onclick ctaBtn event.
// When users click on the CTA button.
// The CTA text fades out.
// The CTA button is also faded out.

// Then the form will be displayed.
function formAppear() {
    let ctaTxtWrapper = document.getElementById('ctaTxtWrapper');
    let ctaBtnWrapper = document.getElementById('ctaBtnWrapper');
    let ctaBtn = document.getElementById('ctaBtn');
    let emailForm = document.getElementById('emailForm');

    ctaBtn.addEventListener('click', function() {
        ctaTxtWrapper.classList.add('fadeOut');
        ctaBtnWrapper.classList.add('fadeOut');
        emailForm.style.display = 'flex';
    }, false);
}

// After the user types their email, the send button appears below the text entry field, to the right.
function userTypeEmail() {
    let txtEntryFieldWrapper = document.getElementById('txtEntryFieldWrapper');
    let txtEntryField = document.getElementById('txtEntryField');
    let sendBtn = document.getElementById('sendBtn');
    txtEntryField.addEventListener('keyup', function() {
        if (txtEntryField.value !== "") {
            txtEntryFieldWrapper.classList.add('txtEntryFieldWrapper');
            txtEntryField.classList.add('txtEntryField');
            sendBtn.style.display = 'block';
        } else {
            txtEntryFieldWrapper.classList.remove('txtEntryFieldWrapper');
            txtEntryField.classList.remove('txtEntryField');
            sendBtn.style.display = 'none';
        }
    }, false);
}
let windowInnerWidth = window.innerWidth;
if (windowInnerWidth > 768) {
    formAppear();
    userTypeEmail();
} else {
    emailForm.style.display = 'block';
}
window.addEventListener('resize', function() {
    windowInnerWidth = window.innerWidth;
    if (windowInnerWidth > 768) {
        formAppear();
        userTypeEmail();
    } else {
        emailForm.style.display = 'block';
    }
});
