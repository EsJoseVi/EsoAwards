/*Un componenete custom que agrega un pie de pagina*/
export default function Footer({content}) {
    return (
        <footer className="Footer">
            <p>{ content }</p>
        </footer>
    )
}