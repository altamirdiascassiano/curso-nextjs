export default function jsx4(){
    
    const subtitulo= "Valor do JS";
    return(
        <div> 
            <h1>Integração JS e JSX</h1>
            <h2>{subtitulo}</h2>
            <h4>{Math.max(10,999)}</h4>            
            <h5>{sayHello()}</h5> 
        </div>
    )

    function sayHello(){
        return "Olá!";
    }
}