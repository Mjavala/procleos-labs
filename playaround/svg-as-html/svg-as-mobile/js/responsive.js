// Reponsive text entry field.
// Instead of using the ctaBtn as the indicate for positing text entry field.
// I am using the SVG Rectangle because the when I grouped SVG Rectangle and
// SVG Yes the CSS for ctaBtn does not come out right.
let rect = document.getElementById('Rectangle');
let textEntryFieldWrapperRes = document.getElementById('textEntryFieldWrapper');

// Set the top of the selected element to (the given top value + pageYOffset).
function setTop(elem, topValue) {
    elem.style.top = topValue + pageYOffset + "px";
}

// Call setTop to put the textEntryFieldWrapper to the correct position,
// it would overlay the CTA button (Yes).
// (Normally, without these codes, the CTA button is above and
// the textEntryFieldWrapper is at the bottom separately).
// Make sure to add the (position: absolute) to the CSS of textEntryFieldWrapper.

// You can see here, as I said I used the SVG Rectangle top value to set the
// top value for the text entry field.
// So, they will always have the same top value (position: absolute mentioned above).
// top – Y-coordinate for the top element edge.
// See more: https://javascript.info/coordinates
setTop(textEntryFieldWrapperRes, rect.getBoundingClientRect().top);
// When users resize the window, reapply the setTop.
window.addEventListener('resize', function() {
    setTop(textEntryFieldWrapperRes, rect.getBoundingClientRect().top);
}, false);




// Tried to use JS for automatically resizing width of the text entry field but
// it does not come out right so I used CSS for this task.
// See stylesheet.css for more details.

// Set the width value of the selected element to the given width value.
// function setWidth(elem, widthValue) {
//     elem.style.width = widthValue + "px";
// }
// if (window.innerWidth < 1536) {
//     setWidth(textEntryFieldWrapperRes, 640 - ((1536 - window.innerWidth) / 3));
// }
// window.addEventListener('resize', function() {
//     if (window.innerWidth < 1536) {
//         setWidth(textEntryFieldWrapperRes, 640 - ((1536 - window.innerWidth) / 3));
//     }
// }, false);
