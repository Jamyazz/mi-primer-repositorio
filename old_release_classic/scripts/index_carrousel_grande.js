let indiceImagen = 1;
mostrarImagenes(indiceImagen);

function siguienteImagen(n) {
  mostrarImagenes(indiceImagen += n);
}

function seleccionarImagen(n) {
  mostrarImagenes(indiceImagen = n);
}

function mostrarImagenes(n) {
  let i;
  let imagenes = document.getElementsByClassName("foto");
  if (n > imagenes.length) { indiceImagen = 1 }
  if (n < 1) { indiceImagen = imagenes.length }
  for (i = 0; i < imagenes.length; i++) {
    imagenes[i].style.display = "none";
  }
  imagenes[indiceImagen - 1].style.display = "flex";
  imagenes[indiceImagen - 1].style.width = "100%";
}

let contador = setInterval(() => {
  siguienteImagen(1);
}, 6000);

function reiniciarContador() {
  borrarContador(contador);
  contador = setInterval(() => {
    siguienteImagen(1);
  }, 6000);
}
