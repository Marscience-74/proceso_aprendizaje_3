import { useState, useEffect, useContext } from "react";
import BotonSeguimiento from "../components/BotonSeguimiento";
import { SolicitudesContext } from "../context/SolicitudesContext";
import { ESTADOS } from "../data/mockData";

export default function Solicitudes() {
  // La lista y la función para cambiar el estado vienen del estado global (Context API).
  const { solicitudes, cambiarEstado } = useContext(SolicitudesContext);

  const [cargando, setCargando] = useState(true);

  // useEffect con []: se ejecuta al montar. Simula una carga (sin API) y limpia el temporizador.
  useEffect(() => {
    const timer = setTimeout(() => {
      setCargando(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Solicitudes</h2>

      {cargando ? (
        <p>Cargando información...</p>
      ) : (
        <table cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Tipo de Trámite</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Cambiar estado</th>
              <th>Seguimiento</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((sol) => (
              <tr key={sol.id}>
                <td>{sol.id}</td>
                <td>{sol.tipo}</td>
                <td><strong>{sol.estado}</strong></td>
                <td>{sol.fecha}</td>
                <td>
                  <select
                    aria-label={`Cambiar estado de la solicitud ${sol.id}`}
                    value={sol.estado}
                    onChange={(e) => cambiarEstado(sol.id, e.target.value)}
                  >
                    {ESTADOS.map((estado) => (
                      <option key={estado}>{estado}</option>
                    ))}
                  </select>
                </td>
                {/* Temporal: el botón pasará a la página de Detalle cuando exista. */}
                <td><BotonSeguimiento solicitudId={sol.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
