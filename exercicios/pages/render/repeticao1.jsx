export default function repeticao1(){
    const pessoas= [
        "Altamir",
        "Carlos",
        "Mariana",
        "Maria"
    ]
    function renderizarLista(){
        const itens = [];
        pessoas.forEach(element => {
            itens.push(<li key={Math.random()}>{element}</li> );
        });
        return itens;
    }

    return (
        <ul>
            {renderizarLista()}
            ---------------------
            {pessoas.map((nome,i) => <li key={i}>{nome}</li>)}
        </ul>
    )
}