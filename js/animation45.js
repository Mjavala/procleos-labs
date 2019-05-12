/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/




/*
 * This is used for the onclick ctaBtn event.
 * When users click on the CTA button.
 * The CTA text fades out (Text in 6 also fade outs if users hit the Re-send form).
 * The CTA button is also faded out.
 *
 * Then the form will be displayed.
 */
function formAppear(windowInnerWidth) {
    let ctaTxtWrapper   = document.getElementById('ctaTxtWrapper');
    let ctaBtnWrapper   = document.getElementById('ctaBtnWrapper');
    let ctaBtn          = document.getElementById('ctaBtn');
    let emailForm       = document.getElementById('emailForm');

    let txtIn6          = document.getElementById('txtIn6');

    // Initially, form are not shown, so show it for the first time When
    // users on click CTA button.
    if (emailForm.style.display == '') {
        ctaBtn.addEventListener('click', function() {
            ctaTxtWrapper.classList.add('fadeOut');
            ctaBtnWrapper.classList.add('fadeOut');
            txtIn6.classList.add('fadeOut');
            adjustFormAppear(windowInnerWidth);
        }, false);
    } else {
        // After that, only adjust the form display to match the correct screen size.
        adjustFormAppear(windowInnerWidth);
    }
}





/*
 * adjust the correct display for form between big and small screen.
 *
 */
function adjustFormAppear(windowInnerWidth) {
    // Screen higher than 768
    if (windowInnerWidth > 768) {
        emailForm.style.display = 'flex';
    } else { // Mobile screen and lesser or equal 768
        emailForm.style.display = 'block';
    }
}








/*
 * After the user types their email,
 * the send button appears below the text entry field, to the right.
 */
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










/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/

// Number 4
// OnClick of the CTA button (See js/animation.js for more details).

// The CTA text fades out.
// The CTA button fades out.
// The CTA button animates to a text entry field (with prompts),
// with progress bar as a thickened bottom border of the text entry field.

let windowInnerWidth = window.innerWidth;
formAppear(windowInnerWidth);

window.addEventListener('resize', function() {
    windowInnerWidth = window.innerWidth;
    formAppear(windowInnerWidth);
});


// Number 5
// After the user types their email,
// the send button appears below the text entry field, to the right.
userTypeEmail();
