const invitados = [
    { nombre: 'Sebastian Hernandez', apellido: 'Hernandez', acompañante: 'alejandra riascos' },
    { nombre: 'Juan Pablo', apellido: 'Salazar', acompañante: 'Juan Jose' },
    { nombre: 'Maria', apellido: 'Riascos', acompañante: 'Johan Hernandez' },
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
        let apellido = invitado.apellido.toLowerCase();
        if (nombre.lastIndexOf(texto) !== invitado.nombre && nombre.lastIndexOf(texto) !== -1) {
            resultado.innerHTML += `
                <p>${invitado.nombre}</p>
                <p>TE ESPERAMOS A TI Y A</p>
                <p>${invitado.acompañante}</p>
                <p>PARA CELEBRAR CON NOSOTROS</p>
            `

            break;
        }
    }
    if (resultado.innerHTML === '') {
        resultado.innerHTML += `
                <p>${texto}</p>
                <p>NO ESTAS INVITAD@ A NUESTRA BODA</p>
                <p>ESTE ES UN MOMENTO ÍNTIMO QUE VAMOS A COMPARTIR CON LAS PERSONAS MÁS CERCANAS.</p>
            `
    }
    //}


}

boton.addEventListener('click', filtrar);
// formulario.addEventListener('keyup', filtrar)