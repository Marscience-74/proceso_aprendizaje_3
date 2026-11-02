import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// Enlace de la barra que muestra cuántas solicitudes se siguen (estado de Redux).
export default function ContadorSeguimiento() {
  const seguidas = useSelector((state) => state.seguidas);

  return (
    <Link to="/seguimiento" style={{ color: "white", textDecoration: "none" }}>
      Seguimiento ({seguidas.length})
    </Link>
  );
}
