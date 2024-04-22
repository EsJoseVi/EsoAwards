import { onAuthStateChanged } from "firebase/auth"
import { AuthForm } from "../components/AuthForm"
import { auth } from "../FireBaseConfig"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react";

export default function Login(){
    const navigate = useNavigate();

    useEffect(() =>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/votar");
            }
        })
    });

    return(
        <AuthForm/>
    )
}