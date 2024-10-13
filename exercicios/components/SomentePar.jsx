export default function SomentePar(props){
    let par= props.numero % 2 === 0;
    if(par){
        return <h1>{props.numero}</h1>
    } else{
        return null
    }
}