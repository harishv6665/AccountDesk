var MobileNavAnimation;
var isMobileNavOpen = false;
var mobileNavButton = document.querySelector('.ad-header-mobile-button');
var pageHeader = document.querySelector('.ad-header');
var windowHeight = window.outerHeight;

mobileNavButton.addEventListener('click', handleMobileNavClick, false);
document.addEventListener('click', closeMobileNav, false);
document.addEventListener('scroll', handleDocumentScroll, false);

function hasClass(el, className) {
  if (el.classList)
    return el.classList.contains(className)
  else
    return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
}

function addClass(el, className) {
  if (el.classList)
    el.classList.add(className)
  else if (!hasClass(el, className)) el.className += " " + className
}

function removeClass(el, className) {
  if (el.classList)
    el.classList.remove(className)
  else if (hasClass(el, className)) {
    var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
    el.className=el.className.replace(reg, ' ')
  }
}

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

function handleDocumentScroll() {
    if(window.pageYOffset > 300) {
        addClass(pageHeader, "fixed-header");
        if(window.pageYOffset > windowHeight) {
            addClass(pageHeader, "slide-in");
        } else {
            removeClass(pageHeader, "slide-in");
        }
    } else {
        removeClass(pageHeader, "fixed-header");
    }
}
