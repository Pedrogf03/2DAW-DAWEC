// Iterador que va controlando el id de la última fila creada.
let lastId = 1;

// Función qye crea una fila con columnas dentro y la pone al final del cuerpo de la tabla.
function addFila() {
  // Comprueba que el valor del campo 'texto' NO esté vacío.
  if (document.getElementById('texto').value != '') {
    // Crea una nueva fila.
    let tr = document.createElement('tr');
    // Aumenta el id de la fila.
    lastId += 1;
    // Primera columna, en la cual aparece el texto introducido en el input llamado 'texto'.
    tr.innerHTML = "<td id='fila" + lastId + "'>" + document.getElementById('texto').value + '</td>';
    // Segunda columna, que contiene la función mayus a la que se le pasa el id correspondiente a la fila actual.
    tr.innerHTML += "<td><button onclick='mayus(`fila" + lastId + "`)'>Mayúsculas</button></td>";
    // Segunda columna, que contiene la función formatoChachi a la que se le pasa el id correspondiente a la fila actual.
    tr.innerHTML += "<td><button onclick='formatoChachi(`fila" + lastId + "`)'>Formato chachi</button></td>";
    let table = document.getElementsByTagName('tbody')[0]; // Captura el cuerpo de la tabla.
    table.appendChild(tr); // Añade la nueva fila al final del cuerpo de la tabla.
  }
}

// Función que transforma en mayúscula el texto de la fila.
function mayus(id) {
  // Se le asigna una clase que, en css, tiene las propiedades para que el texto aparezca en mayúsculas.
  document.getElementById(id).classList.toggle('mayus');
}

// Función que le da un formato al texto de la fila.
function formatoChachi(id) {
  // Se le asigna una clase que, en css, tiene las propiedades para que el texto tenga un formato concreto.
  document.getElementById(id).classList.toggle('styletd');
}
