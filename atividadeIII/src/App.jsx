import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/home'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Header />
        <Footer />
        <Home />
      </div>
    </>
  )
}

export default App
