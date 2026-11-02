import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Inicio from "./pages/Inicio";
import Solicitudes from "./pages/Solicitudes";
import Seguimiento from "./pages/Seguimiento";
import './App.css'

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/solicitudes" element={<Solicitudes />} />
        <Route path="/seguimiento" element={<Seguimiento />} />
      </Routes>
    </BrowserRouter>
  );
}