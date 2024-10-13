import { useState } from "react";
import MegasenaDisplayValue from "../../components/megasenaDisplayValue";

export default function megasena(){
    let [resultado, setResultado]= useState([])
    let [qtdeNumeros, setQtdeNumeros]= useState(6)

    function apostar(){
        let resultados = [];                
        console.log(`Qtde Num Aposta= ${qtdeNumeros}`)
        for(let i = 0; i<qtdeNumeros; i++){
            let resultado= Math.floor(Math.random() * 60) + 1;
            while(resultados.includes(resultado)){
                resultado= Math.floor(Math.random() * 60) + 1;
            }
            resultados[i]= resultado;
            console.log(resultados[i])
        }
        setResultado(resultados.sort((a, b) => a - b));        
    }

    return (
        <div>
            <h3>Megasena</h3>
            {/* <h4>{resultado}</h4> */}
            <MegasenaDisplayValue rs={resultado} />
            <input type="number" min={6} max={20} name="QtdeNumerosAposta" value={qtdeNumeros} onChange={(e) => setQtdeNumeros(Number(e.target.value))}/>            
            <button onClick={apostar}> Apostar</button>
            

        </div>
    )
}