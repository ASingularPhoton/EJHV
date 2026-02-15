document.addEventListener("DOMContentLoaded", async function () {

    try {
        const res = await fetch("components/layout.html");
        const html = await res.text();
        document.getElementById("layout").innerHTML = html;

        const path = window.location.pathname;
        const homeLink = document.querySelector(".link.home");
        const socialsLink = document.querySelector(".link.socials");

        if (path.includes("social")) {
            socialsLink?.classList.add("current");
        } else {
            homeLink?.classList.add("current");
        }

    } catch (err) {
        console.error("Layout failed to load:", err);
    }

});
