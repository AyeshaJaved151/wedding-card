const cover = document.getElementById("cover");
const openBtn = document.getElementById("open");
const envelope = document.querySelector(".env");

const items = [
    ...document.querySelectorAll(".item")
];


/* =========================
   SWEET ALERT ON PAGE LOAD
========================= */

window.addEventListener("load", async () => {

    await Swal.fire({

        title: "Baraat Ceremony",

        text: "You are cordially invited to celebrate the wedding of Musarah & Fareed.",

        confirmButtonText: "Open Invitation",

        confirmButtonColor: "#9a7438"

    });

});


/* =========================
   OPEN ENVELOPE
========================= */

envelope.onclick = () => {

    /* Envelope opening animation */
    envelope.classList.add("open-envelope");


    /* Hide envelope after animation */
    setTimeout(() => {

        cover.classList.add("hide");


        /* Animate all text one by one */
        items.forEach((element, index) => {

            setTimeout(() => {

                element.classList.add("show");

            }, 180 + index * 135);

        });


        /* Create history entry */
        history.pushState(
            { invitation: true },
            "",
            "#invitation"
        );

    }, 800);

};


/* =========================
   BACK BUTTON SWEETALERT
========================= */

let shown = false;


addEventListener("popstate", async () => {

    if (shown) {
        return;
    }


    shown = true;

    await Swal.fire({

    title: "See You There",

    text: "Thank you for accepting our invitation.",

    confirmButtonText: "Close",

    confirmButtonColor: "#9a7438",

    allowOutsideClick: false,

    allowEscapeKey: false

    });


document.body.style.background = "#eee5d7";


});
