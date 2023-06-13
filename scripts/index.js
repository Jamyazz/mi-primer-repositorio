const imagenes = ["carrouselGrande1.webp", "carrouselGrande2.webp", "carrouselGrande3.webp", "carrouselGrande4.webp", "carrouselGrande5.webp"];
const peliculas = ["GUARDIANES DE LA GALAXIA: VOL 3", "EL GATO CON BOTAS: EL ÚLTIMO DESEO", "DEMON SLAYER: KIMETSU NO YAIBA", "SHAZAM: LA FURIA DE LOS DIOSES", "THE WALKING DEAD"];
const reviws = ["Peter Quill, aún conmocionado por la pérdida de Gamora, debe reunir a su equipo a su alrededor para defender el universo y proteger a uno de los suyos. Una misión que, si no se completa con éxito, muy posiblemente podría conducir al final de los Guardianes tal como los conocemos.",
  "El Gato con Botas descubre que su pasión por la aventura le ha pasado factura: ha quemado ocho de sus nueve vidas, dejándolo con solo una. Puss emprende un viaje épico para encontrar el último deseo mítico y restaurar sus nueve vidas.",
  "Después de que su familia es brutalmente asesinada, un chico de buen corazón llamado Tanjiro Kamado decide convertirse en Demon Slayer con la esperanza de convertir a su hermana menor ezuko en humana.",
  "Billy Batson y sus hermanos adoptivos, que se transforman en superhéroes al decir ¡Shazam!, se ven obligados a volver a la acción y luchar contra las Hijas de Atlas, a quienes deben evitar que use un arma que podría destruir el mundo.",
  "Este drama crudo describe las vidas de un grupo de sobrevivientes que está siempre en movimiento en busca de un hogar seguro durante las semanas y meses de un apocalipsis zombi."];

function cargarDatos(i) {
    let div = document.querySelector(".contenedor");
    let peliculaHTML = `
        <div class="foto salida">
          <div id="img" class="info" style="background-image: url('./images/${imagenes[i]}')">
              <h3 class="titulo">${peliculas[i]}</h3>
              <p class="parrafo">${reviws[i]}</p>
              <div class="links">
                <a href="" class="reproducir"><i class="fa-sharp fa-solid fa-play"></i> Reproducir</a>
                <a href="" id="info" class="infoSerie"><img id="infoBtn" src="./images/infoicon.png"> Mas Información</a>
              </div>
          </div>
        </div>
        <a class="anterior" onclick="siguienteImagen(-1)"><i class="fa-solid fa-arrow-left"></i></a>
        <a class="proxima" onclick="siguienteImagen(1)"><i class="fa-solid fa-arrow-right"></i></a>
    `;
    div.innerHTML += peliculaHTML;
}
  
function llamadorDatos() {
  for (let i = 0; i < imagenes.length; i++) {
    cargarDatos(i);
  }
}

llamadorDatos();
