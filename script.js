/* ================================
   MOBILE MENU
================================ */

const menuButton =
    document.getElementById("menu-button");

const navMenu =
    document.getElementById("nav-menu");


menuButton.addEventListener("click", () => {

    navMenu.classList.toggle("show");

});


/* Close menu */

document.querySelectorAll(".nav-link")
    .forEach(link => {

        link.addEventListener("click", () => {

            navMenu.classList.remove("show");

        });

    });



/* ================================
   TYPING ANIMATION
================================ */

const typing =
    document.getElementById("typing");


const roles = [

    "IT Enthusiast",

    "Web Developer",

    "Problem Solver",

    "Technology Learner"

];


let roleIndex = 0;

let characterIndex = 0;

let deleting = false;


function typeEffect() {

    const currentRole =
        roles[roleIndex];


    if (!deleting) {

        typing.textContent =
            currentRole.substring(
                0,
                characterIndex + 1
            );

        characterIndex++;


        if (
            characterIndex ===
            currentRole.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1400
            );

            return;

        }

    }

    else {

        typing.textContent =
            currentRole.substring(
                0,
                characterIndex - 1
            );

        characterIndex--;


        if (characterIndex === 0) {

            deleting = false;

            roleIndex++;

            if (
                roleIndex ===
                roles.length
            ) {

                roleIndex = 0;

            }

        }

    }


    setTimeout(

        typeEffect,

        deleting ? 50 : 90

    );

}


typeEffect();



/* ================================
   PROJECT FILTER
================================ */








/* ================================
   DARK / LIGHT MODE
================================ */

const themeButton =
    document.getElementById("theme-toggle");


themeButton.addEventListener("click", () => {

    document.body.classList.toggle(
        "light-mode"
    );


    const icon =
        themeButton.querySelector("i");


    if (
        document.body.classList.contains(
            "light-mode"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    }

    else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

    }

});



/* ================================
   ACTIVE NAVIGATION
================================ */

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    () => {

        let current = "";


        sections.forEach(section => {

            const sectionTop =
                section.offsetTop - 150;


            if (
                window.scrollY >=
                sectionTop
            ) {

                current =
                    section.getAttribute(
                        "id"
                    );

            }

        });


        navLinks.forEach(link => {

            link.classList.remove(
                "active"
            );


            if (
                link.getAttribute("href") ===
                "#" + current
            ) {

                link.classList.add(
                    "active"
                );

            }

        });

    }
);