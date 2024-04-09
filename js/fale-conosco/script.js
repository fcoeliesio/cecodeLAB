import { validacoes } from "./validacoes.js";

const inputs = document.querySelectorAll(".data-input");
const selects = document.querySelectorAll(".form-select");
inputs.forEach(input => input.addEventListener("focusout", (e) => validarInput(e)));
selects.forEach(select => select.addEventListener("focusout", (e) => validarSelect(e)));
const botaoSubmit = document.querySelector(".button-form");

function validarInput(e) {
    const campo = e.target;
    const nomeCampo = campo.name;
    const mensagemErro = document.getElementById(`${nomeCampo}-error`);
    const campoValido = validacoes[nomeCampo](e.target.value);
    if(!campoValido) {
        mensagemErro.style.display = "block";
        campo.style.borderColor = "red";
        botaoSubmit.disabled = true;
    } else {
        mensagemErro.style.display = "none";
        campo.style.borderColor = "#9a9a9a";
        botaoSubmit.disabled = false;
    }
}

function validarSelect(e) {
    const select = e.target;
    const mensagemErro = document.getElementById(`${select.id}-error`);
    if(select.value.trim().length === 0){
        mensagemErro.style.display = "block";
        select.style.borderColor = "red";
        botaoSubmit.disabled = true;
    } else {
        mensagemErro.style.display = "none";
        select.style.borderColor = "#9a9a9a";
        botaoSubmit.disabled = false;
    }
}

