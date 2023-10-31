// Función que muestra un div avisando del uso de cookies.
export function cookies() {
  // Se separa el string que contiene todas las cookies.
  var session = null;
  let cookies = document.cookie.split('; ');
  for (let cookie of cookies) {
    // Se separa el nombre y el valor de cada cookie.
    let [nombre, valor] = cookie.split('=');
    // Se busca la cookie "session" y se almacena su valor en una constante.
    if (nombre == 'session') {
      var session = valor;
    }
  }
  // Si el valor de la cookie session no es "t".
  if (session != 't') {
    // Crea un div con contenido que avisa del uso de cookies y pregunta al usuario si está de acuerdo.
    let confirm = document.createElement('div');
    confirm.setAttribute('id', 'confirm'); // Id del div.
    confirm.innerHTML = '<h1>Atención</h1>';
    confirm.innerHTML +=
      '<p>Esta página usa una cookie para almacenar el número de visitas que hace cada usuario. Si está conforme con ello, pulse aceptar. De otro modo la página no realizará su labor y eliminará las cookies existentes.</p>';
    confirm.innerHTML += '<div><button id="ok">Aceptar</button>&nbsp;&nbsp;&nbsp;<button id="no">Cancelar</button></div>';
    document.getElementById('page').appendChild(confirm);
    // Se le añade un evento al boton aceptar para ejecutar la funcion aceptar al hacer click.
    document.getElementById('ok').addEventListener('click', aceptar);
    document.getElementById('no').addEventListener('click', cancelar);
    // Crea la cookie que guarda la sessión del usuario.
    document.cookie = 'session=t; max-age=60*60*24*365';
  } else {
    // Si el valor de la cookie session es "t", directamente carga las visitas.
    contarVisita();
  }
}

// Función que acepta las cookies y carga las visitas
function aceptar() {
  // Elimina el cuadro de alerta sobre las cookies.
  document.getElementById('page').removeChild(document.getElementById('confirm'));
  // Crea la cookie visitas.
  document.cookie = 'Visitas=0; max-age=60*60*24*365';
  // Empieza a cargar las visitas.
  contarVisita();
}

// Función que cancela las cookies.
function cancelar() {
  // Cambia el contenido del cuadro de diálogo.
  document.getElementById('confirm').innerHTML = '<p>Lo sentimos, la página no puede funcionar sin cookies.</p>';
  // Borra la cookie session, poniendole una fecha de expiración pasada.
  document.cookie = 'session=f; expires=Sat, 01 Jan 2021 00:00:01 GMT';
  console.log(document.cookie);
}

// Función que cierra la sesion.
function cerrarSesion() {
  // Borra las cookies, poniendoles una fecha de expiración pasada.
  document.cookie = 'session=f; expires=Sat, 01 Jan 2021 00:00:01 GMT';
  document.cookie = 'Visitas=0; expires=Sat, 01 Jan 2021 00:00:01 GMT';
  // Recarga la página.
  location.reload();
}

// Función que cuenta las visitas de la página.
function contarVisita() {
  // Crea un párrafo vacío y lo añade al main del documento.
  let p = document.createElement('p');
  p.setAttribute('id', 'p');
  document.getElementById('page').appendChild(p);

  // Crea un botón, el cual servirá para cerrar sesión, y lo añade al main del documento,
  let closeSession = document.createElement('button');
  closeSession.setAttribute('id', 'cerrarSesion');
  closeSession.innerText = 'Cerrar Sesión';
  document.getElementById('page').appendChild(closeSession);
  // Se le añade un evento al botón para que cierre sesion al hacer click.
  closeSession.addEventListener('click', cerrarSesion);

  // Separamos las cookies.
  let cookies = document.cookie.split('; ');
  // Recorremos cada cookie.
  for (let cookie of cookies) {
    // Se separa el nombre y el valor de cada cookie.
    let [nombre, valor] = cookie.split('=');
    // Se busca la cookie "Visitas".
    if (nombre == 'Visitas') {
      // En el párrafo vacío creado anteriormente, mostramos el valor de la cookie.
      document.getElementById('p').innerText = `${nombre}: ${valor}`;
      // Aumentamos el valor.
      valor++;
      // Y actualizamos la cookie.
      document.cookie = 'Visitas=' + valor + '; max-age=60*60*24*365';
    }
  }
}
