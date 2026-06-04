import './style.css';
import Homenagem from '../../components/sections/Homenagem';
import Fotos from '../../components/sections/Fotos';
import Pai from '../../components/sections/Pai';
import Mae from '../../components/sections/Mae';
import Videos from '../../components/sections/Videos';

export default function Home() {
    return (
        <main className="home-content">
            <Homenagem />
            <Fotos />
            <Pai />
            <Mae />
            <Videos />
        </main>
    );
}
