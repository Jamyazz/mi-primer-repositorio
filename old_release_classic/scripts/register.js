//Inicio.
function inicio() {
    let inicio = document.querySelector("#inicio");

    info = `
        <div id="opacidad">
            <div id="cabezera">
                <img id="logo" src="images/LOGOTIPO.webp">
                <button class="botonChico">Iniciar sesión</button>  
            </div>
            <h1 class="titulo">Películas y series ilimitadas y mucho más</h1>
            <p class="parrafon">Disfruta donde quieras. Cancela cuando quieras.</p>
            <p class="parrafin">¿Quieres ver Netflix ya? Ingresa tu email para crear una cuenta o reiniciar tu membresía de Netflix.</p>
            <form class="formulario">
                <input type="email" name="" class="correo" placeholder="Email">
                <button type="submit" class="boton">Comenzar <i class="fa-solid fa-chevron-right"></i></button>
            </form>
        </div>
        `;

    inicio.innerHTML = info;

}

function disfruta() {
    let disfruta = document.querySelector("#disfruta");

    info = `
        <div id="cuerpo">
            <div id="textos">
                <h1 class="titulo">Disfruta en tu TV</h2>
                <p class="parrafon">Ve en smart TV, PlayStation, Xbox, Chromecast, Apple TV, reproductores de Blu-ray y más.</p>
            </div>
            <div id="tv">
                <img src="./images/register_tv.png" alt="">
            </div>
        </div>
        `;

    disfruta.innerHTML = info;

}



inicio();
disfruta();
