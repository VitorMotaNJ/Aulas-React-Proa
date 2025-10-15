import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Header from './Componentes/Header'
import Home from './Componentes/Home'
import Footer from './Componentes/Footer'
import Escocia from './Componentes/Escocia'
import GrandCanyon from './Componentes/Grand_canyon'
import MuralhaChina from './Componentes/Muralha_da_china'
import Aruba from './Componentes/Aruba'


function App() {


  return (
    <>
      <main>
        <Router>
          <Header />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/Escocia' element={<Escocia />} />
            <Route path='/GrandCanyon' element={<GrandCanyon />} />
            <Route path='/MuralhaChina' element={<MuralhaChina />} />
            <Route path='/Aruba' element={<Aruba />} />
          </Routes>
          <Footer />
        </Router>


      </main>
    </>
  )
}

export default App