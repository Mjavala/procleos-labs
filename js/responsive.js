/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/

function responsiveFrame() {
    let frameWrapper = document.querySelector('.frameWrapper');
    let second = document.querySelector('.second');

    let frameWrapperClientHeight = frameWrapper.clientHeight;
    let secondClientHeight = second.clientHeight;


    // Landscape screen.
    if (frameWrapperClientHeight >= secondClientHeight) {
        let diff = secondClientHeight - frameWrapperClientHeight;
        console.log(diff);
        frameWrapper.style.top = diff + 66 + 'px';

    } else {
        let third = document.querySelector('.third');
        let thirdClientHeight = third.clientHeight;

        // Portrait screen.
        let diff = secondClientHeight - frameWrapperClientHeight;

        // Fixed iPad Pro.
        if (thirdClientHeight > 450) {
            frameWrapper.style.top = diff + 80 + 'px';
        } else {
            frameWrapper.style.top = diff + 66 + 'px';
        }


    }
}

function responsiveFrameMobile() {
    let frameWrapperMobile = document.querySelector('.frameWrapperMobile');
    let second = document.querySelector('.second');
    diff = frameWrapperMobile.clientHeight - second.clientHeight;
    let third = document.querySelector('.third');
    frameWrapperMobile.style.top = -diff + 'px';
}



/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/
window.addEventListener('resize', responsiveFrame);
window.addEventListener('resize', responsiveFrameMobile);


window.onload = function() {
    responsiveFrame();
    responsiveFrameMobile();
};
