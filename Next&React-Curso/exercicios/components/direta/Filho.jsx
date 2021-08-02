export default function Filho(props){
    return(
        <div style={{display:"flex", gap:"10px"}}>
            <h1>{props.nome}</h1>
            <h2>{props.familia}</h2>
        </div>
    )
}