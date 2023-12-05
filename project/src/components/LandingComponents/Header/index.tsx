// import "../global.css"
import "./styles.css"

export default function HeaderComponent() {
    return (
        <div className="wrapper">
            <header>
                <nav className="max-width">
                    <div className="nav-title">
                        <p className="title-name">NECTARTEC</p>
                    </div>
                    <ul className="nav-list">
                        <li>
                            <a href="#home">Home</a>
                        </li>
                        <li>
                            <a href="#about">Sobre</a>
                        </li>
                        <li>
                            <a href="#services">Serviços</a>
                        </li>
                        <li>
                            <a href="#clients">Parceiros</a>
                        </li>
                        <li>
                            <a href="#contact">Contato</a>
                        </li>
                        <li>
                            <a href="/signin">Acesso</a>
                        </li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}