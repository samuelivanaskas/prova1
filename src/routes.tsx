import Perfil from './pages/Perfill'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'

const Rotas = () => (
  <Routes>
    <Route path="/Home" element={<Home />} />
    <Route path="/Perfil" element={<Perfil />} />
  </Routes>
)

export default Rotas
