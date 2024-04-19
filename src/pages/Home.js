/*Pagina de bienvenida default "/" */
import { useState } from "react";
import Instagram from "../components/Instagram"

export default function Home (){
    const now = new Date();
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    setInterval(function(){
        setDay(8 - now.getDay());
        setHours(17 - now.getHours());
        setMinutes(60 - now.getMinutes());
        setSeconds(60 - now.getSeconds());
    }, 1000);
    return (
        <div>
            <h1 className="Title">BIENVENIDOS A LOS ESO AWARDS</h1>
            <p className="Info">
                Quedan <span>{day} d : {hours} h : {minutes} m : {seconds} s</span> para las votaciones.
            </p>
            <p className="Info">
                Los ESO Awards son unos premios dedicados a diferentes personas que, durante la ESO, han
                asumido un rol importante dentro del centro educativo.
            </p>
            <p className="Info">
                Si queréis manteneros informados acerca de cómo van a ir desarrollándose los premios, no olvidéis
                seguirnos en Instagram
            </p>
            <Instagram url="https://www.instagram.com/eso.awards/" text="ESO Awards"/>
        </div>
    )
}