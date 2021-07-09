import Layout from '../components/Layout'

export function getStaticProps(){
    return {
        props: {
            number: Math.random()
        }
    }
}

export default function Estatico(props) {
    return (
        <Layout titulo="Conteúdo Estático">
            <div>{props.number}</div>
        </Layout>)
}