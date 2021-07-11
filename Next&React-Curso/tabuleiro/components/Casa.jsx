import styles from '../styles/Tabuleiro.module.css'

export default function Casa(props) {
    return (
        <div className={styles.casa} style={{
            border: props.impaPar ? "1px solid #000" : "1px solid  #fff",
            backgroundColor: props.impaPar ? "#fff" : "#000",
        }}></div>
    )
}