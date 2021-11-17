// const invitados = [
//     { nombre: 'Sebastian Hernandez', nombre_primero: 'Sebastian', apellido: 'Hernandez', acompañante: 'alejandra riascos', acompañante_primero: 'Alejandra' },
//     { nombre: 'Juan Salazar', nombre_primero: 'Juan', apellido: 'Salazar', acompañante: 'Juan Jose', acompañante_primero: 'Jose' },
//     { nombre: 'Maria', nombre_primero: 'Maria', apellido: 'Riascos', acompañante: 'Johan Hernandez', acompañante_primero: 'Johan' },
// ]


const xhttp = new XMLHttpRequest();
xhttp.open('GET', 'json/invitados.json', true);
xhttp.send();

xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        let invitados = JSON.parse(this.responseText);

        const formulario = document.querySelector('#formulario');
        const boton = document.querySelector('#buscar');
        const resultado = document.querySelector('#resultado');

        const filtrar = () => {
            // console.log(formulario.value);
            resultado.innerHTML = '';
            const texto = formulario.value.toLowerCase();
            for (let invitado of invitados) {
                let nombre = invitado.nombre.toLowerCase();
                let ocultar = document.querySelector('.vuela1');
                ocultar.style.display = 'none';
                let apellido = invitado.apellido.toLowerCase();
                if(formulario.value === ''){
                    resultado.innerHTML += `
                    <div class='invitado'>
                    <div invitado_texto>
                        <p class="momento-intimo alerta">Debes ingresar tu nombre y apellido</p>
                    </div>
                    `
                    break;
                }
                if (nombre.lastIndexOf(texto) !== invitado.nombre && nombre.lastIndexOf(texto) !== -1) {
                    if(invitado.acompañante === ""){
                        resultado.innerHTML += `
                    <div class='invitado'>
                    <div invitado_texto>
                        <p class="invitado_nombre">${invitado.nombre_primero}</p>
                        <p class="invitacion">TE ESPERAMOS</p><br>
                        <p class="invitacion">PARA CELEBRAR CON NOSOTROS</p>
                    </div>
                    <div class='invitado_ubicacion'>
                        <div>
                            <p class="direccion">VEREDA NEMQUETEBA. COPACABANA, ANTIOQUIA.</p>
                            <p class="nombre_lugar">PLATAFORMA 9<span>¾</span></p>
                        </div>
                        <div class="horario">
                            <img src="img/Icon ionic-md-time.svg" class="horario_img" alt="">
                            <p class="hora">07:30 PM</p>
                        </div>
                        <div class='ubicacion'>
                                <a target="blank"
                                    href="https://goo.gl/maps/jkrbYdjJ8gmTrznF6"><img
                                        src="img/Icon material-location-on.svg" class="como_llegar_img" alt="">VER UBICACIÓN</a>
                            </div>
                    </div>
                    <div class='invitado_img'>
                        <img src="img/fecha.png" class="calendario" alt="imagen calendario">
                    </div>
                </div>
                
            `

                    break;
                    }
                    resultado.innerHTML += `
                    <div class='invitado'>
                    <div invitado_texto>
                        <p class="invitado_nombre">${invitado.nombre_primero}</p>
                        <p class="invitacion">TE ESPERAMOS A TI Y A</p>
                        <p class="invitado_nombre">${invitado.acompañante_primero}</p>
                        <p class="invitacion">PARA CELEBRAR CON NOSOTROS</p>
                    </div>
                    <div class='invitado_ubicacion'>
                        <div>
                            <p class="direccion">VEREDA NEMQUETEBA. COPACABANA, ANTIOQUIA.</p>
                            <p class="nombre_lugar">PLATAFORMA 9<span>¾</span></p>
                        </div>
                        <div class="horario">
                            <img src="img/Icon ionic-md-time.svg" class="horario_img" alt="">
                            <p class="hora">07:30 PM</p>
                        </div>
                        <div class='ubicacion'>
                                <a target="blank"
                                    href="https://goo.gl/maps/jkrbYdjJ8gmTrznF6"><img
                                        src="img/Icon material-location-on.svg" class="como_llegar_img" alt="">VER UBICACIÓN</a>
                            </div>
                    </div>
                    <div class='invitado_img'>
                        <img src="img/fecha.png" class="calendario" alt="imagen calendario">
                    </div>
                </div>
                
            `

                    break;
                }
            }

            if (resultado.innerHTML === '') {
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
                <p class="momento-intimo">ESTE ES UN MOMENTO ÍNTIMO QUE VAMOS A COMPARTIR</p>
                <p class="momento-intimo">CON LAS PERSONAS MÁS CERCANAS.</p>
                </div>
                <div class="no_invitado_der">
                <img src="img/fecha.png" class="calendario"
                            alt="imagen calendario">
                </div>
                </div>
            `
            }
            //}


        }
        boton.addEventListener('click', filtrar);
    }
}

// formulario.addEventListener('keyup', filtrar)