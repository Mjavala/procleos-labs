# coming-soon-page
## Documentation.
GitHub repository: https://github.com/doxuan994/coming-soon-page/tree/gh-pages
Link to GitHub.io: https://doxuan994.github.io/coming-soon-page/index.html


### Copyright.
Do not use any SVGs in this GitHub repository.
This is private property belong to Procleos Labs Coming Soon Page (Apollo DAE).



### Objective.
1. Completed responsive website in Vanilla JS, CSS & HTML.
2. Email capture functionality.



### Description.
SVG responsive website using 2 separately HTML in the same index.html.
One is used for DESKTOP & Table screen and one is used for MOBILE screen (See js/script.js for more details).


I USED INLINE SVG FOR RESPONSIVE WEBSITE!
Forms is not included in the SVG so for its responsive, check out the js/responsive.js and css/stylesheet.css.  
Also, https://formspree.io/ used to send the email from the user (Still working on this one).



### Website File Structure.
1. coming-soon-page
    - css
        - stylesheet.css
    - img
    - js
        - animation.js
        - responsive.js
        - script.js
        - userAnimation.js
    - playaround-fail
    - index.html
    - README.md



### OnCompleted

This website is responsive with both DESKTOP & TABLET and MOBILE.
The responsive is quite nice but it is still needed more update.


#### What have done in the DESKTOP & TABLET screen.

2. Animated call to action (CTA) text: Want a cool logo, video, website, or app?
    - Text animation begins 0.5s after page loads (Animation Style: typewriter).
        - Text animation is made by using SMIL Animation in SVG (See more examples: http://apike.ca/prog_svg_smil.html).
            - Used fill="freeze" so the text animation is only done one time and it keeps the final state of the animation.
            - The text animation has duration of 4 seconds.

3. Animated CTA button below CTA text.
    - Button animates to view 0.25s after CTA text animation is complete.
        - CTA button animation is made by using SMIL Animation.
            - Used fill="freeze" so the text animation is only done one time and it keeps the final state of the animation.
            - The CTA button animation has duration of 2 seconds.
            - Additionally, fade in effect is added using attributeName="opacity" values="0;1".

4. OnClick of the CTA button (See js/animation.js for more details).
    - The CTA text fades out.
    - The CTA button fades out.
    - The CTA button animates to a text entry field (with prompts), with progress bar as a thickened bottom border of the text entry field.

5. After the user types their email, the send button appears below the text entry field, to the right (See js/userAnimation.js for more details).



#### What have done in the MOBILE screen.

2. Animated call to action (CTA) text: Want a cool logo, video, website, or app?
    - Text animation begins 0.5s after page loads (Animation Style: typewriter).
        - Text animation is made by using SMIL Animation in SVG (See more examples: http://apike.ca/prog_svg_smil.html).


#### Different between the DESKTOP & TABLET screen vs the MOBILE screen.
2. Animated call to action (CTA) text.
    - The DESKTOP & TABLET screen: animate one textPath.
        - textPath has the following styling attribute.
            - font-size="42"
            - font-family="Arial"
            - fill="white"
    - The MOBILE screen: animate two textPath.
        - textPath has the following styling attribute.
            - font-size="19"
            - font-family="Arial"
            - fill="white"
            - font-weight="bold"

3. Animated CTA button below CTA text currently works on only DESKTOP & TABLET screen.
4. OnClick of the CTA button currently works on only DESKTOP & TABLET screen.
5. After the user types their email, the send button appears below the text entry field, to the right currently works on only DESKTOP & TABLET screen.





### OnProcess (Not started yet!)
1. Static SVG of robot parts.
