import Filho from "./Filho";

export default function Pai(props) {

  function falarComigo(params1, params2, params3) {
    console.log(params1, params2, params3)
  }

  return (
    <div>
      <Filho function={falarComigo}/>
    </div>
  );
}
