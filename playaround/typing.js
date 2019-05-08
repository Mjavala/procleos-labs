window.onload = function() {
    let windowInnerWidth = window.innerWidth;
    let isSecondLine = false;
    let textArray = ["Want a cool logo, video,|website or app?", "Want a cool logo, video, website or app?"];
    let i = 0;


    function typeWriter(inputArray) {
        let firstline = document.querySelector('.firstline');
        let secondline = document.querySelector('.secondline');

        if (windowInnerWidth <= 768) {
            let aString = inputArray[0];

            // If full string hasn't yet been typed out, continue typing.
            if (i < aString.length) { // console.log(aString.length); // 40
                // If a character about to be typed is a pine, switch to
                // second line and continue.
                if (aString.charAt(i) == "|") {
                    isSecondLine = true;

                    firstline.classList.remove("cursor");
                    secondline.classList.add("cursor");

                    i++;
                    setTimeout(function() {
                        typeWriter(inputArray);
                    }, 1000);
                    // If a character is not a pipe, continue typing.
                } else {

                    // We are still in first line.
                    if (!isSecondLine) {
                        firstline.innerText = firstline.innerText + aString.charAt(i);
                    } else {
                        secondline.innerText = secondline.innerText + aString.charAt(i);
                    }

                    i++;
                    setTimeout(function() {
                        typeWriter(inputArray);
                    }, 100);
                }
            }
        } else {
            let aString = inputArray[1];

            // If full string hasn't yet been typed out, continue typing.
            if (i < aString.length) { // console.log(aString.length); // 40
                firstline.innerText = firstline.innerText + aString.charAt(i);
            }
            i++;
            setTimeout(function() {
                typeWriter(inputArray);
            }, 100);
        }
    }


    // Run the loop.
    typeWriter(textArray);

    window.addEventListener('resize', function() {
        windowInnerWidth = window.innerWidth;
        console.log(windowInnerWidth);
        // Run the loop.
        typeWriter(textArray);
    }, false);
};
