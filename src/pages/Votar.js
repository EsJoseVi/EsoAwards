/* pagina donde se vota*/
import { useEffect, useState } from "react";
import { app } from "../FireBaseConfig"
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

export default function Votar (){
    const auth = getAuth();
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const handleInputs = (event) => {
        let inputs = { [event.target.name]: event.target.value}
        setData({ ...data, ...inputs})
    }
    const addData = () => {
        signInWithEmailAndPassword(auth, data.email, data.password)
    }
    const handlelogout = () => {
        signOut(auth);
    }

    useEffect(() => {
        onAuthStateChanged(auth, (data) => {
          if(data){
            alert("Sesion Inicada")
          }
          else {
            alert('Sesion Cerrada')
          }
        })
      }, [])
    return(
        <div>
            <h1 className="Title">Inicia sesion usando tu correo de @educal.jcyl.es</h1>
            <input
                name="email"
                type="email"
                placeholder="ejemplo@educa.jcyl.es"
                onChange={event => handleInputs(event)}
            />
            <input
                name="password"
                type="password"
                placeholder="contraseña"
                onChange={event => handleInputs(event)}
            />
            <button onClick={addData}>Iniciar Sesion</button>
            <button onClick={handlelogout}>Salir</button>
        </div>
    )
}