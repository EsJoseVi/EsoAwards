import { useState } from 'react';
import { auth } from '../FireBaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth'

export const logged = false

export const AuthForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [errorName, setErrorName] = useState("");

    const logIn = async () => {
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch(err) {
            console.log(err.message)
            if (err.message === "Firebase: Error (auth/invalid-credential)."){
                setError("Contraseña o correo incorrectos");
                setErrorName("Error");
            }
            if (err.message === "Firebase: Error (auth/invalid-email)."){
                setError("El correo no es valido");
                setErrorName("Error");
            }
        }
    };

    return (
        <div className="PageContainer">
            <h2 className="Title">Inicia sesion usando tu correo de @educal.jcyl.es y tu contraseña UNICA del evento</h2>
            <div className="FormContainer">
                <p className={errorName}>{error}</p>
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
                <button className="LoginButton" onClick={logIn}>Iniciar Sesion</button>
            </div>
        </div>
    )
}