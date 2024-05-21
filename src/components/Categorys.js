/*Sistema de Votacion por categorias y un form */
import { db } from "../FireBaseConfig"
import { addDoc, collection } from "firebase/firestore"
import { auth } from "../FireBaseConfig"
import { deleteUser, onAuthStateChanged } from "firebase/auth"
import { useState } from "react"
import { signOut } from "firebase/auth";
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
        { id: "A", title: "Deportista de la ESO 🥇", color:"TitleRed", nominados: [
            {id: "A1", name: "Alan Fernández Blanco"},
            {id: "A2", name: "César García Vicente"},
            {id: "A3", name: "Adriana Urdiales Fernández"},
            {id: "A4", name: " Kiara Campaz Orobio"},
            {id: "A5", name: "Hevert Rodríguez Mancilla"}
        ],about1: "No lo dudes. Si se caen, volverán a levantarse."
        ,about2:"Campeón no es aquel que logra la victoria, campeón es aquel que logra recuperarse después de haber fallado." +
        "Esta gente son verdaderos campeones," +
        "bestias insaciables que cada día logran tener el coraje y la disciplina suficiente para ponerse a prueba."
        ,about3:"Premio dedicado a aquellos quienes," +
        "durante 4 años, han dedicado su vida al deporte," +
        "llevando su cuerpo hasta el límite con el objetivo de alzarse campeones en su disciplina y ser la mejor versión de ellos mismos."},
        { id: "B", title: "Repetidor de la ESO 🔁", color:"TitleBlack", nominados: [
            {id: "B1", name: "Inés Díez Fernández"},
            {id: "B2", name: "Rubén Sendón Méndez"},
            {id: "B3", name: "Railin Yan"},
            {id: "B4", name: "Izan Ramírez Sánchez"},
            {id: "B5", name: "Alan Fernández Blanco"},
            {id: "B6", name: "Iris Ordás Solís"}
        ], about1: "Cuando menos te esperabas que alguien nuevo pudiera aparecer en tu clase y cambiarlo todo, ahí aparecieron estas personas."
        ,about2:"Todos ellos han pasado por una situación difícil," +
        "y no les ha resultado sencillo asimilar que debían repetir y pasar a ser unos veteranos rodeados de novatos."+
        "Sin embargo, su gran capacidad de resiliencia les ha permitido afrontar con buena cara la adversidad y formar parte del grupo," +
        "siendo en muchas ocasiones piezas muy especiales que han dejado a su paso sonrisas y amistades."
        ,about3:"Premio dedicado al repetidor de la eso." +
        "Esa persona que mejor ha sabido adaptarse al nuevo entorno y que más buenas sensaciones ha dejado con su presencia."},
        { id: "C", title: "Dúo de la ESO 🧑🏻‍🤝‍👨🏻", color:"TitleGolden", nominados: [
            {id: "C1", name: "Judit Presa Díez y Silvia Martínez González"},
            {id: "C2", name: "Hugo Macías Carreño y Rodrigo Macías Carreño"},
            {id: "C3", name: "Diego Yugueros López y César García Vicente"},
            {id: "C4", name: "Esteban Cortés Perdomo y Marco Fernández Alonso"},
            {id: "C5", name: "Sandra Marcos Díez e Irene Bernardo Herrero"}
        ], about1: "Es imposible no reconocerlos, son inseparables."
        ,about2:"Si te digo la palabra dúo," +
        "es probable que se te vengan a la cabeza varios nombres de personas que han logrado forjar una gran amistad y que han permanecido unidos durante años," +
        "logrando crear un dúo icónico que quedará por el resto de la eternidad en la mente de las personas."
        ,about3:"Premio dedicado al dúo de la eso." +
        "Esas personas que difícilmente las ves distanciadas," +
        "y que siempre que están juntos generan felicidad en su entorno."},
        { id: "D", title: "Inocente de la ESO 🕊️", color:"TitleGreen", nominados: [
            {id: "D1", name: "Irene Bernardo Herrero"},
            {id: "D2", name: "Erika Acebes Calvo"},
            {id: "D3", name: "Iker Castro Pérez"},
            {id: "D4", name: "Sergio Furones"},
            {id: "D5", name: "Lucía Pulgar Cordero"}
        ], about1: "Si existe algo más puro que estas personas, es la naturaleza, nada más."
        ,about2:"Todavía siguen conservando el niño que llevan dentro," +
        "y lo manifiestan muy a menudo. Estar a su lado sólo puede causar paz y felicidad."
        ,about3:"Premio dedicado al inocente de la eso." +
        "Esa persona ingenua que aún conserva su lado más puro." +
        "Son personas lo más cercanas a la paz que hay y lo más probable es que se sientan culpables si te metes con ellos," +
        "así que más te vale no hacerlo",},
        { id: "E", title: "Bonachón 😁", color:"TitleBlue", nominados: [
            {id: "E1", name: "Adriana Urdiales Fernández "},
            {id: "E2", name: "José Robles Flórez"},
            {id: "E3", name: "Silvia Martínez González"},
            {id: "E4", name: "Hugo Barrientos Álvarez"},
            {id: "E5", name: "Adrián Peláez Fernández"},
            {id: "E6", name: "Carmen Saenz de Pipaon Serrano"}
        ], about1: "No hay que confundirlos con los inocentes. Los otros son ingenuos, estos no."
        ,about2:"Los bonachones se encargan de ayudar a la gente desinteresadamente y a repartir generosidad por el mundo entero." +
        "Son la definición de buenas personas." +
        "Siempre que pueden, estarán ahí y te regalarán una sonrisa."
        ,about3:"Premio dedicado a bonachón de la eso. Esas buenas personas que te iluminan los días y que siempre están ahí para ayudar y sacarte una sonrisa."},
        { id: "F", title: "Tostado de la ESO 🍞", color:"TitleBrown", nominados: [
            {id: "F1", name: "Diego González García"},
            {id: "F2", name: "Pelayo Prieto Carballo"},
            {id: "F3", name: "Clara López Smith"},
            {id: "F4", name: "Miguel González Gago"},
            {id: "F5", name: "Diego Yugueros López"},
            {id: "F6", name: "Héctor Cubría Robles"}
        ], about1: "¿Me estabas escuchando cuando te estaba hablando?"
        ,about2:"Hay gente que es difícil de creer que vivan en el mismo mundo que el resto de los mortales." +
        "¿En qué estabas pensando mirando al techo? Espabila," +
        "que el profesor quiere que corrijas el exercise 2 del workbook."
        ,about3:"Premio dedicado al tostado de la eso." +
        "Esas personas que parece que no se enteran de nada," +
        "o al menos lo aparentan. Sin ellos, las clases no serían tan divertidas." +
        "Dan ese toque de magia que falta para que una clase sea perfecta."},
        { id: "G", title: "Lover de la ESO ❤️", color:"TitlePink", nominados: [
            {id: "G1", name: "Lia Lorenzana Carracedo"},
            {id: "G2", name: "Martín Robles Franco"},
            {id: "G3", name: "Lucía Hermosilla Aláez"},
            {id: "G5", name: "Judit Presa Díez"},
            {id: "G6", name: "Silvia Martínez Alonso"}
        ], about1: "El instituto es un lugar gobernado por la pubertad: El paraíso de las hormonas."
        ,about2:"Sobra decir que el amor y todo lo que ello conlleva es uno de los temas más frecuentes durante la ESO." +
        "A todo el mundo en algún momento de nuestra vida nos ha gustado alguien del instituto," +
        "seamos sinceros y no nos engañemos."
        ,about3:"Premio dedicado al lover de la Eso." +
        "Esa persona que más pasiones ha levantado en su paso por la ESO." +
        "Una persona interesante a ojos de los demás."},
        { id: "I", title: "Liada de la ESO 💣", color:"Default", nominados: [
            {id: "I1", name: "Electricity: Cuando lograron que se fuera la electricidad de todo el edificio."},
            {id: "I2", name: "1945: Una clase quedó clausurada por grafitear esvásticas en su interior."},
            {id: "I3", name: "La meada de Estopa: Alguien decidió mear en medio de clase en una bolsita."},
            {id: "I4", name: "Instituto en cuarentena: A primera hora nos encontramos el instituto cerrado por que alguien habia echado pegamento a las cerraduras."},
            {id: "I5", name: "Firefloor: En su momento el gel hidroalcohólico fue un perfecto combustible para una hoguera en mitad de una clase."}
        ],about2: "La rutina escolar puede llegar a ser aburrida y repetitiva con el paso del tiempo..." +
        "Por ello, de vez en cuando hay que condimentarla para que la monótona vida del estudiante se vuelva un poco más interesante," +
        "aunque eso conlleve el riesgo de acabar con un parte."
        ,about1:"¿A quién no le gusta el riesgo cuando hay diversión de por medio?"
        ,about3:"Las liadas nominadas son:"},
        { id: "J", title: "Liante de la ESO 🦹🏻‍♂️", color:"Default", nominados: [
            {id: "J1", name: "Christian Barazón Santiago"},
            {id: "J2", name: "Inés Díez Fernández"},
            {id: "J3", name: "Alan Fernández Blanco"},
            {id: "J4", name: "Riad Houari Bentayeb"},
            {id: "J5", name: "Martín Robles Franco"},
            {id: "J6", name: "Esteban Cortés Perdomo"}
        ], about1: "Hay personas que no temen a excederse con sus acciones." +
        "Son libres, y su instinto de rebeldía es superior a todo lo demás." +
        "¿Qué importa lo que hagan? ¿Acaso los van a matar?"
        ,about2: "La vida pirata es la vida mejor, y está gente lo demuestra a la perfección;" +
        "al igual que también demuestran que para morir cuerdo, hay que vivir loco."
        ,about3: "Premio dedicado al liante de la ESO." +
        "Esa persona a la que más partes se ha enfrentado," +
        "tantos que incluso no ha podido ir a alguna excursión." +
        "Es puro espíritu de rebeldía."},
        { id: "K", title: "Aplicado de la ESO 🧠", color:"Default", nominados: [
            {id: "K1", name: "Silvia Martínez Alonso"},
            {id: "K2", name: "Sara Gallego Martínez"},
            {id: "K3", name: "Adriana Urdiales Fernández"},
            {id: "K4", name: "Carlos Llamazares Lorca"},
            {id: "K5", name: "Carmen Saenz de Pipaon Serrano"}
        ], about1: 'Disciplina y constancia.' +
        'Estas personas no han fallado ni un sólo curso en su cometido,' +
        'y encima lo han cumplido por lo alto. ' +
        'los "TERMINATORS" de la ESO'
        ,about2:'A todos nos da pereza estudiar, pero hay gente,' +
        'guerreros en este mundo, que son capaces de combatir ese aburrimiento y derrotarlo.' +
        '¿Acaso han suspendido alguna vez un examen? La gran mayoría te responderá que no,' +
        'y es normal. Son máquinas diseñadas para “matar” exámenes.'
        ,about3:"Premio dedicado al aplicado de la eso." +
        "Esa persona que nunca la has visto sacar menos de un nueve.." +
        "A parte, trabaja como nadie, y siempre parece estar un paso por delante en todo," +
        "no sólo en los exámenes."},
        { id: "L", title: "Gracioso de la ESO 🤡", color:"Default", nominados: [
            {id: "L1", name: "Alan Fernández Blanco"},
            {id: "L2", name: "Railin Yan"},
            {id: "L3", name: "Inés Díez Fernández"},
            {id: "L4", name: "Adrián Peláez Fernández"},
            {id: "L5", name: "Jorge San José Martínez"},
            {id: "L6", name: "Diego Yugueros López"},
            
        ], about1: "Son héroes, héroes que se sacrifican por la clase con un único cometido: hacer reír a todo el mundo, cueste lo que cueste."
        ,about2:"Sin ellos, las clases no serían lo mismo." +
        "Se siente un vacío inmenso cuando faltan, un vacío imposible de rellenar," +
        "porque sólo ellos tienen esa magia que alegra los corazones de todos."
        ,about3:"Premio dedicado al gracioso de la eso." +
        "Esa persona capaz de hacer reír hasta a los profesores," +
        "hasta a la persona más seria en este mundo." +
        "Esa persona capaz de hacerte ir al instituto simplemente porque sabes que a su lado te vas a acabar riendo tarde o temprano."}
    ]

    const navigate = useNavigate();
    const voteRef = collection(db, "Votos")
    const  [vote, setVote] = useState({ A: "", B: "", C:"", D:"", E:"", F:"", G:"", H:"", I:"", J:"", K:"", L:""});
    const [button, setButton] = useState("SubmitVoteButton")

    const SubmitVote = async () => {
        if (usuario){
            setButton("none")
            await addDoc(voteRef, {Votos: vote, User: mail} )
            signOut(auth)
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
                    <h2 className={value.color} key={value.id + 1}>{value.title}</h2>
                    <p key={value.id + 2}className="about1">{value.about1}</p>
                    <p key={value.id + 3} className="about2">{value.about2}</p>
                    <p key={value.id + 4} className="about3">{value.about3}</p>
                    <form key={value.id + 5} className="form-container">
                        {value.nominados.map(nominado =>(
                            <>
                                <div className="Candidatos" key={nominado.id}>
                                    <input onChange={(e) => handleVoting(value.id, e.target.value)} key={nominado.id + 2} type="radio" id={nominado.id} name={value.title} value={nominado.name}/>
                                    <label className="form-label" key={nominado.id + 1} htmlFor={nominado.id}>{nominado.name}</label>
                                </div>
                            </>
                        ))}
                    </form>
                </>
            ))}
            <button className={button} onClick={SubmitVote}>Enviar Votos</button>
        </div>
    )
}
