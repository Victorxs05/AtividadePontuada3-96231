import './style.css';
import Fotos from '../../components/sections/Fotos';
import Pai from '../../components/sections/Pai';
import Mae from '../../components/sections/Mae';
import Videos from '../../components/sections/Videos';
import Hero from '../../components/sections/Hero';

export default function Home() {
    return (
        <main className="home-content">
            <Hero />
            <Fotos />
            <Pai />
            <Mae />
            <Videos />
        </main>
    );
}
