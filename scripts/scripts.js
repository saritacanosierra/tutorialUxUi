function abrirModal(id) {
    // Cerrar todos los modales primero
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        modal.style.display = "none";
    });
    
    // Abrir el modal seleccionado
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "block";
        document.body.style.overflow = "hidden"; // Previene el scroll
    }
}

function cerrarModal(id) {
    const modal = document.getElementById(id);
    if (modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto"; // Restaura el scroll
    }
}

// Cerrar al hacer clic fuera del modal
window.onclick = function(event) {
    const modales = document.querySelectorAll('.modal');
    modales.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
            document.body.style.overflow = "auto"; // Restaura el scroll
        }
    });
}

// Cerrar con la tecla ESC
document.addEventListener('keydown', function(event) {
    if (event.key === "Escape") {
        const modales = document.querySelectorAll('.modal');
        modales.forEach(modal => {
            if (modal.style.display === "block") {
                modal.style.display = "none";
                document.body.style.overflow = "auto";
            }
        });
    }
});


