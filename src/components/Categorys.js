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
        { id: "A", title: "Deportista de la ESO 🥇", color:"TitleRed", nominados: [
            {id: "A1", name: "Miguel Ángel González Gago"},
            {id: "A2", name: "Kiara Campaz Orobio"},
            {id: "A3", name: "Álvaro Vieites Fernández"},
            {id: "A4", name: "Alan Fernández Blanco"},
            {id: "A5", name: "Aitor Jal Palacios"},
            {id: "A6", name: "Martín Robles Franco"},
            {id: "A7", name: "Marco Fernández Alonso"},
            {id: "A8", name: "María Villayandre López"},
            {id: "A9", name: "Hevert Rodríguez Mancilla"},
            {id: "A10", name: "Mateo Fernández Cascallana"},
            {id: "A11", name: "Lucía Castañón Hevia"},
            {id: "A12", name: "Rubén Sendón Méndez"},
            {id: "A13", name: "Esteban Cortés Perdomo"},
            {id: "A14", name: "Daniela Pérez Gómez"},
            {id: "A15", name: "Laura González Soto"},
            {id: "A16", name: "Leyre Rodríguez Ruíz"},
            {id: "A17", name: "Clara Lopez Smith"},
            {id: "A18", name: "Adriana Urdiales Fernández"},
            {id: "A19", name: "César García Vicente"},
            {id: "A18", name: "Mara Moran Garcia"}
        ],about1: "No lo dudes. Si se caen, volverán a levantarse."
        ,about2:"Campeón no es aquel que logra la victoria, campeón es aquel que logra recuperarse después de haber fallado." +
        "Esta gente son verdaderos campeones," +
        "bestias insaciables que cada día logran tener el coraje y la disciplina suficiente para ponerse a prueba."
        ,about3:"Premio dedicado a aquellos quienes," +
        "durante 4 años, han dedicado su vida al deporte," +
        "llevando su cuerpo hasta el límite con el objetivo de alzarse campeones en su disciplina y ser la mejor versión de ellos mismos."},
        { id: "B", title: "Repetidor de la ESO 🔁", color:"TitleBlack", nominados: [
            {id: "B1", name: "Mario Presa Prieto"},
            {id: "B2", name: "Lucía Castañón Hevia"},
            {id: "B3", name: "Inés Díez Fernández"},
            {id: "B4", name: "Railin Yan"},
            {id: "B5", name: "Lucía Hermosilla Aláez"},
            {id: "B6", name: "Claudia Puerta Cañón"},
            {id: "B7", name: "Andrea Palanga Mahumane"},
            {id: "B8", name: "Mateo Fernández Cascallana"},
            {id: "B9", name: "Alan Fernández Blanco"},
            {id: "B10", name: "Izan Ramírez Sánchez"},
            {id: "B11", name: "Patricia Gutiérrez Silva"},
            {id: "B12", name: "Samara Jiménez Sabio"},
            {id: "B13", name: "Rubén Sendón Méndez"},
            {id: "B14", name: "Nicol Rosa Román"},
            {id: "B15", name: "Iris Ordás Solís"},
            {id: "B16", name: "Roberto Martínez Rodríguez"},
            {id: "B17", name: "Yara Esteban Andrés"},
            {id: "B18", name: "José Carlos Martínez Alonso"},
            {id: "B19", name: "Karen Betancurt Castañeda"},
            {id: "B20", name: "Fátima Ghanem Al Hachmi"}
        ], about1: "Cuando menos te esperabas que alguien nuevo pudiera aparecer en tu clase y cambiarlo todo, ahí aparecieron estas personas."
        ,about2:"Todos ellos han pasado por una situación difícil," +
        "y no les ha resultado sencillo asimilar que debían repetir y pasar a ser unos veteranos rodeados de novatos."+
        "Sin embargo, su gran capacidad de resiliencia les ha permitido afrontar con buena cara la adversidad y formar parte del grupo," +
        "siendo en muchas ocasiones piezas muy especiales que han dejado a su paso sonrisas y amistades."
        ,about3:"Premio dedicado al repetidor de la eso." +
        "Esa persona que mejor ha sabido adaptarse al nuevo entorno y que más buenas sensaciones ha dejado con su presencia."},
        { id: "C", title: "Dúo de la ESO 🧑🏻‍🤝‍👨🏻", color:"TitleGolden", nominados: [
            {id: "C1", name: "Sandra Marcos Díez e Irene Bernardo Herrero"},
            {id: "C2", name: "Yaiza Estévez Fernández y Carolina Aller Sastre"},
            {id: "C3", name: "Judit Presa Díez y Silvia Martínez González"},
            {id: "C4", name: "Olga Pérez Lario y Silvia Martínez Alonso"},
            {id: "C5", name: "Jorge San José Martínez y Martín Robles Franco"},
            {id: "C6", name: "Javier Mondelo Gómez y Hazma Moataz Al Razouk"},
            {id: "C7", name: "Pedro Veloso Sagües y Sergio Navarro Alonso"},
            {id: "C8", name: "Esteban Cortés Perdomo y Marco Fernández Alonso"},
            {id: "C9", name: "Hugo Barrientos Álvarez y Alberto Iglesias Millán"},
            {id: "C10", name: "Lucia Hermosilla Aláez y Claudia Puerta Cañón"},
            {id: "C11", name: "Christian Barazón Santiago y Alejandro Acedo Cobos"},
            {id: "C12", name: "Nayara Fernández Villacé y Nayara Toribio Valdés"},
            {id: "C13", name: "Diego Yugueros López y César García Vicente"},
            {id: "C14", name: "Marina Robles Conde y Adriana Urdiales Fernández"},
            {id: "C15", name: "Hugo Macías Carreño y Rodrigo Macías Carreño"},
            {id: "C16", name: "Esther Andrés Corrales y María del Pilar Blanco Saavedra"}
        ], about1: "Es imposible no reconocerlos, son inseparables."
        ,about2:"Si te digo la palabra dúo," +
        "es probable que se te vengan a la cabeza varios nombres de personas que han logrado forjar una gran amistad y que han permanecido unidos durante años," +
        "logrando crear un dúo icónico que quedará por el resto de la eternidad en la mente de las personas."
        ,about3:"Premio dedicado al dúo de la eso." +
        "Esas personas que difícilmente las ves distanciadas," +
        "dy que siempre que están juntos generan felicidad en su entorno."},
        { id: "D", title: "Inocente de la ESO 🕊️", color:"TitleGreen", nominados: [
            {id: "D1", name: "Sergio Furones"},
            {id: "D2", name: "Sandra Marcos Díez"},
            {id: "D3", name: "Lucía Pulgar Cordero"},
            {id: "D4", name: "Irene Bernardo Herrero"},
            {id: "D5", name: "Pedro Veloso Sagües"},
            {id: "D6", name: "Alonso Rodríguez Ramos"},
            {id: "D7", name: "Nube Arias Rodríguez"},
            {id: "D8", name: "Erika Acebes Calvo"},
            {id: "D9", name: "Patricia Lorenzo Crespo"},
            {id: "D10", name: "Sarai Fernández Fidalgo"},
            {id: "D11", name: "Iker Castro Pérez"},
            {id: "D12", name: "Alejandra de la Puente Gil"},
            {id: "D13", name: "Luana Carnero Garmón"},
            {id: "D14", name: "Carmen Saenz de Pipaon Serrano"},
            {id: "D15", name: "Aya Dahmouni Hadir"},
            {id: "D16", name: "Carla Rodriguez Jáñez"},
            {id: "D17", name: "Melina Del Rosario Miranda Mejia"}
        ], about1: "Si existe algo más puro que estas personas, es la naturaleza, nada más."
        ,about2:"Todavía siguen conservando el niño que llevan dentro," +
        "y lo manifiestan muy a menudo. Estar a su lado sólo puede causar paz y felicidad."
        ,about3:"Premio dedicado al inocente de la eso." +
        "Esa persona ingenua que aún conserva su lado más puro." +
        "Son personas lo más cercanas a la paz que hay y lo más probable es que se sientan culpables si te metes con ellos," +
        "así que más te vale no hacerlo",},
        { id: "E", title: "Bonachon 😁", color:"TitleBlue", nominados: [
            {id: "E1", name: "Adrian Pelaez Fernandez"},
            {id: "E2", name: "Hugo Barrientos Alvarez"},
            {id: "E3", name: "Silvia Martinez Gonzalez"},
            {id: "E4", name: "Sandra Marcos Diez"},
            {id: "E5", name: "José Robles Flores"},
            {id: "E6", name: "Adriana Urdiales Fernandez"},
            {id: "E7", name: "Carmen Saenz serrano de pipaon"},
            {id: "E8", name: "Pedro Veloso Sagües"},
            {id: "E9", name: "Cecilia Diez Riaño"},
            {id: "E10", name: "David Moran Suarez"},
            {id: "E11", name: "Sushant Fernandez Dominguez"},
            {id: "E12", name: "Rebecca Corda Álvarez"},
            {id: "E13", name: "Irene Bernardo Herrero"},
            {id: "E14", name: "Carlos Llamazares Lorca"},
            {id: "E15", name: "Sara Jimenez Coray"},
            {id: "E15", name: "Oliver Antonio Baez Pinales"}
        ], about1: "No hay que confundirlos con los inocentes. Los otros son ingenuos, estos no."
        ,about2:"Los bonachones se encargan de ayudar a la gente desinteresadamente y a repartir generosidad por el mundo entero." +
        "Son la definición de buenas personas." +
        "Siempre que pueden, estarán ahí y te regalarán una sonrisa."
        ,about3:"Premio dedicado a bonachón de la eso. Esas buenas personas que te iluminan los días y que siempre están ahí para ayudar y sacarte una sonrisa."},
        { id: "F", title: "Tostado de la ESO 🍞", color:"TitleBrown", nominados: [
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
            {id: "F11", name: "Marcos Samuel Pérez Gil"},
            {id: "F12", name: "Héctor Are Somboro Gil"},
            {id: "F13", name: "Daniel Aller Fernández"},
            {id: "F14", name: "Héctor Fernández Conde"},
            {id: "F15", name: "César Herreras Rodríguez"},
            {id: "F16", name: "Cecilia Díez Riaño"}
        ], about1: "¿Me estabas escuchando cuando te estaba hablando?"
        ,about2:"Hay gente que es difícil de creer que vivan en el mismo mundo que el resto de los mortales." +
        "¿En qué estabas pensando mirando al techo? Espabila," +
        "que el profesor quiere que corrijas el exercise 2 del workbook."
        ,about3:"Premio dedicado al tostado de la eso." +
        "Esas personas que parece que no se enteran de nada," +
        "o al menos lo aparentan. Sin ellos, las clases no serían tan divertidas." +
        "Dan ese toque de magia que falta para que una clase sea perfecta."},
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
            {id: "G15", name: "Alberto Iglesias Millán"},
            {id: "G16", name: "Nayara Toribio Valdés"}
        ], about1: "El instituto es un lugar gobernado por la pubertad: El paraíso de las hormonas."
        ,about2:"Sobra decir que el amor y todo lo que ello conlleva es uno de los temas más frecuentes durante la ESO." +
        "A todo el mundo en algún momento de nuestra vida nos ha gustado alguien del instituto," +
        "seamos sinceros y no nos engañemos."
        ,about3:"Premio dedicado al lover de la Eso." +
        "Esa persona que más pasiones ha levantado en su paso por la ESO." +
        "Una persona interesante a ojos de los demás."},
        { id: "I", title: "Liada de la ESO 💣", color:"Default", nominados: [
            {id: "I1", name: "Electricity: Cuando lograron que se fuera la electricidad de todo el edificio."},
            {id: "I2", name: "Firefloor: En su momento el gel hidroalcohólico fue un perfecto combustible para una hoguera en mitad de una clase."},
            {id: "I3", name: "Fireball: Alguien decidió tirar por una ventana una bola de papel en llamas, que por poco no cayó en la cabeza de una profesora."},
            {id: "I4", name: "1945: Una clase quedó clausurada por grafitear esvásticas en su interior. 5. CSI: Vaper: Hubo una vez un Vaper que fue pasando de boca en boca, y jefatura se empeñó"},
            {id: "I5", name: "CSI: Vaper: Hubo una vez un Vaper que fue pasando de boca en boca, y jefatura se empeñó en que iba a encontrar a todo culpable que hubiera estado con él."},
            {id: "I6", name: "El petardo: Una vez, en medio del instituto, a alguien se le ocurrió prender un gran petardo que acabó retumbando en el centro."},
            {id: "I7", name: "El portátil: No fue una liada en sí, porque nunca ocurrió, pero el simple hecho de que nos tuvieran encerrados y nos cachearan para que luego resultara que el portátil no había sido robado, si no olvidado, se puede considerar liada."},
            {id: "I8", name: "La meada de Estopa: Alguien decidió mear en medio de clase en una bolsita."},
            {id: "I9", name: "Carta Interceptada: Una persona le envio una carta deseandole curiosa a un compañero, y la profesora intercepto dicha carta para luego leerla delante de toda la clase."},
            {id: "I10", name: "¡Platano Va!: En una clase tiraron un platano pocho contra el techo y se quedo pegado."},
            {id: "I11", name: "Boquete: un alumno hizo un boquete en una de las paredes."},
            {id: "I11", name: "Baño de papel: Una vez varias personas se ocuparon de dejar el baño lleno de papel mojado."},
            {id: "I12", name: "Instituto en cuarentena: A primera hora nos encontramos el instituto cerrado por que alguien habia echado pegamento a las cerraduras."}
        ], about1: "La rutina escolar puede llegar a ser aburrida y repetitiva con el paso del tiempo..." +
        "Por ello, de vez en cuando hay que condimentarla para que la monótona vida del estudiante se vuelva un poco más interesante," +
        "aunque eso conlleve el riesgo de acabar con un parte."
        ,about2:"¿A quién no le gusta el riesgo cuando hay diversión de por medio?"
        ,about3:"Las liadas nominadas son:"},
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
            {id: "J12", name: "Mateo Urdiales Landa"},
            {id: "J13", name: "Hazma Moataz Al Razouk"},
            {id: "J14", name: "Alex Mayoral Fernandez"},
            {id: "J15", name: "Awa Niasse Sene"},
            {id: "J16", name: "Jesús Bernardo Reguera"}

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
            {id: "K15", name: "Miguel García Sánchez"},
            {id: "K15", name: "Alicia Conty Castro"}
        ], about1: 'Disciplina y constancia.' +
        'Estas personas no han fallado ni un sólo curso en su cometido,' +
        'y encima lo han cumplido por lo alto.' +
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
            {id: "L12", name: "Adrian Pelaez Fernandez"},
            {id: "L13", name: "Miguel Ángel González Gago"}
            
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
            <button className="SubmitVoteButton" onClick={SubmitVote}>Enviar Votos</button>
        </div>
    )
}