/** Botón de menu */

document.querySelector('.mobile-menu-btn').addEventListener('click', function () {
	document.querySelector('body').classList.toggle('mobile-menu-active');
});

/**Botón de volver arriba */

const btnVolverArriba = document.getElementById('volver-arriba');

window.addEventListener('scroll', () => {
	if (window.scrollY > 200) {
		btnVolverArriba.classList.add('mostrar');
	} else {
		btnVolverArriba.classList.remove('mostrar');
	}
});

btnVolverArriba.addEventListener('click', () => {
	window.scrollTo({
		top: 0,
		behavior: 'smooth'
	});
});
