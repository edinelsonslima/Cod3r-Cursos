export default function Estilo(props) {

    const estiloCondicional = {
        backgroundColor: props.numero >= 0 ? "#342c59" : "#4f8049",
        color: props.color,
        textAlign: props.center ? "center" : "left",
    }

    return (
            <div>
                <h1 style={estiloCondicional}>
                    Lorem Ipsum
                </h1>

                <h2 className={props.classe ? 'azul' : 'vermelho'}>Text #02</h2>
            </div>
    )
}