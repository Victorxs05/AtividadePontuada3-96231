import './style.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">Homenagem Especial</div>
            <nav className="nav-menu">
                <a href="inicio" className="header-links">Inicio</a>
                <a href="#mae" className="header-links">Mãe</a>
                <a href="#pai" className="header-links">Pai</a>
                <a href="#fotos" className="header-links">Fotos familia</a>
                <a href="#videos" className="header-links">Vídeos</a>
            </nav>
        </header>
    );
}
