import Filho from "./Filho";

export default function Pai(props) {
  return (
    <div>
      <Filho familia="lima" nome="Edinelson" />
      <Filho nome="Lorem"  familia={props.familia} />
      <Filho {...props} nome="Nalice"/>
    </div>
  );
}
