/*******************************************************************************
*
*                               FUNCTIONS
*
*******************************************************************************/

function responsiveFrame() {
    let frameWrapper = document.querySelector('.frameWrapper');
    let second = document.querySelector('.second');
    diff = frameWrapper.clientHeight - second.clientHeight
    frameWrapper.style.top = -diff + 64 + 'px';
}

function responsiveFrameMobile() {
    let frameWrapperMobile = document.querySelector('.frameWrapperMobile');
    let second = document.querySelector('.second');
    diff = frameWrapperMobile.clientHeight - second.clientHeight;
    let third = document.querySelector('.third');
    frameWrapperMobile.style.top = -diff + 26 + 'px';
}



/*******************************************************************************
*
*                          JavaScript FUNCTION CALLS
*
*******************************************************************************/
responsiveFrame();
window.addEventListener('resize', responsiveFrame);

responsiveFrameMobile();
window.addEventListener('resize', responsiveFrameMobile);
