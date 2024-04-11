/*Pagina de bienvenida default "/" */
import Instagram from "../components/Instagram"

export default function Home (){
    return (
        <div>
            <h1 className="Title">BIENVENIDOS A LOS LANCIA AWARDS</h1>
            <p className="Info">
                Los Lancia Awards son unos premios dedicados a diferentes personas que, durante la ESO, han
                asumido un rol importante dentro del centro educativo, tanto alumnos como docentes.
            </p>
            <p className="Info">
                Si queréis manteneros informados acerca de cómo van a ir desarrollándose los premios, no olvidéis
                seguirnos en Instagram
            </p>
            <Instagram url="https://www.instagram.com/eso.awards/" text="Lancia Awards"/>
        </div>
    )
}