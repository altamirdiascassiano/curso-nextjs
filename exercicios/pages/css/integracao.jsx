import style from "./integracao.module.css"
export default function integracao(){
    return (
        <>
        <h1 className={style.vermelho} style={ {backgroundColor: "green"} }>vermelho</h1>
        <h1 className={style.cinza}>cinza</h1>
        <div id={style.center}>
            <h1 className={style.vermelho}>vermelho</h1>
            <h1 className={style.cinza}>cinza</h1>
        </div>
        </>
    )
}