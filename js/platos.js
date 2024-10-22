   // Obtener el parámetro 'h3' de la URL
   const params = new URLSearchParams(window.location.search);
   const h3Content = params.get('h3');
   const menu = {
    "PRIMER PLAT": [
      {
        foto: "../img/Mas_fabregas_del_bosc-ametlladelvalles.jpg",
        titulo: "ENTRECOT",
        descripcion: "ENTRECOT SENSE OS AL ROQUEFORT O AL PEBRE",
        precio: 19.50
      },
      {
        foto: "../img/exterior-masia-parcerisas_1_83861-163769631796181.jpeg",
        titulo: "MAGRET D ́ÀNEC",
        descripcion: "MAGRET D ́ÀNEC A LA BIGARRADA D ́O ́PORTO I TARONJA",
        precio: 16.25
      }
    ],
    "SEGON PLAT": [
      {
        foto: "ruta/al/archivo/foto3.jpg",
        titulo: "Nombre del plato 3",
        descripcion: "Descripción del plato 3",
        precio: 14.99
      },
      {
        foto: "ruta/al/archivo/foto4.jpg",
        titulo: "Nombre del plato 4",
        descripcion: "Descripción del plato 4",
        precio: 16.99
      }
    ],
    "POSTRES": [
      {
        foto: "ruta/al/archivo/foto5.jpg",
        titulo: "Nombre del postre 1",
        descripcion: "Descripción del postre 1",
        precio: 6.99
      },
      {
        foto: "ruta/al/archivo/foto6.jpg",
        titulo: "Nombre del postre 2",
        descripcion: "Descripción del postre 2",
        precio: 8.99
      }
    ],
    "BEGUDA": [
      {
        foto: "ruta/al/archivo/foto7.jpg",
        titulo: "Nombre de la bebida 1",
        descripcion: "Descripción de la bebida 1",
        precio: 3.99
      },
      {
        foto: "ruta/al/archivo/foto8.jpg",
        titulo: "Nombre de la bebida 2",
        descripcion: "Descripción de la bebida 2",
        precio: 5.99
      }
    ]
  };
   // Si hay contenido, actualizar el h1
   if (h3Content) {
       document.getElementById('titulo').innerText = h3Content;
   } else {
       document.getElementById('titulo').innerText = 'No se ha recibido contenido';
   }
   // Obtener el título del plato
  
    // Verificar si el título está en el menú
    function mostrarMenu() {
      const menuContent = document.getElementById("carta");
      menuContent.innerHTML = ""; // Limpiar contenido previo
  
      // Verificar si el título está en el menú
      if (menu[h3Content]) {
          menu[h3Content].forEach(item => {
              const itemHTML = `
                  <div class="plato">
                      <img src="${item.foto}" alt="${item.titulo}">
                      <h2>${item.titulo}</h2>
                      <p>${item.descripcion}</p>
                      <div class="precio">
                          <p>Precio: ${item.precio.toFixed(2)}€</p>
                          <button class="agregar-btn" data-titulo="${item.titulo}">Agregar</button>
                      </div>
                  </div>
              `;
              menuContent.innerHTML += itemHTML; // Agregar cada ítem al contenido
          });
  
          // Agregar evento a los botones
          const botonesAgregar = document.querySelectorAll('.agregar-btn');
          botonesAgregar.forEach(boton => {
              boton.addEventListener('click', function() {
                  const titulo = this.getAttribute('data-titulo'); // Obtener el título del atributo data
                  window.location.href = `domicili.html?titulo=${encodeURIComponent(titulo)}`; // Redirigir a la página 'domicili'
              });
          });
      } else {
          menuContent.innerHTML = "<p>No hay información disponible para este menú.</p>";
      }
  }


// Llamar a la función para mostrar el menú al cargar la página
mostrarMenu();