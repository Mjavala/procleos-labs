let secondTextEntryFieldWrapper = document.getElementById('secondTextEntryFieldWrapper');
let secondTextEntryField = document.getElementById('secondTextEntryField');
let secondSendBtn = document.getElementById('secondSendBtn');

// After the user types their email, the send button appears below the text entry field, to the right.

secondTextEntryField.addEventListener('keyup', function() {
    if (secondTextEntryField.value !== "") {
        secondTextEntryFieldWrapper.classList.add('secondTextEntryFieldWrapper');
        secondTextEntryField.classList.add('secondTextEntryField');
        secondSendBtn.style.display = "block";
    } else {
        secondTextEntryFieldWrapper.classList.remove('secondTextEntryFieldWrapper');
        secondTextEntryField.classList.remove('secondTextEntryField');
        secondSendBtn.style.display = "none";
    }
}, false);
