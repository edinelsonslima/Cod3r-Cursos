import style from './integracao2.module.css'

export default function integracao(){
    return (
        <div id={style.integracao2}>
            <div className={style.vermelha}>Texto #01</div>
            <div className={style.azul}>Texto #02</div>
            <div className={style.branca}>Texto #03</div>
        </div>
    )
}