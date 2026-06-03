import './style.css'

export default function Home() {
    return (
        <main className="home">
            <section id="mae">
                <h2>Mãe!</h2>
                <p>Obrigado por tudo, eu te amo!</p>
            </section>
            
            <section id="pai">
                <h2>Pai!</h2>
                <p>Obrigado por todos ensinamentos, você é minha maior inspiração, eu te amo!</p>
            </section>
            
            <section id="Fotos">
                <h2>Fotos Familia</h2>
                <div className="fotos-familia">
                    <div className="foto">Foto 1</div>
                    <div className="foto">Foto 2</div>
                    <div className="foto">Foto 3</div>
                </div>
            </section>

            <section id="Videos">
                <h2>Videos Familia</h2>
                <div className="videos-familia">
                <video controls width="400">
                <source src="/assets/video.mp4" type="video/mp4" />
                </video>
                </div>
            </section>
        </main>
    );
}
