import { useState } from "react"
import Layout from "../components/Layout"

export default function Integracao() {

    const [cliente, setCliete] = useState({})
    const [codigo, setCodigo] = useState(1)

    async function obterCliente() {
        const resp = await fetch(`http://localhost:3000/api/clientes/${codigo}`)
        const dados = await resp.json()
        setCliete(dados)
    }

    return (
        <Layout>
            <div>
                <input
                    type="number"
                    value={codigo}
                    onChange={e => setCodigo(e.target.value)}
                />
                <button onClick={obterCliente}>
                    Obter Cliente
                </button>

            </div>
            <ul>
                <li>codigo: {cliente.id} </li>
                <li>nome: {cliente.nome} </li>
                <li>email: {cliente.email} </li>
            </ul>
        </Layout>
    )
}