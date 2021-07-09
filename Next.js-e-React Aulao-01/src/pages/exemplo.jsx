import Cabecalho from "../components/Cabecalho"
import Layout from "../components/Layout"

export default function Exemplo() {
    return (
        <Layout titulo="Usando componentes">
            <Cabecalho titulo = "Este é o titulo 1"/>
            <Cabecalho titulo = "Este é o titulo 2"/>
            <Cabecalho titulo = "Este é o titulo 3"/>
        </Layout>
    )
}