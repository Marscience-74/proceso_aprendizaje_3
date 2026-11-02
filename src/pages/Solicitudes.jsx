import { useState, useEffect } from "react";
import { solicitudesIniciales } from "../data/mockData";

export default function Solicitudes() {
  // La lista de solicitudes debe venir del estado global (Context API).
  // TODO (Context): cuando exista SolicitudesContexto, reemplazar la línea siguiente por:
  //   const { solicitudes } = useContext(SolicitudesContexto);
  const solicitudes = solicitudesIniciales;

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
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((sol) => (
              <tr key={sol.id}>
                <td>{sol.id}</td>
                <td>{sol.tipo}</td>
                <td><strong>{sol.estado}</strong></td>
                <td>{sol.fecha}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
