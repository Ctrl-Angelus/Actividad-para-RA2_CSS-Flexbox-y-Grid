
const aside_button = document.getElementById("aside-toggle")
const page = document.getElementById("page")
const aside = document.getElementById("sidebar")

// Media Query utilizada en el css para dispositivos móviles
const mobileQuery = window.matchMedia("(max-width: 768px)")

// Configuración inicial de los elementos y sus atributos
// La página en móviles por defecto tiene el aside oculto y tiene inert para evitar interacciones con el teclado cuando el aside esta oculto
// En otros dispositivos el aside está abierto y no se usa el inert, para tener acceso con el teclado en todo momento

document.addEventListener("DOMContentLoaded", () => {
    const isMobile = mobileQuery.matches

    if (isMobile) aside.toggleAttribute("inert");
    else page.classList.toggle("aside-open")

    aside_button.setAttribute("aria-expanded", String(!isMobile));
    aside_button.setAttribute(
        "aria-label",
        isMobile ? "Expandir menú" : "Contraer menú"
    );
})

// Cambiar el atributo inert del aside cuando se cambia el tamaño de la ventana
mobileQuery.addEventListener("change", (event) => {
    const isAsideOpen = page.classList.contains("aside-open")
    if (event.matches) {
        if (isAsideOpen) aside.removeAttribute("inert")
        else aside.setAttribute("inert", true)
    } else {
        aside.removeAttribute("inert")
    }
})

// Cambiar el estado del aside con el boton del header
aside_button.addEventListener("click", () => {
    const isAsideOpen = page.classList.toggle("aside-open")
    const isMobile = mobileQuery.matches
    if (isMobile) aside.toggleAttribute("inert")

    aside_button.setAttribute("aria-expanded", String(isAsideOpen));
    aside_button.setAttribute(
        "aria-label",
        isAsideOpen ? "Contraer menú" : "Expandir menú"
    );
})
