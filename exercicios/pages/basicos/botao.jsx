function acao1(){
    console.log("acao1")
}

export default function botao(){
    function acao2(){
        console.log("acao2")
    }

    function acao5(e){
        console.log(e)
    }

    function acao6(altKey){
        console.log(altKey)
    }
    return (
        <div>            
            <button onClick={acao1}>Click1</button>
            <button onClick={acao2}>Click2</button>
            <button onClick={function (){
                console.log("acao3")
            }}>Click3</button>
            <button onClick={() => console.log("acao4")}>
                Click4
            </button>
            <button onClick={acao5}>
                Click5
            </button>
            <button onClick={e => acao6(e.altKey)}>
                Click6
            </button>
            <div>
                <input type="text" onChange={e => console.log(e.target.value)}/>
            </div>
        </div>
    )
}