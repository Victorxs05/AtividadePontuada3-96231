import '/.style.css'

export default function Header() {
    return (
        <header className="header">
            <div className="header-logo">Grande Homenagem</div>
            <nav className="header-nav">
                <a href="#mae">Mãe</a>
                <a href="#pai">Pai</a>
                <a href="#Fotos">Fotos familia</a>
                <a href="#videos">Vídeos</a>
            </nav>
        </header>
    );
}