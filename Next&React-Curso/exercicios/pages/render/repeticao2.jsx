import lista from "../../data/listaProdutos";

export default function repticao2() {
  const comBorda = {
    border: "1px solid",
  };

  function renderizarLinhas() {
    return lista.map((produto) => {
      return (
        <tr key={produto.id}>
          <td style={comBorda}>{produto.id}</td>
          <td style={comBorda}>{produto.nome}</td>
          <td style={comBorda}>{produto.preco}</td>
        </tr>
      );
    });
  }

  return (
    <div>
      <table style={comBorda}>
        <thead>
          <tr>
            <th>Código</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{renderizarLinhas()}</tbody>
      </table>
    </div>
  );
}
