/*Sistema de Votacion por categorias y un form */

import { db } from "../FireBaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { auth } from "../FireBaseConfig"
import { onAuthStateChanged } from "firebase/auth"
import { useState } from "react"

export default function Categorys (){
    var mail = "";
    onAuthStateChanged(auth, (user) => {
        if (user) {
            mail = user.email;
        }
    })

    const values = [
        { id: "A", title: "Deportista de la ESO", nominados: [
            {id: "A1", name: "Miguel Ángel González Gago"},
            {id: "A2", name: "Adriana Urdiales Fernández"},
            {id: "A3", name: "Kiara Campaz Orobio"},
            {id: "A4", name: "Álvaro Vieites Fernández"},
            {id: "A5", name: "Alan Fernández Blanco"},
            {id: "A6", name: "Aitor Jal Palacios"},
            {id: "A7", name: "Martín Robles Franco"},
            {id: "A8", name: "Marco Fernández Alonso"},
            {id: "A9", name: "María Villayandre López"},
            {id: "A10", name: "Hevert Rodríguez Mancilla"},
            {id: "A11", name: "Mateo Fernández Cascallana"},
            {id: "A12", name: "Lucía Castañón Hevia"},
            {id: "A13", name: "Rubén Sendón Méndez"},
            {id: "A14", name:"Esteban Cortés Perdomo"},
            {id: "A15", name: "Daniela Pérez Gómez"}
        ]}
    ]

    const voteRef = collection(db, "Test")
    const  [vote, setVote] = useState({ A: ""});

    const SubmitVote = async () => {
        await addDoc(voteRef, {Deportista:vote, User: mail} )
    }

    function handleVoting(id, candidato) {
        const nextVote = vote;
        Object.keys(nextVote).forEach(function(key, index) {
            if (id === key){
                nextVote[id] = candidato;
            }
        })
        console.log(vote)
        setVote(nextVote)
    }

    return (
        <div className="Categorys">
            {values.map(value =>(
                <>
                    <h2 key={value.id}>{value.title}</h2>
                    <form key={value.id} className="form-container">
                        {value.nominados.map(nominado =>(
                            <>
                                <div className="Candidatos">
                                    <input onChange={(e) => handleVoting(value.id, e.target.value)} key={nominado.id} type="radio" id={nominado.id} name={value.title} value={nominado.name}/>
                                    <label className="form-label" key={nominado.id} for={nominado.id}>{nominado.name}</label>
                                </div>
                            </>
                        ))}
                    </form>
                </>
            ))}
            <button onClick={SubmitVote}>Enviar Votos</button>
        </div>
    )
}