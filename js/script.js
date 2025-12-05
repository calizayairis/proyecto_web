const Hambur = document.getElementById("hamburguesa");
const Menu = document.getElementById("menu");
Hambur.addEventListener("click", () => {
    Menu.classList.toggle("activo");
});
 
let tarjetas = document.querySelectorAll(".tip1");

let btnAtras = document.getElementById("Atras");
let btnSiguiente = document.getElementById("Siguiente");
let pagActual = document.getElementById("Actual");

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
        total = total + 1;
    }
}

function mostrar() {
    contarPorPantalla();

    // Ocultar todos
    let i = 0;
    while (i < tarjetas.length) {
        tarjetas[i].classList.add("oculto");
        i++;
    }

    // Mostrar solo los de la página actual
    let inicio = (pag - 1) * porPag;
    let fin = inicio + porPag;

    let j = inicio;
    while (j < fin && j < tarjetas.length) {
        tarjetas[j].classList.remove("oculto");
        j++;
    }

    pagActual.textContent = "Página " + pag + " de " + total;
}

btnSiguiente.onclick = function () {
    if (pag < total) {
        pag++;
        mostrar();
    }
};

btnAtras.onclick = function () {
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
