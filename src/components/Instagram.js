export default function Instagram({text, url}){
    return(
        <p className="Info">
            <span><a href={url} target="_blank" rel="noopener noreferrer">{text}</a></span>
        </p>
    )
}