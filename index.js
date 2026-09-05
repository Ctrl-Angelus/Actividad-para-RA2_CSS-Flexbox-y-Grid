const aside_button = document.getElementById("aside-toggle")
const page = document.getElementById("page")

aside_button.addEventListener("click", () => {
    const isCollapsed = page.classList.toggle("aside-collapsed");

    aside_button.setAttribute(
        "aria-expanded",
        String(!isCollapsed)
    );

    aside_button.setAttribute(
        "aria-label",
        isCollapsed
            ? "Expandir menú"
            : "Contraer menú"
    );
})
