import Lista from "../../components/Lista"
import Item from "../../components/Item"

export default function componenteComFilhos(){
    return (
        <div>
            <Lista>
                <Item conteudo="Item1"/>
                <Item conteudo="Item2"/>
                <Item conteudo="Item3"/>
            </Lista>
        </div>
    )
}