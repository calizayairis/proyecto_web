var form = document.getElementById('formCita');
var mensajeExito = document.querySelector('.mensajeE');

form.onsubmit = function(e) {
    e.preventDefault();

    var campos = form.querySelectorAll('input, select');
    campos.forEach(function(campo) {
        campo.parentElement.querySelector('.mensaje').textContent = '';
    });
    mensajeExito.classList.remove('mostrar');

    var correcto = true;

    if (form.nombre.value.trim() === '') {
        form.nombre.parentElement.querySelector('.mensaje').textContent = 'El nombre es obligatorio';
        correcto = false;
    }

    if (form.apellido.value.trim() === '') {
        form.apellido.parentElement.querySelector('.mensaje').textContent = 'El apellido es obligatorio';
        correcto = false;
    }

    if (form.mascota.value.trim() === '') {
        form.mascota.parentElement.querySelector('.mensaje').textContent = 'Nombre de la mascota es obligatorio';
        correcto = false;
    }

    if (form.celular.value.trim() === '' || isNaN(form.celular.value) || form.celular.value.length < 7) {
        form.celular.parentElement.querySelector('.mensaje').textContent = 'Número de celular no válido';
        correcto = false;
    }

    if (form.correo.value.trim() === '' || form.correo.value.indexOf('@') === -1 || form.correo.value.indexOf('.') === -1) {
        form.correo.parentElement.querySelector('.mensaje').textContent = 'Correo no válido';
        correcto = false;
    }

    if (form.servicio.value === '') {
        form.servicio.parentElement.querySelector('.mensaje').textContent = 'Selecciona un servicio';
        correcto = false;
    }

    if (form.fecha.value === '') {
        form.fecha.parentElement.querySelector('.mensaje').textContent = 'Selecciona una fecha';
        correcto = false;
    }

    if (form.hora.value === '') {
        form.hora.parentElement.querySelector('.mensaje').textContent = 'Selecciona una hora';
        correcto = false;
    }

    if (correcto) {
        // Alerta simple con los datos de la cita
        var parts = [];
        if (form.nombre) parts.push('nombre: ' + form.nombre.value.trim());
        if (form.apellido) parts.push('apellido: ' + form.apellido.value.trim());
        if (form.mascota) parts.push('mascota: ' + form.mascota.value.trim());
        if (form.celular) parts.push('celular: ' + form.celular.value.trim());
        if (form.correo) parts.push('correo: ' + form.correo.value.trim());
        if (form.servicio) parts.push('servicio: ' + form.servicio.value);
        if (form.fecha) parts.push('fecha: ' + form.fecha.value);
        if (form.hora) parts.push('hora: ' + form.hora.value);
        alert('Datos de la cita:\n\n' + parts.join('\n'));

        mensajeExito.textContent = '¡Cita agendada correctamente!';
        mensajeExito.classList.add('mostrar');

        mensajeExito.onclick = function() {
            window.location.href = "index.html";
        };

        form.reset();
    }
};

