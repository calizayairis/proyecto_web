var form = document.getElementById('formLogin');
var mensajeE = document.querySelector('.mensajeE');
var google = document.querySelector('.google');

form.onsubmit = function(e) {
    e.preventDefault();

    mensajeE.classList.remove('mostrar');
    mensajeE.textContent = '';

    form.querySelectorAll('.mensaje').forEach(function(m) {
        m.textContent = '';
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
        // Alerta simple: mostrar solo el correo
        alert('Datos del formulario:\n\n' + 'correo: ' + correo);

        mensajeE.textContent = '¡Inicio de sesión exitoso!';
        mensajeE.classList.add('mostrar');
    }
};

mensajeE.onclick = function() {
    window.location.href = 'index.html';
};

google.onclick = function() {
    alert("La opción de Google estará disponible pronto.");
};
