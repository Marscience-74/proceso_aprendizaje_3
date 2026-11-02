import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ padding: "1rem", backgroundColor: "#0047AB", color: "white" }}>
      <h2>Portal Academico</h2>
      <ul style={{ display: "flex", gap: "1rem", listStyle: "none", padding: 0 }}>
        <li><Link to="/" style={{ color: "white", textDecoration: "none" }}>Inicio</Link></li>
        <li><Link to="/solicitudes" style={{ color: "white", textDecoration: "none" }}>Solicitudes</Link></li>
      </ul>
    </nav>
  );
}