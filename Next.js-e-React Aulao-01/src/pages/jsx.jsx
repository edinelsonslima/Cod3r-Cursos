import Layout from '../components/Layout'

export default function Jsx() {
    const titulo = <h1>Jsx é um conceito central</h1>

    function subtitle() {
        return <h2>{"muito legal".toUpperCase()}</h2>
    }

    return (
        <Layout titulo="Entendendo o JSX">
            {titulo}
            {subtitle()}

            <p>
                {JSON.stringify(
                    {
                        nome: 'Edinelson',
                        idade: 22
                    }
                )}
            </p>
        </Layout>
    )
}