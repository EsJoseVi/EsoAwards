import Instagram from "../components/Instagram";

/* pagina donde aparece iformacion sobre el evento*/
export default function Sobre() {
    return(
        <div>
            <h1 className="Title">Sobre la gala de premios</h1>
            <p className="Info">
            En total serán <span>12 premios</span>,
            que serán entregados en persona en la gala que se celebrará el día <span>21 de junio</span>
            en el <span>Salón de Actos del Ayuntamiento (Calle Alfonso V, 3 León, 24003)</span>.
            La entrada será completamente <span>gratuita</span>.
            </p>
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
                La votación se abrirá el <span>22/4/2024 y terminará el 30/4/2024</span>.
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