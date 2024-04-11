export class AtributosPlano {
  constructor(tipoPlano) {
    this.tipoPlano = tipoPlano;
  }

  montarLista() {
    const lista = document.createElement("ul");
    lista.id = "plan-attributes";
    return lista;
  }

  montarItens() {
    const itens = [
      {
        qtd: this.tipoPlano.qtdUsuarios,
        rotulo: " Usuários",
        id: "users"
      },
      {
        qtd: this.tipoPlano.qtdDados,
        rotulo: "MB de dados",
        id: "data-storage"
      },
      {
        qtd: this.tipoPlano.qtdAnexos,
        rotulo: "GB de anexos e imagens",
        id: "assets-storage"
      }
    ];

    return itens.map(item => {
        const li = document.createElement("li");
        const span = document.createElement("span");
        span.innerText = item.qtd
        span.id = item.id;
        li.appendChild(span)
        li.insertAdjacentText("beforeend", item.rotulo);
        return li;
    })
  }

  render(){
    const ul = this.montarLista();
    const itens = this.montarItens();
    ul.append(...itens);
    return ul;
  }
}
