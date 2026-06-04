import './style.css';
import foto1 from '../../../assets/foto1.jpeg';
import foto2 from '../../../assets/foto2.jpeg';
import foto3 from '../../../assets/foto3.jpeg';

export default function Fotos() {
    return (
        <section className="gallery-section" id="fotosfamilia">
            <h2>Fotos Familia</h2>
            <p className="photos-desc">Lembranças dos melhores momentos.</p>
            
            <div className="gallery-grid">
                <div className="family-card">
                    <img src={foto2} alt="Foto de Família" className="family-img" />
                    <div className="card-info">
                        <h3>Minha Vida!</h3>
                        <p>Todo amor e carinho.</p>
                    </div>
                </div>

                <div className="family-card">
                    <img src={foto3} alt="Memorias para sempre" className="family-img" />
                    <div className="card-info">
                        <h3>Melhores dias</h3>
                        <p>A felicidade mora nos detalhes que quase passam despercebidos.</p>
                    </div>
                </div>

                <div className="family-card">
                    <img src={foto1} alt="Conquistas Coletivas" className="family-img" />
                    <div className="card-info">
                        <h3>Inspiração para vida</h3>
                        <p>Fazendo parte das suas melhores lembranças.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}