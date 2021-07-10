import Estilo from '../../components/Estilo'

export default function usandoEstilo() {
    return (
        <>
            <h1>Estilo</h1>
            <hr />
            <Estilo numero={-5} center classe/>
            <hr/>
            <Estilo numero={0} color="#fff"/>
        </>
    )
}