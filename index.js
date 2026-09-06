
const aside_button = document.getElementById("aside-toggle")
const page = document.getElementById("page")
const aside = document.getElementById("sidebar")

// Media Query utilizada en el css para dispositivos móviles
const mobileQuery = window.matchMedia("(max-width: 768px)")

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

// Lógica del cambio de secciones del dashboard

const sectionButtons = document.querySelectorAll(
    "aside button[data-section]"
);

const sections = document.querySelectorAll("main section");

sectionButtons.forEach((button) => {
    button.addEventListener("click", () => {

        const sectionId = button.dataset.section;

        // Ocultar todas las secciones
        sections.forEach((section) => {
            section.hidden = true;
        });

        // Mostrar la sección seleccionada
        document.getElementById(sectionId).hidden = false;

        // Quitar el estado actual de todos los botones
        sectionButtons.forEach((button) => {
            button.removeAttribute("aria-current");
        });

        // Marcar el botón seleccionado
        button.setAttribute("aria-current", "page");
    });
});


// Botones adicionales del aside

const notification_button = document.getElementById("notification-button")
const user_button = document.getElementById("user-button")

notification_button.addEventListener("click", () => {
    alert("No tiene notificaciones nuevas.")
})

user_button.addEventListener("click", () => {
    alert("Usuario administrador de la empresa ByteMarket. Dashboard informativo de las acciones presentadas en el periodo marzo-agosto de 2026.")
})
