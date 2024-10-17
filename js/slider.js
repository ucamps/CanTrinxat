const sliderDiv = document.getElementById('sliderDiv');
const sliderImg = document.getElementById('slider');
const images = ['./img/Mas_fabregas_del_bosc-ametlladelvalles.jpg', '../img/exterior-masia-parcerisas_1_83861-163769631796181.jpeg'];
let currentImage = 0;
const animationDuration = 500; // en milisegundos
const autoSlideInterval = 15000; // 15 segundos
const sliderWidth = sliderDiv.offsetWidth; // obtener el ancho del contenedor del slider

// Función para animar el deslizamiento
function animateSlide() {
  sliderImg.style.transition = `left ${animationDuration}ms`;
  sliderImg.style.left = `-${sliderWidth}px`; // mover la imagen actual fuera de la vista a la izquierda

  setTimeout(() => {
    currentImage = (currentImage + 1) % images.length; // actualizar la imagen actual
    sliderImg.src = images[currentImage]; // cambiar la fuente de la imagen
    sliderImg.style.left = `${sliderWidth}px`; // colocar la nueva imagen fuera de la vista a la derecha

    // Forzar el reflujo para reiniciar la transición
    void sliderImg.offsetWidth;

    // Hacer la transición de la nueva imagen a la posición original
    sliderImg.style.transition = `left ${animationDuration}ms`;
    sliderImg.style.left = `0px`; // mover la nueva imagen a la vista

    // Ajustar la posición de la imagen para que no salga del contenedor
    sliderImg.style.left = `-${sliderWidth / 2}px`;
  }, animationDuration);
}

// Configurar el deslizamiento automático cada 20 segundos
setInterval(animateSlide, autoSlideInterval);

// Inicializar el slider
animateSlide();