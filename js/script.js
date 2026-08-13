/*==================================================
LOADER
==================================================*/

window.addEventListener("load", () => {

    const loader = document.querySelector("#loader")

    if (loader) {

        setTimeout(() => {

            loader.classList.add("hide")

        }, 1000)

    }

})


/*==================================================
CURSOR PERSONALIZADO
==================================================*/

const cursor = document.createElement("div")
cursor.classList.add("cursor")
document.body.appendChild(cursor)

const cursorBlur = document.createElement("div")
cursorBlur.classList.add("cursor-blur")
document.body.appendChild(cursorBlur)

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

    cursorBlur.style.left = e.clientX + "px"
    cursorBlur.style.top = e.clientY + "px"

})


document.querySelectorAll("a, button, .service-card, .vehicle-card, .advantage-card").forEach(el => {

    el.addEventListener("mouseenter", () => {
        cursor.classList.add("active")
    })

    el.addEventListener("mouseleave", () => {
        cursor.classList.remove("active")
    })

})


/*==================================================
NAVBAR SCROLL
==================================================*/

const header = document.querySelector("#header")

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("scrolled")
    } else {
        header.classList.remove("scrolled")
    }

})


/*==================================================
SCROLL REVEAL
==================================================*/

const revealElements = document.querySelectorAll(".reveal")

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show")

        }

    })

}, {

    threshold: 0.15

})

revealElements.forEach(el => revealObserver.observe(el))


/*==================================================
COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter")

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            const el = entry.target

            const target = +el.getAttribute("data-target")

            let count = 0

            const speed = target / 80

            const update = () => {

                count += speed

                if (count < target) {

                    el.textContent = Math.floor(count)

                    requestAnimationFrame(update)

                } else {

                    el.textContent = target

                }

            }

            update()

            counterObserver.unobserve(el)

        }

    });

}, {

    threshold: 0.6

});

counters.forEach(counter => counterObserver.observe(counter))


/*==================================================
SMOOTH SCROLL (MENU)
==================================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault()

        const target = document.querySelector(this.getAttribute("href"))

        if (target) {

            window.scrollTo({

                top: target.offsetTop - 80,

                behavior: "smooth"

            })

        }

    })

})


/*==================================================
MENU MOBILE (BÁSICO)
==================================================*/

const menuBtn = document.querySelector(".menu-mobile")
const menu = document.querySelector(".menu")

if (menuBtn && menu) {

    menuBtn.addEventListener("click", () => {

        menu.classList.toggle("active")

    })

}


/*==================================================
EFEITO SUAVE NAS SEÇÕES (PARALLAX LEVE)
==================================================*/

window.addEventListener("scroll", () => {

    const scrollY = window.scrollY

    document.querySelectorAll(".hero, .quote").forEach(section => {

        section.style.transform = `translateY(${scrollY * 0.02}px)`

    })
})