document.addEventListener("DOMContentLoaded", async function () {

    async function loadLayout() {
        const res = await fetch("/components/layout.html");
        const html = await res.text();
        document.getElementById("layout").innerHTML = html;

        // Auto-set current link
        const path = window.location.pathname;
        const homeLink = document.querySelector(".link.home");
        const socialsLink = document.querySelector(".link.socials");

        if (path === "/" || path.includes("index.html")) homeLink?.classList.add("current");
        if (path.includes("socials")) socialsLink?.classList.add("current");
    }

    await loadLayout();
});
