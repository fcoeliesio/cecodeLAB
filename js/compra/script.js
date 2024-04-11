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

pagamentoAnual.addEventListener("click", () => {
    let planoSelecionado = selectPlano.value;
    planoSelecionado = TiposPlano[planoSelecionado];
    totalConteiner.style.display = "block";
    parcelas.style.display = "inline"
    renderizarPrecoPlano(planoSelecionado);
});

pagamentoMensal.addEventListener("click", () => {
    let planoSelecionado = selectPlano.value;
    planoSelecionado = TiposPlano[planoSelecionado];
    totalConteiner.style.display = "none";
    parcelas.style.display = "none";
    renderizarPrecoPlano(planoSelecionado, "mensal");
})

window.addEventListener("load", () => {
    let planoSelecionado = selectPlano.value;
    planoSelecionado = TiposPlano[planoSelecionado];
    renderizarAtributosPlano(planoSelecionado);
    renderizarPrecoPlano(planoSelecionado)
});

selectPlano.addEventListener("change", () => {
    let planoSelecionado = selectPlano.value;
    planoSelecionado = TiposPlano[planoSelecionado];
    const lastChild = atributosPlanoConteiner.lastChild;
    atributosPlanoConteiner.removeChild(lastChild);
    renderizarAtributosPlano(planoSelecionado);
    renderizarPrecoPlano(planoSelecionado);
})

function renderizarAtributosPlano(plano) {
    const atributosPlano = new AtributosPlano(plano);
    atributosPlanoConteiner.appendChild(atributosPlano.render());
}

function renderizarPrecoPlano(plano, opcao) {
    if(opcao === "mensal"){
        const preco = brlFormatter(plano.precoMensal)
        precoParcelaEl.innerText = preco;
        precoParcelaEl.insertAdjacentText("beforeend", "/mês");
    } else {
        const preco = brlFormatter(plano.precoAnual);
        const parcelPrice = brlFormatter(plano.precoAnual/12);
        precoAnualEl.innerText = preco;   
        precoParcelaEl.innerText = parcelPrice;
    }
}

