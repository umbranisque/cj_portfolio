// Typing Effect

const text =
    "BSIT Student • Java Developer • Web Developer";

let i = 0;

function type() {

    if (i < text.length) {

        document
            .getElementById("typing")
            .textContent += text.charAt(i);

        i++;

        setTimeout(type, 70);
    }
}

type();

// Scroll Reveal

const observer =
    new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }

        });

    });

document
    .querySelectorAll(".hidden")
    .forEach(el => observer.observe(el));

// Mouse Glow

const glow =
    document.getElementById("cursor-glow");

document.addEventListener("mousemove", e => {

    glow.style.left =
        e.clientX + "px";

    glow.style.top =
        e.clientY + "px";

});

// Active Navbar Link

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 200;

        if (scrollY >= top) {
            current =
                section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.style.color = "white";

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {
            link.style.color = "#8b5cf6";
        }

    });

});