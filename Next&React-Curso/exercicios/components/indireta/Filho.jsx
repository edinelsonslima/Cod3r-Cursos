export default function Filho(props) {
  return (
    <div>
      <h1>Filho</h1>
      <button onClick={props.function}>Falar com o pai #01</button>
      <button onClick={() => props.function("Passei no ENEM")}>
        Falar com o pai #02
      </button>
      <button onClick={() => props.function("Passei no ENEM", "Lorem Ipsum", "Params3")}>
        Falar com o pai #03
      </button>
    </div>
  );
}
