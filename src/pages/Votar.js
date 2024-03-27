/* pagina donde se vota*/
import { useNavigate } from "react-router-dom"
import { auth } from "../FireBaseConfig"

export default function Votar (){
    const navigate = useNavigate();
    
    return (
        <h1 className="Title">Las votaciones no estan disponibles</h1>
    )
}