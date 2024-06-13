/*Pagina de bienvenida default "/" */
import Instagram from "../components/Instagram"
import { useState } from "react";

function getTime(){
    const endtime = 'June 15 2024 0:0:00 ';
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor( (total/1000) % 60 );
    const minutes = Math.floor( (total/1000/60) % 60 );
    const hours = Math.floor( (total/(1000*60*60)) % 24 );
    const days = Math.floor( total/(1000*60*60*24) );

    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }

export default function Home (){
    const [day, setDay] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    setInterval(function(){
        setDay(getTime().days);
        setHours(getTime().hours);
        setMinutes(getTime().minutes);
        setSeconds(getTime().seconds);
    }, 1000);
    return (
        <div>
            <h1 className="Title">BIENVENIDOS A LOS ESO AWARDS</h1>
            <p className="Info">
                Quedan <span>{day} d : {hours} h : {minutes} m : {seconds} s</span> para que acabaen las II votaciones.
            </p>
            <hr></hr>
            <div>
                <h1 className="Title">Todo esto es posible gracias a :</h1>
                <div>
                    <h2 className="Title">Auto escuela master leon</h2>
                    <iframe className="map" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.272981131188!2d-5.57567972338286!3d42.59195142041902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379a97e269c42d%3A0xcdda9c7c0a232b85!2sAutoescuela%20Masterle%C3%B3n!5e0!3m2!1ses!2ses!4v1717848576768!5m2!1ses!2ses"></iframe>
                </div>
                <Instagram url="https://www.autoescuelamasterleon.com/" text="🌐 Web"/>
                <div>
                    <h2 className="Title">Inyección flecha</h2>
                    <iframe className="map" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.1491273136944!2d-5.560971323382727!3d42.594579420252245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379074fa718ed7%3A0xb847a92d3f96d612!2sInyecci%C3%B3n%20Flecha%2C%20S.L.!5e0!3m2!1ses!2ses!4v1717849253659!5m2!1ses!2ses"></iframe>
                </div>
                <Instagram url="https://www.paginasamarillas.es/f/leon/inyeccion-flecha-s-l-_002131787_000000001.html" text="🌐 Web"/>
                <div>
                    <h2 className="Title">Peluquería mimi</h2>
                    <iframe className="map" title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2936.959100020228!2d-5.564048223222204!3d42.59861127117158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd37907621eaf89d%3A0x92c5e545275d8b9c!2sPeluquer%C3%ADa%20Mimi!5e0!3m2!1ses!2ses!4v1717849565280!5m2!1ses!2ses"></iframe>           
                </div>
                <Instagram url="https://peluquerialolas.es/peluqueria-mimi/" text="🌐 Web"/>
            </div>
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