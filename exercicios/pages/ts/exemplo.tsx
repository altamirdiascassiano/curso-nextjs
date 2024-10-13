import Pessoa from "@/components/Pessoa";

export default function exemploTS(){
    return (
        <div>
            <Pessoa nome="Altamir" />
            <Pessoa nome="Maria" idade={25}/> 
        </div>
    )
}