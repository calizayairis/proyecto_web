const Hambur = document.getElementById("hamburguesa");
const Menu = document.getElementById("menu");
Hambur.addEventListener("click", () => {
    Menu.classList.toggle("activo");
});
 
/* Paginador */
let tarjetas = document.querySelectorAll(".tip1");
let Atras = document.getElementById("Atras");
let Siguiente = document.getElementById("Siguiente");
let Actual = document.getElementById("Actual");

let pag = 1;
let porPag = 3;
let total = 1;

function contarPorPantalla() {
    if (window.innerWidth <= 650) {
        porPag = 1;
    } else if (window.innerWidth <= 1000) {
        porPag = 2;
    } else {
        porPag = 3;
    }

    let t = tarjetas.length;
    total = parseInt(t / porPag);
    if (t % porPag !== 0) {
        total += 1;
    }
}

function mostrar() {
    contarPorPantalla();

    let i = 0;
    while (i < tarjetas.length) {
        tarjetas[i].classList.add("oculto");
        i++;
    }

    let inicio = (pag - 1) * porPag;
    let fin = inicio + porPag;

    let j = inicio;
    while (j < fin && j < tarjetas.length) {
        tarjetas[j].classList.remove("oculto");
        j++;
    }

    Actual.textContent = "Página " + pag + " de " + total;
}

Siguiente.onclick = function () {
    if (pag < total) {
        pag++;
        mostrar();
    }
};

Atras.onclick = function () {
    if (pag > 1) {
        pag--;
        mostrar();
    }
};

window.addEventListener("resize", function () {
    let antes = porPag;
    contarPorPantalla();
    if (antes !== porPag) {
        pag = 1;
        mostrar();
    }
});
mostrar();

/* formulario */
var form = document.getElementById('formConsulta');
var mensajeExito = document.querySelector('.mensaje-exito');

form.onsubmit = function(e) {
    e.preventDefault();

    mensajeExito.classList.remove('mostrar');
    mensajeExito.textContent = '';
    
    var campos = form.querySelectorAll('input, textarea');
    campos.forEach(function(campo) {
        campo.parentElement.querySelector('.mensaje').textContent = '';
    });

    var correcto = true;

    if (form.campo1.value.trim() === '') {
        form.campo1.parentElement.querySelector('.mensaje').textContent = 'Nombres es obligatorio.';
        correcto = false;
    }

    if (form.campo2.value.trim() === '') {
        form.campo2.parentElement.querySelector('.mensaje').textContent = 'Apellidos es obligatorio.';
        correcto = false;
    }
    var email = form.campo3.value.trim();
    if (email === '' || email.indexOf('@') === -1 || email.indexOf('.') === -1) {
        form.campo3.parentElement.querySelector('.mensaje').textContent = 'Correo no válido.';
        correcto = false;
    }
    var celular = form.campo4.value.trim();
    if (celular === '' || isNaN(celular) || celular.length < 7) {
        form.campo4.parentElement.querySelector('.mensaje').textContent = 'Número de celular no válido.';
        correcto = false;
    }
    if (form.campo5.value.trim() === '') {
        form.campo5.parentElement.querySelector('.mensaje').textContent = 'Consulta es obligatoria.';
        correcto = false;
    }

    if (correcto) {
        // Alerta simple con los datos de la consulta
        var parts = [];
        if (form.campo1) parts.push('nombre: ' + form.campo1.value.trim());
        if (form.campo2) parts.push('apellido: ' + form.campo2.value.trim());
        if (form.campo3) parts.push('correo: ' + form.campo3.value.trim());
        if (form.campo4) parts.push('celular: ' + form.campo4.value.trim());
        if (form.campo5) parts.push('consulta: ' + form.campo5.value.trim());
        alert('Datos de la consulta:\n\n' + parts.join('\n'));

        mensajeExito.textContent = '¡Consulta enviada correctamente!';
        mensajeExito.classList.add('mostrar');
        form.reset();
    }
};
