const regex = {
  name: "[a-zA-Z0-9\s]+[^0-9]",
  cnpj: "^\\d{14}$",
  email: "^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.([a-z]+))?(\.([a-z]+)?)?$",
  password: "^[a-zA-Z0-9]{12,32}",
  telefone: "^\\d{10}$",
  celular: "^\\d{11}$",
  "cc-owner": "[a-zA-Z\\s]+[^0-9]",
  "cc-number": "^\\d{16}$",
  "cc-ccv": "^\\d{3}$",
  "cc-validity": "^\\d{4}\\-(0?[1-9]|1[012])$",
  "cc-ccv": "\\d{3}",
};

function validarCampo(campo) {
  return new RegExp(regex[campo.name]).test(campo.value);
}

export function validarInput(e) {
  const campo = e.target;
  const nomeCampo = campo.name;
  const mensagemErro = document.getElementById(`${nomeCampo}-error`);
  const campoValido = validarCampo(campo);
  if (!campoValido) {
    mensagemErro.style.display = "block";
    campo.style.borderColor = "red";
  } else {
    mensagemErro.style.display = "none";
    campo.style.borderColor = "#9a9a9a";
  }
}

export function validarSelect(e) {
  const select = e.target;
  const mensagemErro = document.getElementById(`${select.id}-error`);
  if (select.value.trim().length === 0) {
    mensagemErro.style.display = "block";
    select.style.borderColor = "red";
  } else {
    mensagemErro.style.display = "none";
    select.style.borderColor = "#9a9a9a";
  }
}