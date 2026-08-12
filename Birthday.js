const heart = document.getElementById("cinematicHeart");
const arrow = document.getElementById("arrow");
const enterButton = document.getElementById("enterButton");

let opened = false;

function openCinematicPage() {

    if (opened) return;

    opened = true;

    // Arrow flies towards the heart
    arrow.classList.add("arrow-fly");

    // Wait for arrow to reach heart
    setTimeout(function () {

        heart.classList.add("heart-hit");

        // Show continue button
        setTimeout(function () {
            enterButton.classList.add("show");
        }, 700);

    }, 900);
}


// Click heart
heart.addEventListener("click", openCinematicPage);


// Continue to Page 2
enterButton.addEventListener("click", function () {

    document.getElementById("cinematicPage").style.display = "none";

    document.getElementById("surprise").style.display = "block";

    if (typeof showPage === "function") {
        showPage(2);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    if (typeof createHearts === "function") {
        createHearts();
    }

});