document.addEventListener("DOMContentLoaded", function() {
    // Elementos
    const modal = document.getElementById("modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close");

    // Función para abrir el modal
    function abrirModal(contenido) {
        modal.style.display = "block";
        modalBody.innerHTML = contenido;
    }

    // Función para cerrar el modal
    closeBtn.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Evento para abrir los detalles al hacer clic
    document.getElementById("motos").onclick = function() {
        abrirModal("Motos en stock");
    };
    document.getElementById("accesorios").onclick = function() {
        abrirModal("Accesorios en stock");
    };
    document.getElementById("repuestos").onclick = function() {
        abrirModal("Repuestos en stock");
    };
    document.getElementById("clientes").onclick = function() {
        abrirModal("Lista de Clientes");
    };
    document.getElementById("Moto").onclick = function() {
        abrirModal("Motos al público");
    };
    document.getElementById("Accesorio").onclick = function() {
        abrirModal("Accesorios vendidos");
    };
    document.getElementById("Repuesto").onclick = function() {
        abrirModal("Repuestos vendidos");
    };
    document.getElementById("Ventas").onclick = function() {
        abrirModal("Motos vendidas");
    };
});
