import Lista from "../../components/Lista";
import Item from "../../components/Item";

export default function componenteComFilho(props) {
    return(
        <div>
            <Lista>
                <Item conteudo="Item #11"/>
                <Item conteudo="Item #12"/>
                <Item conteudo="Item #13"/>
            </Lista>
        </div>
    )
}