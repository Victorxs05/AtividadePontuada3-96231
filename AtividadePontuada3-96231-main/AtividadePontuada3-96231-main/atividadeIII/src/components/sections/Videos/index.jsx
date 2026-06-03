import './style.css';

export default function Video() {
    return (
        <section className="video-section" id="videos">
            <h2>Dedicado ao meus pais! Aqueles que a cada conquista esteve ao meu lado.</h2>
            <div className="video-container">
                <iframe
                    src="https://youtu.be/DO5WHMIfjrw?si=MLAjJKGd6Es7VFfL"
                    title="Xande de Pilares - Gratidão"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                ></iframe>
            </div>
        </section>
    );
}