/*Pagina de bienvenida default "/" */
import Instagram from "../components/Instagram"


export default function Home (){
    return (
        <div>
            <h1 className="Title">BIENVENIDOS A LOS ESO AWARDS</h1>
            <p className="Info">
                Comprobar la carpeta de spam de vuestro correo de @educa.jcyl.es <span>Han comenzado las votaciones</span>.
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