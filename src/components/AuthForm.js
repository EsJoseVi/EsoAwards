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
            <h2 className="Info">
                Inicia sesión usando tu correo de @educa.jcyl.es
                La contraseña la eliges tú.
            </h2>
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
            <p className="Info">
                si tienes algún problema con este correo, 
                tendrás que avisarnos al DM y darnos otro correo para que puedas votar                Acuérdate de ella para poder votar la segunda vez.
            </p>
        </div>
    )
}