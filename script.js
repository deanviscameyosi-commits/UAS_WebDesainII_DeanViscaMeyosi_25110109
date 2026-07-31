
/* ==========================================
   JAVASCRIPT
   Company Profile - Famys Hijab
========================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ======================================
       SPA (Single Page Application)
    ====================================== */

    const pages = document.querySelectorAll(".page");

    function pindahHalaman(id) {

        pages.forEach(function (page) {
            page.classList.remove("active");
        });

        const tujuan = document.getElementById(id);

        if (tujuan) {
            tujuan.classList.add("active");
            window.scrollTo({
                top: 0,
                behavior: "smooth"
            });
        }

        // Menutup navbar pada tampilan HP
        $(".navbar-collapse").collapse("hide");

    }

    // Tombol yang memiliki data-page
    document.querySelectorAll("[data-page]").forEach(function (item) {

        item.addEventListener("click", function (e) {

            e.preventDefault();

            const tujuan = this.getAttribute("data-page");

            pindahHalaman(tujuan);

        });

    });

    // Halaman pertama
    pindahHalaman("home");


    /* ======================================
       TOOLTIP
    ====================================== */

    $('[data-toggle="tooltip"]').tooltip();


    /* ======================================
       POPOVER
    ====================================== */

    $('[data-toggle="popover"]').popover({
        trigger: "click",
        placement: "top"
    });


    /* ======================================
       MODAL
    ====================================== */

    $('#modalProduk').on('shown.bs.modal', function () {

        console.log("Modal dibuka");

    });


    $('#modalProduk').on('hidden.bs.modal', function () {

        console.log("Modal ditutup");

    });


    /* ======================================
       BUTTON LOADING
    ====================================== */

    const form = document.getElementById("formKontak");

    const btn = document.getElementById("btnKirim");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            btn.disabled = true;

            btn.innerHTML =
                '<span class="spinner-border spinner-border-sm"></span> Mengirim...';

            setTimeout(function () {

                btn.disabled = false;

                btn.innerHTML = "Kirim Pesan";

                alert("Pesan berhasil dikirim.");

                form.reset();

            }, 2000);

        });

    }


    /* ======================================
       ALERT JAM OPERASIONAL
    ====================================== */

    console.log("Website Famys Hijab berhasil dijalankan.");


    /* ======================================
       SMOOTH SCROLL
    ====================================== */

    document.querySelectorAll("a[href^='#']").forEach(function (link) {

        link.addEventListener("click", function (e) {

            const tujuan = document.querySelector(this.getAttribute("null"));

            if (tujuan) {

                e.preventDefault();

                tujuan.scrollIntoView({
                    behavior: "smooth"
                });

            }

        });

    });


    /* ======================================
       AKTIFKAN MENU NAVBAR
    ====================================== */

    const menu = document.querySelectorAll(".navbar-nav .nav-link");

    menu.forEach(function (nav) {

        nav.addEventListener("click", function () {

            menu.forEach(function (item) {
                item.classList.remove("active");
            });

            this.classList.add("active");

        });

    });


    /* ======================================
       ANIMASI CARD
    ====================================== */

    const cards = document.querySelectorAll(".card");

    cards.forEach(function (card) {

        card.addEventListener("mouseenter", function () {

            this.style.transform = "translateY(-10px)";
            this.style.transition = "0.3s";

        });

        card.addEventListener("mouseleave", function () {

            this.style.transform = "translateY(0px)";

        });

    });


    /* ======================================
       EFEK TOMBOL
    ====================================== */

    const tombol = document.querySelectorAll(".btn");

    tombol.forEach(function (btn) {

        btn.addEventListener("mousedown", function () {

            this.style.transform = "scale(.95)";

        });

        btn.addEventListener("mouseup", function () {

            this.style.transform = "scale(1)";

        });

    });

});

