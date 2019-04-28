// Reponsive text entry field.


// Set the top of the selected element to (the given top value + pageYOffset).
function setTop(elem, topValue) {
    elem.style.top = topValue + pageYOffset + "px";
}

// Set the width value of the selected element to the given width value.
function setWidth(elem, widthValue) {
    elem.style.width = widthValue + "px";
}


setTop(textEntryFieldWrapper, rect.getBoundingClientRect().top);
if (window.innerWidth < 1536) {
    setWidth(textEntryFieldWrapper, 640 - ((1536 - window.innerWidth) / 3));
}
window.addEventListener('resize', function() {
    setTop(textEntryFieldWrapper, rect.getBoundingClientRect().top);

    if (window.innerWidth < 1536) {
        setWidth(textEntryFieldWrapper, 640 - ((1536 - window.innerWidth) / 3));
    }

}, false);
