// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Seleccionar elementos relevantes
    const hamburger = document.querySelector('.menu__hamburger');
    const menuList = document.querySelector('.menu__list');
    
    // Si existe el botón hamburguesa, añadir el evento click
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            // Alternar la clase 'active' para mostrar/ocultar el menú
            menuList.classList.toggle('active');
            
            // Animación para el icono de hamburguesa (opcional)
            const spans = this.querySelectorAll('span');
            if (menuList.classList.contains('active')) {
                // Convertir a X cuando está activo
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
            } else {
                // Restaurar a hamburguesa cuando está inactivo
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        });
        
        // Cerrar el menú al hacer clic en un elemento del menú
        const menuItems = document.querySelectorAll('.menu__item a');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                menuList.classList.remove('active');
                // Restaurar icono hamburguesa
                const spans = hamburger.querySelectorAll('span');
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            });
        });
    }
});