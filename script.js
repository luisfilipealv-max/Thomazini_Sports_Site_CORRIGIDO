document.addEventListener("DOMContentLoaded", () => {

    /* ==========================================
       HEADER
    ========================================== */

    const header = document.getElementById("header");

    if (header) {

        window.addEventListener("scroll", () => {

            header.classList.toggle(
                "scrolled",
                window.scrollY > 35
            );

        });

    }


    /* ==========================================
       MENU MOBILE
    ========================================== */

    const menuButton =
        document.getElementById("menuButton");

    const nav =
        document.getElementById("nav");


    if (menuButton && nav) {

        menuButton.addEventListener("click", () => {

            nav.classList.toggle("open");

        });


        const navLinks =
            nav.querySelectorAll("a");


        navLinks.forEach((link) => {

            link.addEventListener("click", () => {

                nav.classList.remove("open");

            });

        });

    }


    /* ==========================================
       ANIMAÇÕES AO ROLAR
    ========================================== */

    const revealElements =
        document.querySelectorAll(".reveal");


    if ("IntersectionObserver" in window) {

        const observer =
            new IntersectionObserver(
                (entries) => {

                    entries.forEach((entry) => {

                        if (entry.isIntersecting) {

                            entry.target.classList.add(
                                "visible"
                            );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    });

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach((element) => {

            observer.observe(element);

        });

    } else {

        revealElements.forEach((element) => {

            element.classList.add("visible");

        });

    }


    /* ==========================================
       COOKIES
    ========================================== */

    const banner =
        document.getElementById("cookieBanner");

    const cookieAccept =
        document.getElementById("cookieAccept");

    const cookieReject =
        document.getElementById("cookieReject");

    const cookieConfig =
        document.getElementById("cookieConfig");


    const COOKIE_KEY =
        "thomazini_cookie_choice";


    if (banner) {

        const choice =
            localStorage.getItem(COOKIE_KEY);


        /* Se já escolheu, esconde o banner */

        if (choice) {

            banner.classList.add("hide");

        }


        /* ACEITAR */

        if (cookieAccept) {

            cookieAccept.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        COOKIE_KEY,
                        "accepted"
                    );

                    banner.classList.add("hide");

                }
            );

        }


        /* RECUSAR */

        if (cookieReject) {

            cookieReject.addEventListener(
                "click",
                () => {

                    localStorage.setItem(
                        COOKIE_KEY,
                        "rejected"
                    );

                    banner.classList.add("hide");

                }
            );

        }


        /* CONFIGURAR */

        if (cookieConfig) {

            cookieConfig.addEventListener(
                "click",
                () => {

                    alert(
                        "Este site utiliza somente recursos essenciais neste momento. Cookies não essenciais devem ser ativados somente com consentimento."
                    );

                }
            );

        }

    }


    /* ==========================================
       POLÍTICA DE PRIVACIDADE
    ========================================== */

    const modal =
        document.getElementById("privacyModal");

    const privacyOpen =
        document.getElementById("privacyOpen");

    const privacyClose =
        document.getElementById("privacyClose");


    /* Abrir */

    if (privacyOpen && modal) {

        privacyOpen.addEventListener(
            "click",
            () => {

                modal.classList.add("show");

                document.body.style.overflow =
                    "hidden";

            }
        );

    }


    /* Fechar pelo X */

    if (privacyClose && modal) {

        privacyClose.addEventListener(
            "click",
            () => {

                modal.classList.remove("show");

                document.body.style.overflow =
                    "";

            }
        );

    }


    /* Fechar clicando fora */

    if (modal) {

        modal.addEventListener(
            "click",
            (event) => {

                if (event.target === modal) {

                    modal.classList.remove("show");

                    document.body.style.overflow =
                        "";

                }

            }
        );

    }


    /* ==========================================
       ESC PARA FECHAR MODAL
    ========================================== */

    document.addEventListener(
        "keydown",
        (event) => {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("show")
            ) {

                modal.classList.remove("show");

                document.body.style.overflow =
                    "";

            }

        }
    );


});