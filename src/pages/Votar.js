/* pagina donde se vota*/
import { useNavigate } from "react-router-dom"
import { auth } from "../FireBaseConfig"
import { onAuthStateChanged } from "firebase/auth";
import Categorys from "../components/Categorys"

export default function Votar (){
    const navigate = useNavigate();
    onAuthStateChanged(auth, (user) => {
        if (!user) {
            navigate("/login")
        }
    })
    return (
        <Categorys/>
    )
}