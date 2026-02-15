document.addEventListener("DOMContentLoaded", async function () {

    async function load(id, file) {
        const res = await fetch(file);
        const html = await res.text();
        document.getElementById(id).innerHTML = html;
    }

    await load("nav", "components/nav.html");
    await load("footer", "components/footer.html");

    const currentFile = window.location.pathname.split("/").pop();

    const homeLink = document.querySelector(".link.home");
    const socialsLink = document.querySelector(".link.socials");

    if (currentFile === "social.html") {
        socialsLink?.classList.add("current");
    } else {
        homeLink?.classList.add("current");
    }

});
