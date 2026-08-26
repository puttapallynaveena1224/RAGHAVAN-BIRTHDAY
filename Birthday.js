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

/* =================================================
   PAGE 11 — FAMILY DATA
================================================= */

const familyMembers = [

    /* =================================================
       MEMBER 1 — UNCLE
    ================================================= */

    {
        name: "Uncle",

        relation: "The Family's Strength 💙",

        matter:
            "He is the pillar of the family who provides strength, guidance, and support. His presence brings confidence and stability to everyone. He is someone the family can always depend on. 🏡💙",

        photos: [
            "Photos/Family/Member1-1.jpeg",
            "Photos/Family/Member1-2.jpeg"
        ]
    },


    /* =================================================
       MEMBER 2 — AUNTY
    ================================================= */

    {
        name: "Aunty",

        relation: "The Heart of the Family ❤️",

        matter:
            "She brings love, care, warmth, and togetherness to the family. She makes everyone feel comfortable and cared for, and her presence makes the home feel complete. ❤️",

        photos: []
    },


    /* =================================================
       MEMBER 3 — SRINIVASA RAGHAVAN
    ================================================= */

    {
        name: "Srinivasa Raghavan",

        relation: "The Protective Support 🫂",

        matter:
            "He is someone who stands beside the family through good and difficult times. His support, protection, and encouragement make the family stronger. 🏡💙",

        photos: [
            "Photos/Family/Member3-1.jpeg",
            "Photos/Family/Member3-2.jpeg"
        ]
    },


    /* =================================================
       MEMBER 4 — VIJAY RAGHAVAN
    ================================================= */

    {
        name: "Vijay Raghavan",

        relation: "The Happiness of the Family 😊",

        matter:
            "He brings fun, laughter, energy, and unforgettable memories into the family. His presence keeps the family cheerful and connected. 😄💙",

        photos: []
    }

];


/* =================================================
   OPEN FAMILY MEMBER
================================================= */

function openFamilyMember(index) {

    const person = familyMembers[index];

    if (!person) return;


    const panel =
        document.getElementById("familyMemberPanel");

    if (!panel) return;


    let photosHTML = "";


    /* SHOW ALL PHOTOS */

    if (person.photos && person.photos.length > 0) {

        photosHTML = `
            <div class="family-member-photos">

                ${person.photos.map(function(src, i) {

                    return `
                        <div class="family-photo-card">

                            <img
                                src="${src}"
                                alt="${person.name} photo ${i + 1}"
                                class="family-member-full-photo"
                                loading="eager"
                                onerror="this.parentElement.style.display='none'"
                            >

                        </div>
                    `;

                }).join("")}

            </div>
        `;

    } else {

        photosHTML = `
            <div class="family-panel-placeholder">
                More memories coming soon 💙
            </div>
        `;

    }


    /* PANEL */

    panel.innerHTML = `

        <div class="family-member-head">

            <div>

                <div class="family-member-name">
                    ${person.name}
                </div>

                <div class="family-member-relation">
                    ${person.relation}
                </div>

            </div>


            <button
                class="family-close"
                onclick="closeFamilyMember()"
                aria-label="Close">
                ×
            </button>

        </div>


        <p class="family-member-matter">
            ${person.matter}
        </p>


        ${photosHTML}

    `;


    /* OPEN */

    panel.classList.add("show");


    /* Allow panel to grow */

    panel.style.maxHeight = "none";
    panel.style.height = "auto";
    panel.style.overflow = "visible";


    /* Scroll to panel */

    setTimeout(function() {

        panel.scrollIntoView({
            behavior: "smooth",
            block: "nearest"
        });

    }, 100);

}


/* =================================================
   CLOSE FAMILY MEMBER
================================================= */

function closeFamilyMember() {

    const panel =
        document.getElementById("familyMemberPanel");

    if (!panel) return;

    panel.classList.remove("show");

    panel.style.maxHeight = "";
    panel.style.height = "";
    panel.style.overflow = "";

}
/* =================================================
   PAGE 12 — FRIENDS WALL
================================================= */

const friendsData = [

    {
        name: "Nandhan",
        photo: "Photos/Friends/friend1.jpeg"
    },

    {
        name: "Friend 2",
        photo: "Photos/Friends/friend2.jpeg"
    },

    {
        name: "Friend 3",
        photo: "Photos/Friends/friend3.jpeg"
    },

    {
        name: "Naveena",
        photo: "Photos/Friends/friend4.jpeg"
    },

    {
        name: "Friend 5",
        photo: "Photos/Friends/friend5.jpeg"
    },

    {
        name: "Friend 6",
        photo: "Photos/Friends/friend6.jpeg"
    },

    {
        name: "Friend 7",
        photo: "Photos/Friends/friend7.jpeg"
    },

    {
        name: "Friend 8",
        photo: "Photos/Friends/friend8.jpeg"
    },

    {
        name: "Friend 9",
        photo: "Photos/Friends/friend9.jpeg"
    },

    {
        name: "Friend 10",
        photo: "Photos/Friends/friend10.jpeg"
    }

];


function buildFriendsWall() {

    const wall =
        document.getElementById("friendsWall");

    if (!wall) return;


    wall.innerHTML = friendsData.map(function(friend, i) {

        return `

            <div class="hanging-photo photo-${(i % 6) + 1}">

                <div class="photo-pin"></div>

                <div class="photo-string"></div>

                <div class="photo-frame">

                    <img
                        src="${friend.photo}"
                        alt="${friend.name}"
                        loading="eager"
                        onerror="
                            this.style.display='none';
                            this.parentElement.classList.add('missing-photo');
                        "
                    >

                    <div class="photo-fallback">
                        📸
                    </div>

                </div>

                <div class="photo-name">
                    ${friend.name}
                </div>

            </div>

        `;

    }).join("");

}


/* Build Friends Wall */

buildFriendsWall();
