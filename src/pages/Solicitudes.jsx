import { useState, useEffect } from "react";
import { solicitudesIniciales } from "../data/mockData";

export default function Solicitudes() {
  const [solicitudes, setSolicitudes] = useState([]);
  const [cargando, setCargando] = useState(true);


  useEffect(() => {
    const timer = setTimeout(() => {
      setSolicitudes(solicitudesIniciales);
      setCargando(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);


  const eliminarSolicitud = (id) => {
    const nuevaLista = solicitudes.filter(solicitud => solicitud.id !== id);
    setSolicitudes(nuevaLista);
  };

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Solicitudes</h2>
      
      {cargando ? (
        <p>Cargando información...</p>
      ) : (
        <table  cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Tipo de Trámite</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {solicitudes.map((sol) => (
              <tr key={sol.id}>
                <td>{sol.id}</td>
                <td>{sol.tipo}</td>
                <td><strong>{sol.estado}</strong></td>
                <td>
                  <button onClick={() => eliminarSolicitud(sol.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}