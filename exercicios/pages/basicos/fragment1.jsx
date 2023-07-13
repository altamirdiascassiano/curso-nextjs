import React from "react"
export default function fragment(){
    return(
        <React.Fragment> 
            {/* o fragment deve ser usado pq no pode retornar jsx adjacentes */}
            <h1>texto 1</h1>
            <h2>texto 2</h2>
        </React.Fragment>
    )
}