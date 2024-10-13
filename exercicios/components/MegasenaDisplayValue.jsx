export default function MegasenaDisplayValue(props){

    console.log("props")
    console.log(props)
    const itemStyle={        
        backgroundColor: 'black',
        color: 'white',
        borderRadius: '50%', // Formato arredondado
        display: 'flex',
        padding: '10px',
        margin: '5px',
        textAlign: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px', // Largura fixa
        height: '50px' // Altura fixa
    }

    return (
        <div>
        {props.rs.length > 0 ? (
          props.rs.map((valor, index) => (
            <div key={index} style={itemStyle}>
              {valor}
            </div>
          ))
        ) : (
          <p>Nenhum número sorteado ainda.</p>
        )}
      </div>
    );
  }