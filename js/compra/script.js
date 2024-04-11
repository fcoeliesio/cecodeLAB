import { validarInput } from "../validacoes.js";
import { AtributosPlano } from "./components/AtributosPlano.view.js";
import TiposPlano from "./components/TiposPlano.js";

const brlFormatter = OSREC.CurrencyFormatter.getFormatter({
  currency: "BRL",
});

const atributosPlanoConteiner = document.getElementById("plans");
const selectPlano = document.getElementById("plan-select");
const precoAnualEl = document.getElementById("full-price");
const totalConteiner = document.getElementById("full-price-container");
const precoParcelaEl = document.getElementById("parcel-price");
const pagamentoAnual = document.getElementById("pay-annually");
const pagamentoMensal = document.getElementById("pay-monthly");
const parcelas = document.getElementById("parcels");
const inputs = document.querySelectorAll(".data-input");
const botaoSubmit = document.querySelector(".button-form");
const form = document.querySelector("form");
const validadeCartao = document.getElementById("cc-validity");

inputs.forEach(input => input.addEventListener("focusout", (e) => validarInput(e)));

pagamentoAnual.addEventListener("click", () => {
  let planoSelecionado = selectPlano.value;
  planoSelecionado = TiposPlano[planoSelecionado];
  totalConteiner.style.display = "block";
  parcelas.style.display = "inline";
  renderizarPrecoPlano(planoSelecionado);
});

pagamentoMensal.addEventListener("click", () => {
  let planoSelecionado = selectPlano.value;
  planoSelecionado = TiposPlano[planoSelecionado];
  totalConteiner.style.display = "none";
  parcelas.style.display = "none";
  renderizarPrecoPlano(planoSelecionado, "mensal");
});

window.addEventListener("load", () => {
  let planoSelecionado = selectPlano.value;
  planoSelecionado = TiposPlano[planoSelecionado];
  renderizarAtributosPlano(planoSelecionado);
  renderizarPrecoPlano(planoSelecionado);
});

selectPlano.addEventListener("change", () => {
  let planoSelecionado = selectPlano.value;
  planoSelecionado = TiposPlano[planoSelecionado];
  const lastChild = atributosPlanoConteiner.lastChild;
  atributosPlanoConteiner.removeChild(lastChild);
  renderizarAtributosPlano(planoSelecionado);
  if (pagamentoMensal.checked) {
    renderizarPrecoPlano(planoSelecionado, "mensal");
  } else {
    renderizarPrecoPlano(planoSelecionado);
  }
});

function renderizarAtributosPlano(plano) {
  const atributosPlano = new AtributosPlano(plano);
  atributosPlanoConteiner.appendChild(atributosPlano.render());
}

function renderizarPrecoPlano(plano, opcao) {
  if (opcao === "mensal") {
    const preco = brlFormatter(plano.precoMensal);
    precoParcelaEl.innerText = preco;
    precoParcelaEl.insertAdjacentText("beforeend", "/mês");
  } else {
    const preco = brlFormatter(plano.precoAnual);
    const parcelPrice = brlFormatter(plano.precoAnual / 12);
    precoAnualEl.innerText = preco;
    precoParcelaEl.innerText = parcelPrice;
  }
}

form.addEventListener("change", () => {
  if(form.checkValidity()) {
      botaoSubmit.disabled = false;
  } else {
      botaoSubmit.disabled = true;
  }
});

botaoSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  alert("Obrigado por compartilhar a sua dúvida. Entraremos em contato em beve através do e-mail fornecido.");
  form.reset();
  validadeCartao.type = "text";
});

validadeCartao.addEventListener("focusin", () => {
  validadeCartao.type = "month";
});
