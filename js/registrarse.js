var form = document.getElementById("formRegistro");
var mensajeE = document.getElementById("mensajeE");
var google = document.querySelector(".google");

form.onsubmit = function(e) {
    e.preventDefault();

    var nombre = form.nombre.value.trim();
    var correo = form.correo.value.trim();
    var contra = form.contra.value.trim();

    limpiar("mNombre");
    limpiar("mCorreo");
    limpiar("mContra");

    var ok = true;

    if (nombre === "") {
        mostrar("mNombre", "Ingresa tu nombre.");
        ok = false;
    }

    if (correo === "") {
        mostrar("mCorreo", "Ingresa tu correo.");
        ok = false;
    } else if (correo.indexOf("@") === -1) {
        mostrar("mCorreo", "Correo inválido.");
        ok = false;
    }

    if (contra === "") {
        mostrar("mContra", "Ingresa una contraseña.");
        ok = false;
    } else if (contra.length < 6) {
        mostrar("mContra", "Mínimo 6 caracteres.");
        ok = false;
    }

    if (ok) {
        // Alerta simple con los datos (sin contraseñas)
        var parts = [];
        if (form.nombre) parts.push('nombre: ' + form.nombre.value.trim());
        if (form.correo) parts.push('correo: ' + form.correo.value.trim());
        alert('Datos del formulario:\n\n' + parts.join('\n'));

        mensajeE.classList.add("mostrar");
    }
};

mensajeE.onclick = function() {
    window.location.href = "index.html";
};

google.onclick = function() {
    alert("La opción de Google estará disponible pronto.");
};

function mostrar(id, texto) {
    document.getElementById(id).innerText = texto;
}

function limpiar(id) {
    document.getElementById(id).innerText = "";
}

