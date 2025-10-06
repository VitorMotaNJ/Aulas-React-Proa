
import './App.css'
import Header from './Componentes/Header'
import Footer from './Componentes/Footer'
import Home from './Componentes/Home'
import Escocia from './Componentes/Escocia'
import Aruba from './Componentes/Aruba'
import Muralha_da_china from './Componentes/Muralha_da_china'
import Grand_canyon from './Componentes/Grand_canyon'

function App() {
  return (
    <>
      <main>
        <Header />
        <Home />
        <Aruba/>
        <Muralha_da_china/>
        <Grand_canyon/>
        <Escocia />
        <Footer />
      </main>
    </>
  )
}

export default App
