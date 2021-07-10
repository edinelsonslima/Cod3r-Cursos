// Terceira versão da lista

export default function lista2() {
    return (
        <div>
            <div>
                {gerarLista(20)}
            </div>
            <div>
                {gerarLista(5)}
            </div>
        </div>
    )
}

function gerarLista(final = 10) {
    const lista = []
    for (let i = 0; i <= final; i++) {
        lista.push(<span>{i},</span>)
    }

    return lista
}