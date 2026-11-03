import { useContext } from "react";
import { useSelector } from "react-redux";
import { SolicitudesContext } from "../context/SolicitudesContext";
import BotonSeguimiento from "../components/BotonSeguimiento";

export default function Seguimiento() {
  // Las solicitudes vienen del estado global (Context API).
  const { solicitudes } = useContext(SolicitudesContext);

  // Los ids de las solicitudes seguidas vienen de Redux.
  const seguidas = useSelector((state) => state.seguidas);
  const lista = solicitudes.filter((s) => seguidas.includes(s.id));

  return (
    <main style={{ padding: "2rem" }}>
      <h2>Solicitudes en seguimiento (Redux)</h2>

      {lista.length === 0 ? (
        <p>Aún no sigues ninguna solicitud. Entra a Solicitudes y pulsa "Seguir".</p>
      ) : (
        <table cellPadding="10" style={{ borderCollapse: "collapse", width: "100%", marginTop: "1rem" }}>
          <thead>
            <tr style={{ backgroundColor: "#f2f2f2" }}>
              <th>ID</th>
              <th>Tipo de Trámite</th>
              <th>Estado</th>
              <th>Fecha</th>
              <th>Seguimiento</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((sol) => (
              <tr key={sol.id}>
                <td>{sol.id}</td>
                <td>{sol.tipo}</td>
                <td><strong>{sol.estado}</strong></td>
                <td>{sol.fecha}</td>
                <td><BotonSeguimiento solicitudId={sol.id} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </main>
  );
}
