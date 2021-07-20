export default function Repeticao1() {
  const listaAprovados = [
    "Ana",
    "Bia",
    "Carlos",
    "Daniel",
    "João",
    "Laura",
    "Maria",
  ];

  function renderizarLista() {
    return listaAprovados.map((nome, index) => <li key={index}>{nome}</li>);
  }

  return <ul>{renderizarLista()}</ul>;
}

//   function renderizarLista() {
//     const itens = [];
//     for (let i = 0; i < listaAprovados.length; i++) {
//       itens.push(<li key={i}>{listaAprovados[i]}</li>);
//     }
//     return itens;
//   }