import { Route, Routes } from "react-router-dom"
import KeysPages from "./pages/KeysPages";
import KeysForm from "./pages/KeysForm";
import NotFoundPage from "./pages/NotFoundPage";
import PrestamosPage from "./pages/PrestamosPage";
import CrearUsuariosPage from "./pages/CrearUsuariosPage";
import HistorialPage from "./pages/HistorialPage";
import SolicitarPrestamoPage from "./pages/SolicitarPrestamoPage";
import HomePage from "./pages/HomePage";

import Navbar from "./components/navbar";
import UsersPage from "./pages/UsersPage";

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/Llaves" element={<KeysPages/>} />
      <Route path="/Crear-Ambiente" element={<KeysForm/>} />
      <Route path="/Prestamos" element={<PrestamosPage/>} />
      <Route path="/Crear-Usuarios" element={<CrearUsuariosPage/>} />
      <Route path="/Historial" element={<HistorialPage/>} />
      <Route path="/Solicitar-Prestamo" element={<SolicitarPrestamoPage/>} />
      <Route path="/Usuarios" element={<UsersPage/>}/>
      <Route path="*" element={<NotFoundPage/>}/>
    </Routes>
    </>
  )
}

export default App
