import Instagram from "../components/Instagram";

/*Pagina para despues de votar "/" */
export default function Partners (){
    return (
        <>
            <p className="Title">Patrocindadores :</p>
            <p className="Info">
                Si quereis ser patrocinadores del evento podeis contactar con nosotros por:
            </p>
            <p className="Info"><a href= "mailto: lanciaawords@gmail.com"> lanciaawords@gmail.com </a></p>
            <Instagram url="https://www.instagram.com/eso.awards/" text="EsoAwards"/>
        </>
    )
}