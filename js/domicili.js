// Selecciona todos los elementos con la clase 'card'
const cards = document.querySelectorAll('.card');

// Itera sobre cada card y agrega un evento de clic
cards.forEach(card => {
    card.addEventListener('click', function() {
        // Obtiene el contenido del h3 dentro del card clickeado
        var h3Content = this.querySelector('h3').innerText;
        
        // Redirige a otra página y pasa el contenido como parámetro en la URL
        window.location.href = '/html/platodinamico.php?h3=' + encodeURIComponent(h3Content);
    });
});