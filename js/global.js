// menu movimimento y aparece el nav en mobil
var theToggle = document.getElementById('toggle');
function hasClass(elem, className) {
	return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function toggleClass(elem, className) {
	var newClass = ' ' + elem.className.replace( /[\t\r\n]/g, " " ) + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(" " + className + " ") >= 0 ) {
            newClass = newClass.replace( " " + className + " " , " " );
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    } else {
        elem.className += ' ' + className;
    }
}

theToggle.onclick = function() {
   toggleClass(this, 'on');
   return false;
}


// funcion para que movil aparece el menu o se oculta
theToggle.onclick = function() {
    toggleClass(this, 'on');
    var article = document.getElementById('principal');
    var menu = document.getElementById('menu');
    var footer = document.getElementById('foot');
    var body = document.getElementById('body');
    if (hasClass(this, 'on')) {
      menu.style.opacity = 1;
      menu.style.visibility = 'visible';
      article.style.visibility='hidden';
      article.style.height='0';
      menu.style.height = '75%';
     body.style.overflow='hidden';
     footer.style.marginTop='75vh';

    } else {
      menu.style.opacity = 0;
      menu.style.visibility = 'hidden';
      article.style.visibility='visible';
      article.style.height='80%';
      body.style.overflow='scroll';
      footer.style.marginTop='0vh';

    }
    return false;
  }
  function getCookie(name) {
    const value = `; ${ document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }
  
  const cookieValue = getCookie('email');
  
  if (cookieValue) {
    // Cookie is active, run the function
    myFunction();
  } else {
    // Cookie is not active, do something else
    console.log('Cookie is not active');
  }
  
  function myFunction() {
    var log = document.getElementById('log');
    var deslog = document.getElementById('deslog');

    log.style.visibility='hidden';
    log.style.height=0;
    deslog.style.visibility='visible';
    // Your code here
    console.log('Cookie is active, running myFunction');
  }
  
  document.getElementById('deleteCookieButton').addEventListener('click', function() {
    // Función para eliminar la cookie
    deleteCookie('email');
});

function deleteCookie(name) {
    // Establecer la cookie con una fecha de expiración en el pasado
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/`;

    window.location.href = '../index.html'; // Cambia 'index.html' por la ruta adecuada

}