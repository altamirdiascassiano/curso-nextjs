import produtos from '../../data/listaProdutos'

export default function repeticao2(){
    function renderizarLinhas(){
        return produtos.map(prd => {
            return (
                <tr key={prd.id}>
                    <td>{prd.id}</td>
                    <td>{prd.nome}</td>
                    <td>{prd.preco}</td>
                </tr>
            )
        })
    }
    return (
        <div>
            <table style={{border: "1px solid #000"}}>
                <thead>
                    <tr>
                        <th>
                            Código
                        </th>
                        <th>
                            Nome
                        </th>
                        <th>
                            Preço
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {renderizarLinhas()}
                </tbody>
            </table>
        </div>
    )
}