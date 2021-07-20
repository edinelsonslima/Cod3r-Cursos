import If from "../../components/if";

export default function condicional1() {
  const numero = 456789;
  return (
    <div>
      <If teste={numero % 2 === 0}>O numero {numero} é par</If>
      <If teste={numero % 2 === 1}>O numero {numero} é impar</If>
    </div>
  );
}
