var MobileNavAnimation;
var isMobileNavOpen = false;
var mobileNavButton = document.querySelector('.ad-header-mobile-button');

mobileNavButton.addEventListener('click', handleMobileNavClick, false);
document.addEventListener('click', closeMobileNav, false);

function handleMobileNavClick(e) {
    e.stopPropagation();

    if (!isMobileNavOpen) {
        MobileNavAnimation = new TimelineLite({onComplete: ()=>(isMobileNavOpen = !isMobileNavOpen)});

        MobileNavAnimation
            .to(
                ".ad-header__nav",
                0.25, {
                    autoAlpha: 1,
                    x: 0,
                    ease: Power4.ease
                }
            )
            .staggerTo(
                ".ad-header__nav__link",
                0.2, {
                    autoAlpha: 1,
                    x: 0,
                    ease: Power4.ease
                },
                0.1,
                0.1
            );
    }
}

function closeMobileNav() {
    if(isMobileNavOpen) {
        isMobileNavOpen = false;
        MobileNavAnimation.timeScale(1.2).reverse();
    }
}
