import { Component } from "react";

export default class ContadorClass extends Component {
    state= {
        numero: this.props.valorInicial ?? 0,
        passo: this.props.passo ?? 1
    }

    inc(){
       this.setState({numero: this.state.numero + this.state.passo}) 
    }

    dec=()=>{
        this.setState({numero: this.state.numero - + this.state.passo}) 
     }    

    render(){
        return (
        <div>
            <h1>
                 Contador usando classe
            </h1>
            <h2>
                {this.state.numero}
            </h2> 
            <input type="number" min={1} max={100} value={this.state.passo} onChange={ev => this.setState({passo: +ev.target.value})} />
            <button onClick={() => this.inc()}>+</button>           
            <button onClick={() => this.dec()}>-</button>           
        </div>
        )
    }
}