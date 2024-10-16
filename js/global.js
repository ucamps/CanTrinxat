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
     if (window.location.pathname === "/carta.html"){
        footer.style.marginTop='30vh';
console.log("hola");
     }
     else{
        footer.style.marginTop='73vh';

     }
    } else {
      menu.style.opacity = 0;
      menu.style.visibility = 'hidden';
      article.style.visibility='visible';
      article.style.height='80%';
      body.style.overflow='scroll';
    }
    return false;
  }