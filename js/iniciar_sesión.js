var form = document.getElementById('formLogin');
var mensajeExito = document.querySelector('.mensajeE');

form.onsubmit = function(e) {
    e.preventDefault();

    mensajeExito.classList.remove('mostrar');
    mensajeExito.textContent = '';

    var campos = form.querySelectorAll('input');
    campos.forEach(function(campo) {
        campo.parentElement.querySelector('.mensaje').textContent = '';
    });

    var correcto = true;

    var correo = form.correo.value.trim();
    var contra = form.contra.value.trim();

    if (correo === '' || correo.indexOf('@') === -1 || correo.indexOf('.') === -1) {
        form.correo.parentElement.querySelector('.mensaje').textContent = 'Correo no válido.';
        correcto = false;
    }

    if (contra === '') {
        form.contra.parentElement.querySelector('.mensaje').textContent = 'La contraseña es obligatoria.';
        correcto = false;
    }

    if (correcto) {
        form.submit();
        alert("Inicio de Sesión exitoso.");
    }
};

var google = document.querySelector('.google');

google.onclick = function() {
    alert("La opción de Google estará disponible pronto.");
};