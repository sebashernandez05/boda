const invitados = [
    { nombre: 'Sebastian Hernandez', nombre_primero: 'Sebastian', apellido: 'Hernandez', acompañante: 'alejandra riascos', acompañante_primero: 'Alejandra' },
    { nombre: 'Juan Salazar', nombre_primero: 'Juan', apellido: 'Salazar', acompañante: 'Juan Jose', acompañante_primero: 'Jose' },
    { nombre: 'Maria', nombre_primero: 'Maria', apellido: 'Riascos', acompañante: 'Johan Hernandez', acompañante_primero: 'Johan' },
]

const formulario = document.querySelector('#formulario');
const boton = document.querySelector('#buscar');
const resultado = document.querySelector('#resultado');

const filtrar = () => {
    // console.log(formulario.value);
    resultado.innerHTML = '';
    const texto = formulario.value.toLowerCase();
    for (let invitado of invitados) {
        let nombre = invitado.nombre.toLowerCase();
        let ocultar = document.querySelector('.ima-tarjeta-tres');
        ocultar.style.display = 'none';
        let apellido = invitado.apellido.toLowerCase();
        if (nombre.lastIndexOf(texto) !== invitado.nombre && nombre.lastIndexOf(texto) !== -1) {
            resultado.innerHTML += `
                <div class='invitado'>
                <div invitado_texto>
                <p class="invitado_nombre">${invitado.nombre_primero}</p>
                <p class="invitacion">TE ESPERAMOS A TI Y A</p>
                <p class="invitado_nombre">${invitado.acompañante_primero}</p>
                <p class="invitacion">PARA CELEBRAR CON NOSOTROS</p>
                </div>
                <div class='invitado_ubicacion'>
                <p class="direccion">CALLE SIEMPRE VIVA CON CARRERA FLUFFY</p>
                <p class="nombre_lugar">NOMBRE DEL LUGAR</p>
                <div class="horario">
                <img src="img/Icon ionic-md-time.svg" class="horario_img" alt="">
                <p class="hora">06:00 PM</p>
                <div class='ubicacion'>
                <a target="blank" href="https://www.google.com/maps/place/Iglesia+de+San+Jos%C3%A9/@6.209933,-75.570476,15z/data=!4m5!3m4!1s0x0:0x9ab92505d986b2e2!8m2!3d6.2099515!4d-75.5705293"><img src="img/Icon material-location-on.svg" class="como_llegar_img" alt=""></a>
                <p class="como_llegar">COMO LLEGAR</p>
                </div>
                </div>
                </div>
                <div class='invitado_img'>
                <img src="img/fecha.png" class="calendario"
                            alt="imagen calendario">
                </div>
                </div>
                
            `

            break;
        }
    }

    if(resultado.innerHTML === ''){
        let ocultar = document.querySelector('.ima-tarjeta-tres');
        ocultar.style.display = 'none';
        let tarjetas = document.querySelector('.tarjetas');
        tarjetas.style.margin = '0px 0px 35px 0px';
        resultado.innerHTML += `
                <div class="no_invitado">
                <div class="no_invitado_izq">
                <p class="nombre">${texto}</p>
                <div class="no_invitado_imagen">
                <img src="img/no-invitado.svg" class="img_no_invitado" alt="">
                <p class="p-imagen">NO ESTAS INVITAD@ A NUESTRA BODA</p>
                </div>
                <p class="momento-intimo">ESTE ES UN MOMENTO ÍNTIMO QUE VAMOS A COMPARTIR CON LAS PERSONAS MÁS CERCANAS.</p>
                </div>
                <div class="no_invitado_der">
                <img src="img/vintage-desk-calendar-mockup-right-view.svg" class="calendario"
                            alt="imagen calendario">
                </div>
                </div>
            `
    }

}

boton.addEventListener('click', filtrar);
// formulario.addEventListener('keyup', filtrar)