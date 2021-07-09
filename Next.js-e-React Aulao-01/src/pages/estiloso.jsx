import styles from '../styles/Estiloso.module.css';
import Layout from '../components/Layout';


export default function Estiloso() {
    return (
        <Layout titulo = "Titulo do estiloso">
            <div className={styles.roxo}>
                <h1>Estilo usando modules css</h1>
            </div>
        </Layout>
    )
}