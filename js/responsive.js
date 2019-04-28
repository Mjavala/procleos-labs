let textEntryFieldWrapper = document.getElementById('textEntryFieldWrapper');

// Reponsive text entry field.
function getCoords(elem) {
    let box = elem.getBoundingClientRect();

    return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset
    };
}

function setTop(elem, topValue) {
    elem.style.top = topValue + pageYOffset + "px";
}

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
