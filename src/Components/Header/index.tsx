import { Link } from "react-router-dom"
import "./style.min.css"

import Logo from "../../Assets/logo.png"

export function Header() {
    return (
        <header className="cr-cabecalho">
            <div className="cr-cabecalho__logo">
                <img src={Logo} alt="Logo" />
            </div>
            <nav className="cr-cabecalho__links">
                <div className="cr-cabecalho__links-link">
                    <Link to={"/"}>Home</Link>
                </div>
                <div className="cr-cabecalho__links-link">
                    <Link to={"/manifesto"}>Manifesto</Link>
                </div>
                <div className="cr-cabecalho__links-link">
                    <Link to={"/historico"}>Histórico</Link>
                </div>
                <div className="cr-cabecalho__links-link">
                    <Link to={"/sobre"}>Sobre</Link>
                </div>
            </nav>
        </header>
    )
}