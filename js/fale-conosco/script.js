import { validarInput, validarSelect } from "../validacoes.js";

const inputs = document.querySelectorAll(".data-input");
const selects = document.querySelectorAll(".form-select");
inputs.forEach(input => input.addEventListener("focusout", (e) => validarInput(e)));
selects.forEach(select => select.addEventListener("focusout", (e) => validarSelect(e)));
const botaoSubmit = document.querySelector(".button-form");
const form = document.querySelector("form");
const concordoCheck = document.getElementById('concordo');

form.addEventListener("change", () => {
    if(form.checkValidity()) {
        concordoCheck.disabled = false;
    } else {
        concordoCheck.disabled = true;
    }
})

form.addEventListener("reset", () => {
    botaoSubmit.disabled = true;
    concordoCheck.disabled = true;
})

concordoCheck.addEventListener('change', (e) => {
    if(concordoCheck.checked){
        botaoSubmit.disabled = false;
    } else {
        botaoSubmit.disabled = true;
    }
})

botaoSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    alert("Obrigado por compartilhar a sua dúvida. Entraremos em contato em beve através do e-mail fornecido.");
    form.reset();
})