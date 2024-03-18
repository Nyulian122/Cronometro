let div_crono = document.querySelector(".cronometro");
let segundos;



function iniciar_crono(minutos, segundos_param) {
    segundos = minutos * 0 + segundos_param;
    
    function actualizar() {
        if (segundos <= 0) {
            clearInterval(tiempo);
            div_crono.innerHTML = "00:00";
            return;
        }

        if (segundos == 1) {
            clearInterval(tiempo);
        }

        segundos--;

        if (segundos == 0) {
            if (minutos >= 1) {
                segundos = 60;
                minutos--;
            }
        }

        div_crono.innerHTML = "";

        let displayMins = minutos < 10 ? "0" + minutos : minutos;
        let displaySecs = segundos < 10 ? "0" + segundos : segundos;

        div_crono.innerHTML = `${displayMins}:${displaySecs}`;
    }

    let tiempo = setInterval(actualizar, 1000);
}

let form = document.createElement("form");
form.innerHTML = `
    <label class="titulo">Agrega el tiempo</label>
    <input class="entrada" type="text">
    <button class="boton">Aceptar</button>
`;
document.body.appendChild(form);


iniciar_crono(12,5);
