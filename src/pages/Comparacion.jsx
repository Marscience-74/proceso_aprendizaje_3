const celda = { border: "1px solid #999", padding: "0.5rem", textAlign: "left" };
const tabla = { borderCollapse: "collapse", width: "100%", marginTop: "0.5rem", marginBottom: "1.5rem" };

export default function Comparacion() {
  return (
    <main style={{ padding: "2rem" }}>
      <h2>Context API vs Redux</h2>

      <h3>Comparación general</h3>
      <table style={tabla}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={celda}>Aspecto</th><th style={celda}>Context API</th><th style={celda}>Redux</th>
          </tr>
        </thead>
        <tbody>
          <tr><td style={celda}>Complejidad</td><td style={celda}>Baja</td><td style={celda}>Media/Alta</td></tr>
          <tr><td style={celda}>Escalabilidad</td><td style={celda}>Media</td><td style={celda}>Alta</td></tr>
          <tr><td style={celda}>Depuración</td><td style={celda}>Limitada</td><td style={celda}>Herramientas avanzadas</td></tr>
          <tr><td style={celda}>Librerías externas</td><td style={celda}>No</td><td style={celda}>Sí</td></tr>
        </tbody>
      </table>

      {/* NOTA: la columna de Context describe el contrato acordado con la persona B;
          confirmar que coincide con lo implementado al integrar. */}
      <h3>En nuestra implementación</h3>
      <table style={tabla}>
        <thead>
          <tr style={{ backgroundColor: "#f2f2f2" }}>
            <th style={celda}>Aspecto</th><th style={celda}>Context API</th><th style={celda}>Redux</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={celda}>Qué guarda</td>
            <td style={celda}>Las solicitudes y sus estados</td>
            <td style={celda}>Los ids de las solicitudes en seguimiento</td>
          </tr>
          <tr>
            <td style={celda}>Cómo se modifica</td>
            <td style={celda}>Funciones del provider (agregarSolicitud, cambiarEstado)</td>
            <td style={celda}>Acciones SEGUIR y DEJAR_DE_SEGUIR procesadas por el reducer</td>
          </tr>
          <tr>
            <td style={celda}>Código necesario</td>
            <td style={celda}>Contexto y provider</td>
            <td style={celda}>Reducer, store, Provider de react-redux (y una dependencia externa)</td>
          </tr>
          <tr>
            <td style={celda}>Cómo se lee</td>
            <td style={celda}>useContext</td>
            <td style={celda}>useSelector (y useDispatch para escribir)</td>
          </tr>
        </tbody>
      </table>

      <p>
        Para los datos del caso nos bastó Context API: es simple y no requiere librerías. Redux dio un flujo
        explícito (acción, reducer, store) y más trazabilidad, pero para una necesidad tan pequeña exige más
        código. Redux se justificaría si el estado creciera y varios módulos lo modificaran.
      </p>
    </main>
  );
}
