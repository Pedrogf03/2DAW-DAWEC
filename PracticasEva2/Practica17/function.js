export function crearForma(ev) {
  try {
    if (ev.button == 0 || ev.button == 2) {
      // Quita el menú contextual del click derecho.
      document.oncontextmenu = function () {
        return false;
      };
      // Crea un div llamado forma.
      let forma = document.createElement('div');
      // Genera un diámetro aleatorio entre 10 y 300 para el ancho del div.
      let diam = parseInt(Math.random() * 290 + 10);
      // Le ponemos al div de ancho el diámetro generado.
      forma.style.width = diam + 'px';
      // Le ponemos al div de alto el diámetro generado.
      forma.style.height = diam + 'px';
      // Le ponemos al div posición absoluta, para poder colocarlo donde queramos de la pantalla.
      forma.style.position = 'absolute';
      // Le ponemos al div las coordenadas X e Y de donde se ha hecho click en pantalla,
      // restando la mitad del diámetro para que el ratón aparezca en el medio de la figura.
      forma.style.top = ev.clientY - diam / 2 + 'px';
      forma.style.left = ev.clientX - diam / 2 + 'px';
      // Le ponemos al div un color aleatorio, generando 3 números entre 0 y 256.
      forma.style.backgroundColor = 'rgb(' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ', ' + parseInt(Math.random() * 256) + ')';

      if (ev.button == 0) {
        // Le ponemos al div los bordes redondos, para que sea un círculo.
        forma.style.borderRadius = '50%';
      } else if (ev.button == 2) {
        ev.preventDefault();
      }

      // Por último, añadimos el círculo al body del documento.
      document.body.appendChild(forma);
    } else {
      throw 'Botón incorrecto.';
    }
  } catch (error) {
    console.log(error);
  }
}
