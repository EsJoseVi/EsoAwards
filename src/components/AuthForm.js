import { useState } from 'react';
import { auth } from '../FireBaseConfig'
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithEmailAndPassword } from 'firebase/auth'

export const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const signUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            
            await sendEmailVerification(auth.currentUser);
        } catch(err) {
            console.error(err.message)
            if (err.message === "Firebase: Error (auth/invalid-credential)."){
                setError("Contraseña o correo incorrectos")
            }
            if (err.message === "Firebase: Error (auth/invalid-email)."){
                setError("El correo no es valido")
            }
        }
    };

    onAuthStateChanged(auth, (user) => {
        if (user) {
            setError("Por Favor confirma el correo")
        }
        if (user.emailVerified){
            setError("Correo Confirmado")
        }
    })

    return (
        <div className="PageContainer">
            <h1 className="Title">Inicia sesion usando tu correo de @educal.jcyl.es</h1>
            <p>{error}</p>
            <div className="FormContainer">
                <input
                    className="InputField"
                    name="email"
                    type="email"
                    placeholder="ejemplo@educa.jcyl.es"
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="InputField"
                    name="password"
                    type="password"
                    placeholder="contraseña"
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className="LoginButton" onClick={signUp}>Iniciar Sesion</button>
            </div>
        </div>
    )
}