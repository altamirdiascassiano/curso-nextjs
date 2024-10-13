import { useState } from "react"

export default function contador(){
    const [contagem, setContagem] = useState(0);

    function mais(){
        let val= contagem;
        val++;
        setContagem(val);
    }

    function menos(){
        let val= contagem;
        val--;
        setContagem(val);
    }

    return (
        <div>
            <h1>Contador</h1>
            valor= {contagem}
            <button onClick={mais}>+</button>
            <button onClick={menos}>-</button>
        </div>
    )
}