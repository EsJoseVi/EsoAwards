export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="site-title">
            Lancia Awords
        </a>
        <ul>
            <li>
                <a href="/votar">Votar</a>
            </li>
            <li>
                <a href="/sobre">Sobre</a>
            </li>
        </ul>
    </nav>
}