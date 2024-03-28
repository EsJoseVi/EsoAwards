/* pagina donde se vota*/
import { useNavigate } from "react-router-dom"
import { auth } from "../FireBaseConfig"
import { onAuthStateChanged } from "firebase/auth";

export default function Votar (){
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/login")
        }
    })
    return (
        <h1 className="Title">Las votaciones no estan disponibles</h1>
    )
}