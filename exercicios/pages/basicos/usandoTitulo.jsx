import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return(
        <div>   
            <Titulo
            pequeno= {true}
            principal= "#############"
            secundario= "@@@@@@@@@@"           
            /> 
            <Titulo
            pequeno
            principal= "#############"
            secundario= "@@@@@@@@@@"           
            /> 
            <Titulo
            principal= "Valor do Principal"
            secundario= "secundário"            
            />            
        </div>
    )
}