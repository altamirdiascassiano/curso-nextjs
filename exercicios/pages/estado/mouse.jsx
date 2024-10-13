import { useState } from "react"

export default function mouse(){ 
    const [x,setX]= useState(0);
    const [y,setY]= useState(0);   
    
    //forma de obter valores
    // nome técnico: Destructuring 
    const numList = [10,20,30,40];
    const [a,b,c,d,e] = numList;
    console.log(`a ${a}`)
    console.log(`b ${b}`)
    console.log(`c ${c}`)
    console.log(`d ${d}`)


    const estilo = {
        display: "flex",
        flexDirection: "column",
        justifyContent:"center",
        alignItems: "center",
        backgroundColor: "#222",
        color: "#fff",
        height: "100vh"        
    }

    function quandoMover(ev){
        setX(ev.clientX);
        setY(ev.clientY);
    }

    return (
        <div style={estilo} onMouseMove={quandoMover}>
            <span>Eixo X: {x}</span>
            <span>Eixo Y: {y}</span>
        </div>
    )
}