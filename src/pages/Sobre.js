import Instagram from "../components/Instagram";

/* pagina donde aparece iformacion sobre el evento*/
export default function Sobre() {
    return(
        <div>
            <h1 className="Title">Sobre la gala de premios</h1>
            <p className="Info">
                El evento será de <span>6:00 a 8:30 de la tarde.</span> De 5:00 a 6:00 mientras se llena la sala,
                en el hall habrá un photocall del público que vaya llegando.
                Por ello, <span>se ha de ir bien vestido.</span>
            </p>
            <p className="Info">
                Como la entrada es totalmente gratis,
                es necesario que, si pensáis llevar a alguien más con vosotros (familiar, amigo...)
                lo comuniquéis, ya sea en persona o por DM en Instagram.
            </p>
            <p className="Info">
                Además de llevarse a cabo la entrega de los diferentes premios,
                también se realizarán otras actividades,
                como actuaciones musicales y alguna que otra sorpresa que se irá revelando a lo largo de la gala.
            </p>
            <p className="Info">
                <span>Es una fiesta de despedida.</span>
            </p>
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2937.0231605124804!2d-5.5765501233826384!3d42.59725212008273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd379a90cf134f93%3A0x624fe94dd3fa4278!2zQXYuIE9yZG_DsW8gSUksIDE1LCAyNDAwMSBMZcOzbg!5e0!3m2!1ses!2ses!4v1713823895377!5m2!1ses!2ses"
            className="map" 
            allowfullscreen="" 
            loading="lazy" 
            referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            <p className="Info">
            Además de llevarse a cabo la entrega de los diferentes premios,
            también se realizarán otras actividades,
            como <span>actuaciones musicales</span> y <span>alguna que otra sorpresa</span> que se irá revelando a lo largo de la gala.
            </p>
            <p className="Info">
                El presentador de la gala será:
            </p>
            <Instagram url="https://www.instagram.com/aka.jorge.knk" text="Jorge San José Martínez"/>
            <p className="Info">
                los copresentadores serán:
            </p>
            <Instagram url="https://www.instagram.com/huguiiin._/" text=" Hugo Barrientos Álvarez"/>
            <Instagram url="https://www.instagram.com/javier___cobo/" text=" Javier Cobo Esperante"/>
            <p className="Info">
                Diseñador:
            </p>
            <Instagram url="https://www.instagram.com/josevi_._/" text="José Vicente Álvarez"/>
            <h1 className="Title">¿Cómo se elegirá al ganador de cada premio?</h1>
            <p className="Info">
                Para elegir a los ganadores se realizarán dos votaciones en las que podréis participar <span>todos los
                alumnos de cuarto de la ESO del centro.</span>
            </p>
            <p className="Info">
                <span>AVISO:</span> Os agradeceríamos que, a la hora de votar, os olvidarais de vuestro entorno y vuestros
                sentimientos y tratarais de <span>votar lo más objetivamente posible</span>. Al fin y al cabo, lo que buscamos es
                que los premios sean lo más justos y reales posibles. Esperamos vuestra colaboración.
            </p>
            <p className="Info">
                La votación se abrirá el <span>24/4/2024 y terminará el 30/4/2024</span>.
            </p>
            <p className="Info">
                La segunda votación se abrirá el <span>15/5/2024 y terminará el 10/6/2024</span>.
                En esta última votación, de los 4-5 nominados que hayan salido en cada premio, se elegirá al
                ganador.
            </p>
            <p className="Info">
                <span>RECORDAD VOTAR SIENDO OBJETIVOS.</span>
            </p>
        </div>
    )
}