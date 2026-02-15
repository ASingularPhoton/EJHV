document.addEventListener("DOMContentLoaded", async function () {

    try {
        const response = await fetch("components/layout.html");
        const html = await response.text();
        document.getElementById("layout").innerHTML = html;

        // Highlight active page
        const currentFile = window.location.pathname.split("/").pop();

        const homeLink = document.querySelector(".link.home");
        const socialsLink = document.querySelector(".link.socials");

        if (currentFile === "social.html") {
            socialsLink?.classList.add("current");
        } else {
            homeLink?.classList.add("current");
        }

    } catch (error) {
        console.error("Failed to load layout:", error);
    }

});
