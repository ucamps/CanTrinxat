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
    var menu = document.getElementById('menu');
    if (hasClass(this, 'on')) {
      menu.style.opacity = 1;
      menu.style.visibility = 'visible';
    } else {
      menu.style.opacity = 0;
      menu.style.visibility = 'hidden';
    }
    return false;
  }