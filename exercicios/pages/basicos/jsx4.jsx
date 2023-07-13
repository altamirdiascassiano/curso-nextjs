export default function jsx4(){
    
    const subtitulo= "Estou no JS"
    
    return (
        <div>
            <h1>
                {subtitulo}
            </h1>
            <h1>
                {2+2}
            </h1>
            <h2>
                {fala("Olá!")}
            </h2>
        </div>
    )
}

function fala(texto){
    return "Falando: " + texto
}