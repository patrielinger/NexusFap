


// copiar

function copiarTexto() {
    var elementoCopiar = document.getElementById("copiar");
    var texto = elementoCopiar.innerText;

    navigator.clipboard.writeText(texto)
        .then(function () {
            console.log("Texto copiado al portapapeles: " + texto);
            alert("Texto copiado al portapapeles");
        })
        .catch(function (error) {
            console.error("Error al copiar el texto: ", error);
            alert("Error al copiar el texto");
        });
}

// links

function cambiarDisplay() {
    variosLinks = document.getElementById("varios_links");
    milanesaFuap = document.getElementById("milanesa_fuap");
    extencion = document.getElementById("extencion");
    ghdf = document.getElementById("ghdf");
    aaaaaa = document.getElementById("aaaaaa");
    bbb = document.getElementById("bbb");

    variosLinks.style.display = "block";
    milanesaFuap.style.display = "none";
    extencion.style.display = "block";
    ghdf.style.display = "block";
    aaaaaa.style.display = "none";
    bbb.style.display = "block";
}

function cambiarDisplay1() {
    var variosLinks = document.getElementById("link_propio");
    var milanesaFuap = document.getElementById("milanesa_fuap");

    variosLinks.style.display = "block";
    milanesaFuap.style.display = "none";
}

// codigo random

function generarCodigo() {
    var caracteres = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUxXzZyYñÑvV123456789";
    var codigo = "";

    for (var i = 0; i < 5; i++) {
        var indice = Math.floor(Math.random() * caracteres.length);
        codigo += caracteres.charAt(indice);
    }

    document.getElementById("codigoDiv").innerText = codigo;
}

// normal

function imprimirEnAside200() {
    var textoInput200 = document.getElementById("textoInput200").value;
    var elementosAside = document.querySelectorAll("#elemento200");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput200;
    }
}

function imprimirEnAside10() {
    var textoInput10 = document.getElementById("textoInput10").value;
    var elementosAside = document.querySelectorAll("#elemento10");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput10;
    }
}

function imprimirEnAside1() {
    var textoInput1 = document.getElementById("textoInput1").value;
    var elementosAside = document.querySelectorAll("#elemento1");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput1;
    }
}

function imprimirEnAside2() {
    var textoInput2 = document.getElementById("textoInput2").value;
    var elementosAside = document.querySelectorAll("#elemento2");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput2;
    }
}

function imprimirEnAside3() {
    var textoInput3 = document.getElementById("textoInput3").value;
    var elementosAside = document.querySelectorAll("#elemento3");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput3;
    }
}

function imprimirEnAside4() {
    var textoInput4 = document.getElementById("textoInput4").value;
    var elementosAside = document.querySelectorAll("#elemento4");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput4;
    }
}

function imprimirEnAside5() {
    var textoInput5 = document.getElementById("textoInput5").value;
    var elementosAside = document.querySelectorAll("#elemento5");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput5;
    }
}

function imprimirEnAside6() {
    var textoInput6 = document.getElementById("textoInput6").value;
    var elementosAside = document.querySelectorAll("#elemento6");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput6;
    }
}

function imprimirEnAside7() {
    var textoInput7 = document.getElementById("textoInput7").value;
    var elementosAside = document.querySelectorAll("#elemento7");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput7;
    }
}

function imprimirEnAside8() {
    var textoInput8 = document.getElementById("textoInput8").value;
    var elementosAside = document.querySelectorAll("#elemento8");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput8;
    }
}

function imprimirEnAside9() {
    var textoInput9 = document.getElementById("textoInput9").value;
    var elementosAside = document.querySelectorAll("#elemento9");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput9;
    }
}
// extra

function imprimirEnAside() {
    var textoInput = document.getElementById("textoInput").value;
    var elementosAside = document.querySelectorAll("#elemento1");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput;
    }
}

function imprimirEnAside() {
    var textoInput = document.getElementById("textoInput").value;
    var elementosAside = document.querySelectorAll("#elemento1");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput;
    }
}

function imprimirEnAside() {
    var textoInput = document.getElementById("textoInput").value;
    var elementosAside = document.querySelectorAll("#elemento1");

    for (var i = 0; i < elementosAside.length; i++) {
        elementosAside[i].innerText = textoInput;
    }
}



function modificarParte() {
    let nuevoTexto = document.getElementById("nuevo-texto").value;

    let parteModificar = document.getElementById("parte-modificar");

    parteModificar.innerHTML = nuevoTexto;
}

function modificarParte1() {
    let nuevoTexto = document.getElementById("nuevo-texto1").value;

    let parteModificar = document.getElementById("parte-modificar1");

    parteModificar.innerHTML = nuevoTexto;
}

function modificarParte2() {
    let nuevoTexto = document.getElementById("nuevo-texto2").value;

    let parteModificar = document.getElementById("parte-modificar2");

    parteModificar.innerHTML = nuevoTexto;
}

function modificarParte3() {
    let nuevoTexto = document.getElementById("nuevo-texto3").value;

    let parteModificar = document.getElementById("parte-modificar3");

    parteModificar.innerHTML = nuevoTexto;
}

function modificarParte4() {
    let nuevoTexto = document.getElementById("nuevo-texto4").value;

    let parteModificar = document.getElementById("parte-modificar4");

    parteModificar.innerHTML = nuevoTexto;
}
document.addEventListener("keyup", e => {

    if (e.target.matches("#buscador")) {

        if (e.key === "Escape") e.target.value = ""

        document.querySelectorAll(".juego").forEach(fruta => {

            fruta.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                ? fruta.classList.remove("filtro")
                : fruta.classList.add("filtro")
        })
    }
})




function abrir() {
    var aside = document.getElementById("asideee");
    if (aside.style.display === "none") {
        aside.style.display = "inline-block";
    } else {
        aside.style.display = "none";
    }
}
function mostrarCartel111() {
    var cartel = document.getElementById("miCartel111");
    cartel.style.display = "block";
}
function mostrarCartel() {
    var cartel = document.getElementById("miCartel");
    cartel.style.display = "block";
}
function mostrarCartel10() {
    var cartel = document.getElementById("miCartel0");
    cartel.style.display = "block";
}
function mostrarCartel2() {
    var cartel1 = document.getElementById("miCartel1");
    cartel1.style.display = "block";
}
function mostrarCartel3() {
    var cartel2 = document.getElementById("miCartel2");
    cartel2.style.display = "block";
}
function mostrarCartel4() {
    var cartel3 = document.getElementById("miCartel3");
    cartel3.style.display = "block";
}
function mostrarCartel5() {
    var cartel4 = document.getElementById("miCartel4");
    cartel4.style.display = "block";
}
function mostrarCartel6() {
    var cartel5 = document.getElementById("miCartel5");
    cartel5.style.display = "block";
}
function mostrarCartel520() {
    var cartel5 = document.getElementById("miCartel520");
    cartel5.style.display = "block";
}


//cerrar
function ocultarCartel() {
    var carteles = document.getElementsByClassName("cartel");

    for (var i = 0; i < carteles.length; i++) {
        carteles[i].style.display = "none";
    }
}
