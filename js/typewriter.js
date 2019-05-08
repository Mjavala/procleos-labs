window.onload = function() {
    let textArray = ["Want a cool logo, video, website or app?"];
    let i = 0;

    function typeWriter(inputArray) {
        let firstline = document.querySelector('.firstline');
        let aString = inputArray[0];

        // If full string hasn't yet been typed out, continue typing.
        if (i < aString.length) { 
            firstline.innerText = firstline.innerText + aString.charAt(i);
        }
        i++;
        setTimeout(function() {
            typeWriter(inputArray);
        }, 100);
    }

    // Run the loop.
    typeWriter(textArray);
};
