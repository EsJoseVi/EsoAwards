/*Sistema de Votacion por categorias y un form */

import { db } from "../FireBaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { auth } from "../FireBaseConfig"
import { deleteUser, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Categorys (){
    var mail = "";
    var usuario = "";
    onAuthStateChanged(auth, (user) => {
        if (user) {
            mail = user.email;
            usuario = user;
        }
    })

    const values = [
        { id: "A", title: "Deportista de la ESO 🥇", color:"Default", nominados: [
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
            {id: "A14", name: "Esteban Cortés Perdomo"},
            {id: "A15", name: "Daniela Pérez Gómez"}
        ]},
        { id: "B", title: "Repetidor de la ESO 🔁", color:"Default", nominados: [
            {id: "B1", name: "Mario Presa Prieto"},
            {id: "B2", name: "Lucía Castañón Hevia"},
            {id: "B3", name: "Inés Díez Fernández"},
            {id: "B4", name: "Railin Yan"},
            {id: "B5", name: "Lucía Hermosilla Aláez"},
            {id: "B6", name: "Claudia Puerta Cañón"},
            {id: "B7", name: "Yara Esteban Andrés"},
            {id: "B8", name: "Andrea Palanga Mahumane"},
            {id: "B9", name: "Mateo Fernández Cascallan"},
            {id: "B10", name: "Alan Fernández Blanco"},
            {id: "B11", name: "Izan Ramírez Sánche"},
            {id: "B12", name: "Patricia Gutiérrez Silva"},
            {id: "B13", name: "Samara Jiménez Sabio"},
            {id: "B14", name: "Rubén Sendón Méndez"},
            {id: "B15", name: "Izan(Buscar Apellidos)"}
        ]},
        { id: "C", title: "Duo de la ESO", color:"Default", nominados: [
            {id: "C1", name: "Sandra Marcos Díez e Irene Bernardo Herrero"},
            {id: "C2", name: "Yaiza Estévez Fernández y Carolina Aller Sastre"},
            {id: "C3", name: "Judit Presa Díez y Silvia Martínez González"},
            {id: "C4", name: "Olga Pérez Lario y Silvia Martínez Alonso"},
            {id: "C5", name: "Jorge San José Martínez y Martín Robles Franco"},
            {id: "C6", name: "Javier Mondelo Gómez y Hazma Moataz Al Razouk"},
            {id: "C7", name: "Pedro Veloso Sagües y Sergio Navarro Alonso"},
            {id: "C8", name: "Esteban Cortés Perdomo y Marco Fernández Alonso"},
            {id: "C9", name: "Jorge Espeso Fonseca y Alberto Iglesias Millán"},
            {id: "C10", name: "Lucia Hermosilla Aláez y Claudia Puerta Cañón"},
            {id: "C11", name: "Christian Barazón Santiago y Alejandro Acedo Cobos"},
            {id: "C12", name: "Nayara Fernández Villacé y Nayara Toribio Valdés"},
            {id: "C13", name: "Diego Yugueros López y Víctor Villayandre López"},
            {id: "C14", name: "Marina Robles Conde y Adriana Urdiales Fernández"},
            {id: "C15", name: "Hugo Macías Carreño y Rodrigo Macías Carreño"}
        ]},
        { id: "D", title: "Inocente de la ESO", color:"Default", nominados: [
            {id: "D1", name: "José Robles Flórez"},
            {id: "D2", name: "Sergio Furones"},
            {id: "D3", name: "Sandra Marcos Díez"},
            {id: "D4", name: "Lucía Pulgar Cordero"},
            {id: "D5", name: "Irene Bernardo Herrero"},
            {id: "D6", name: "Pedro Veloso Sagües"},
            {id: "D7", name: "Alonso Rodríguez Ramos"},
            {id: "D8", name: "Nube Arias Rodríguez"},
            {id: "D9", name: "Erika Acebes Calvo"},
            {id: "D10", name: "Patricia Lorenzo Crespo"},
            {id: "D11", name: "BUSCAR!!!"},
            {id: "D12", name: "BUSCAR!!!"},
            {id: "D13", name: "BUSCAR!!!"},
            {id: "D14", name: "BUSCAR!!!"},
            {id: "D15", name: "BUSCAR!!!"}
        ]},
        { id: "E", title: "Bonachon de la ESO", color:"Default", nominados: [
            {id: "E1", name: "Adrián Peláez"},
            {id: "E2", name: "BUSCAR!!!"},
            {id: "E3", name: "BUSCAR!!!"},
            {id: "E4", name: "BUSCAR!!!"},
            {id: "E5", name: "BUSCAR!!!"},
            {id: "E6", name: "BUSCAR!!!"},
            {id: "E7", name: "BUSCAR!!!"},
            {id: "E8", name: "BUSCAR!!!"},
            {id: "E9", name: "BUSCAR!!!"},
            {id: "E10", name: "BUSCAR!!!"},
            {id: "E11", name: "BUSCAR!!!"},
            {id: "E12", name: "BUSCAR!!!"},
            {id: "E13", name: "BUSCAR!!!"},
            {id: "E14", name: "BUSCAR!!!"},
            {id: "E15", name: "BUSCAR!!!"}
        ]},
        { id: "F", title: "Tostado de la ESO", color:"Default", nominados: [
            {id: "F1", name: "Hugo Macías Carreño"},
            {id: "F2", name: "Héctor Cubría Robles"},
            {id: "F3", name: "Diego González García"},
            {id: "F4", name: "Miguel González Gago"},
            {id: "F5", name: "Víctor Villayandre López"},
            {id: "F6", name: "Hamza Zaitoun"},
            {id: "F7", name: "Pelayo Prieto Carballo"},
            {id: "F8", name: "Armando Suárez Pérez"},
            {id: "F9", name: "Clara López Smith"},
            {id: "F10", name: "Rodrigo Macías Carreño"},
            {id: "F11", name: "BUSCAR!!!"},
            {id: "F12", name: "BUSCAR!!!"},
            {id: "F13", name: "BUSCAR!!!"},
            {id: "F14", name: "BUSCAR!!!"},
            {id: "F15", name: "BUSCAR!!!"}
        ]},
        { id: "G", title: "Lover de la ESO ❤️", color:"TitlePink", nominados: [
            {id: "G1", name: "Martín Robles Franco"},
            {id: "G2", name: "Silvia Martínez Alonso"},
            {id: "G3", name: "Judit Presa Díez"},
            {id: "G4", name: "Lia Lorenzana Carracedo"},
            {id: "G5", name: "Lucía Hermosilla Aláez"},
            {id: "G6", name: "Ángela Pérez Rivas"},
            {id: "G7", name: "Javier Mondelo Gómez"},
            {id: "G8", name: "Mario Presa Prieto"},
            {id: "G9", name: "Marco Fernández Alonso"},
            {id: "G10", name: "Nayara Fernández Villacé"},
            {id: "G11", name: "Miguel González Gago"},
            {id: "G12", name: "Martin García Gutiérrez"},
            {id: "G13", name: "Olga Pérez Lario"},
            {id: "G14", name: "Mateo Fernández Cascallana"},
            {id: "G15", name: "Alberto Iglesias Millán"}
        ]},
        { id: "H", title: "👨🏻‍🏫 Profesor de la ESO 👩🏻‍🏫", color:"Default", nominados: [
            {id: "H1", name: "Ana María Giganto Fernández"},
            {id: "H2", name: "Luis Cuenya González"},
            {id: "H3", name: "Ana María Pérez Cubillo"},
            {id: "H4", name: "Mayela Paramio Vidal"},
            {id: "H5", name: "Julio César Roblez Vergara"},
            {id: "H6", name: "Susana López López"},
            {id: "H7", name: "Alejandro Rodríguez Castro"},
            {id: "H8", name: "Jose Erasmo Caño Luna"},
            {id: "H9", name: "María Fe de la Torre Guerra"},
            {id: "H10", name: "Montserrat Martín Álvarez"},
            {id: "H11", name: "Roberto de la Fuente Álvarez"},
            {id: "H12", name: "Ricardo Fernández Vidal"},
            {id: "H13", name: "Raquel Llorente Treceño"},
            {id: "H14", name: "Mateo Fernández Cascallana"},
            {id: "H15", name: "Margarita Mencía de Prado"}
        ]},
        { id: "I", title: "Liada de la ESO 💣", color:"Default", nominados: [
            {id: "I1", name: "Electricity"},
            {id: "I2", name: "Firefloor"},
            {id: "I3", name: "Fireball"},
            {id: "I4", name: "1945"},
            {id: "I5", name: "Mesas con pollas y esvásticas"},
            {id: "I6", name: "CSI: Vaper"},
            {id: "I7", name: "El petardo"},
            {id: "I8", name: "El portátil"},
            {id: "I9", name: "Buscar!!!"},
            {id: "I10", name: "Buscar!!!"}
        ]},
        { id: "J", title: "Liante de la ESO 🦹🏻‍♂️", color:"Default", nominados: [
            {id: "J1", name: "Martín Robles Franco"},
            {id: "J2", name: "Christian Barazón Santiago"},
            {id: "J3", name: "Esteban Cortés Perdomo"},
            {id: "J4", name: "Alan Fernández Blanco"},
            {id: "J5", name: "Inés Díez Fernández"},
            {id: "J6", name: "Riad Houari Bentayeb"},
            {id: "J7", name: "Pelayo Prieto Carballo"},
            {id: "J8", name: "Jorge San José Martínez"},
            {id: "J9", name: "Railin Yan"},
            {id: "J10", name: "Diego Yugueros López"},
            {id: "J11", name: "Victor Alonso Pérez"},
            {id: "J12", name: "Buscar!!!"},
            {id: "J13", name: "Buscar!!!"},
            {id: "J14", name: "Buscar!!!"},
            {id: "J15", name: "Buscar!!!"}
        ]},
        { id: "K", title: "Aplicado de la ESO 🧠", color:"Default", nominados: [
            {id: "K1", name: "Adriana Urdiales Fernández"},
            {id: "K2", name: "Carlos Llamazares Lorca"},
            {id: "K3", name: "Marina Robles Conde"},
            {id: "K4", name: "Jorge Espeso Fonseca"},
            {id: "K5", name: "Jorge San José Martínez"},
            {id: "K6", name: "José Vicente Álvarez"},
            {id: "K7", name: "Hugo Barrientos Álvarez"},
            {id: "K8", name: "Sofía Yus Ferrero"},
            {id: "K9", name: "Sara Gallego Martínez"},
            {id: "K10", name: "Ángel Barragán Rodríguez"},
            {id: "K11", name: "Carmen Saenz de Pipaon Serrano"},
            {id: "K12", name: "Silvia Martínez Alonso"},
            {id: "K13", name: "Sandra Marcos Díez"},
            {id: "K14", name: "Sofía Gutierrez Carcedo"},
            {id: "K15", name: "Miguel García Sánchez"}
        ]},
        { id: "L", title: "Gracioso de la ESO 🤡", color:"Default", nominados: [
            {id: "L1", name: "Railin Yan"},
            {id: "L2", name: "Jorge San José Martínez"},
            {id: "L3", name: "Martín Robles Franco"},
            {id: "L4", name: "Alan Fernández Blanco"},
            {id: "L5", name: "Inés Díez Fernández"},
            {id: "L6", name: "Diego Yugueros López"},
            {id: "L7", name: "Esteban Cortés Perdomo"},
            {id: "L8", name: "Christian Barazón Santiago"},
            {id: "L9", name: "Víctor Villayandre López"},
            {id: "L10", name: "Pelayo Prieto Carballo"},
            {id: "L11", name: "Javier Mondelo Gómez"},
            {id: "L12", name: "Buscar!!!"},
            {id: "L13", name: "Buscar!!!"},
            {id: "L14", name: "Buscar!!!"},
            {id: "L15", name: "Buscar!!!"}
        ]}
    ]

    const navigate = useNavigate();
    const voteRef = collection(db, "Test")
    const  [vote, setVote] = useState({ A: "", B: "", C:"", D:"", E:"", F:"", G:"", H:"", I:"", J:"", K:"", L:""});

    const SubmitVote = async () => {
        if (usuario){
            await addDoc(voteRef, {Votos: vote, User: mail} )
            await deleteUser(usuario)
            navigate("/gracias")
        }
    }

    function handleVoting(id, candidato) {
        const nextVote = vote;
        Object.keys(nextVote).forEach(function(key, index) {
            if (id === key){
                nextVote[id] = candidato;
            }
        })
        setVote(nextVote)
    }

    return (
        <div className="Categorys">
            {values.map(value =>(
                <>
                    <h2 className={value.color} key={value.id}>{value.title}</h2>
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
            <button className="SubmitVoteButton" onClick={SubmitVote}>Enviar Votos</button>
        </div>
    )
}