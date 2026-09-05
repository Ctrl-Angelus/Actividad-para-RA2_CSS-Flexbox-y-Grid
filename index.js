
const aside_button = document.getElementById("aside-toggle")
const page = document.getElementById("page")

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = window.matchMedia("(max-width: 768px)").matches

    if (!isMobile) page.classList.toggle("aside-open")

    aside_button.setAttribute("aria-expanded", String(!isMobile));
    aside_button.setAttribute(
        "aria-label",
        isMobile ? "Expandir menú" : "Contraer menú"
    );
})

aside_button.addEventListener("click", () => {
    page.classList.toggle("aside-open")
})
