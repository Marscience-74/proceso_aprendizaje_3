import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Solicitudes from "./pages/Solicitudes";
import Seguimiento from "./pages/Seguimiento";
import Comparacion from "./pages/Comparacion";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
        <Route path="/comparacion" element={<Comparacion />} />
      </Routes>
    </BrowserRouter>
  );
}