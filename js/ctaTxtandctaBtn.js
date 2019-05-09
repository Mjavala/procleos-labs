window.onload = function() {
    /*
     * Animated call to action (CTA) text: Want a cool logo, video, website, or app?
     */
    let textArray = ["Want a cool logo, video, website or app?"];
    let i = 0;
    function typeWriter(inputArray) {

        let cursor = document.querySelector('.cursor');
        cursor.style.display = 'inline-block';

        let firstline = document.querySelector('.firstline');
        let aString = inputArray[0];

        // If full string hasn't yet been typed out, continue typing.
        if (i < aString.length) {
            firstline.innerText = firstline.innerText + aString.charAt(i);
        }
        i++;

        // Duration of 4s.
        setTimeout(typeWriter, 100, inputArray);
    }
    // Run the loop after 0.5s delay.
    setTimeout(typeWriter, 500, textArray);


    /*
     * Button animates to view 0.25s after CTA text animation is complete.
     */
    function addCtaBtn() {
        let ctaBtn = document.getElementById('ctaBtn');
        ctaBtn.style.display = 'block';
    }
    // Run the addCtaBtn function after 0.25s delay.
    setTimeout(addCtaBtn, 4250);
};
