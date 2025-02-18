// Espera a que la página cargue completamente
document.addEventListener("DOMContentLoaded", function() {
    // Selecciona el encabezado
    let header = document.querySelector("header");

    // Array de colores para cambiar
    let colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"];
    
    // Índice para cambiar colores
    let index = 0;

    // Evento de clic en el encabezado
    header.addEventListener("click", function() {
        // Cambia el color de fondo
        header.style.backgroundColor = colors[index];

        // Avanza en el array o reinicia si llega al final
        index = (index + 1) % colors.length;
    });
});
