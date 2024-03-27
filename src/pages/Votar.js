/* pagina donde se vota*/
import { Navigate } from "react-router-dom"
import { auth } from "../FireBaseConfig"

export default function Votar (){
    try{
        if (auth.currentUser != null){
            return(<h1 className="Title">Las votaciones no estan disponibles</h1>)
        }
        else{
            return(<Navigate to="/login"/>)
        }
    }catch(err){
        throw(err)
    }
}