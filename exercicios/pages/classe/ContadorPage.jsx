import { Component } from "react";
import Contador from "../../components/ContadorClass"

export default class ContadorPage extends Component {
        
    render(){
        return (
            <>
            <Contador  valorInicial={100} passo={3}/> 
            <Contador /> 
            </>
        )
    }
}