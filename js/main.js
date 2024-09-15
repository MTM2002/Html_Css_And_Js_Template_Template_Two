let menu = document.getElementById("mobile-menu")
let links = document.querySelector(".navbar .navbar__container ul")
menu.addEventListener("click", e => {
    links.classList.toggle("active")
    document.querySelector("div.navbar__toggle").classList.toggle("is-active")
})
let servicesSection = document.querySelector(".services")
let footerSection = document.querySelector(".footer__container")
window.onload = function () {
    setTimeout(() => {
            document.querySelector(".main__content").style.left = 0
            document.querySelector(".main__img__container").style.transform = `translateX(0)`
    }, 100);
    window.onscroll = function () {
    let servicesoffsetTop = servicesSection.offsetTop;
    if (scrollY > servicesoffsetTop - 250) {
        document.querySelector(".services h1").style.right = 0
        document.querySelector(".services .services__container .services__card:first-of-type").style.left = 0
        document.querySelector(".services .services__container .services__card:nth-child(2)").style.right = 0

    } else {
        document.querySelector(".services h1").style.right = `-200%`
        document.querySelector(".services .services__container .services__card:first-of-type").style.left = `-200%`
        document.querySelector(".services .services__container .services__card:nth-child(2)").style.right = `-200%`
    }

    let footeroffsetTop = footerSection.offsetTop;
        if (scrollY > footeroffsetTop - 430) {
        document.querySelector(".footer__link__wrapper:first-of-type").style.left = 0
        document.querySelector(".footer__link__wrapper:last-of-type").style.right = 0
        document.querySelector(".footer__logo").style.left = 0
        document.querySelector(".social__icons").style.right = 0
    } else {
        document.querySelector(".footer__link__wrapper:first-of-type").style.left = `-200%`
        document.querySelector(".footer__link__wrapper:last-of-type").style.right = `-200%`
        document.querySelector(".footer__logo").style.left = `-200%`
        document.querySelector(".social__icons").style.right = `-200%`
    }
}
}
