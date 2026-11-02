// Necesidad acotada del caso: marcar solicitudes "en seguimiento".
// El estado guarda solo los ids de las solicitudes seguidas.
const estadoInicial = { seguidas: [] };

// Reducer: función pura. Recibe el estado actual y una acción, y devuelve un
// estado NUEVO (nunca modifica el anterior).
export function seguimientoReducer(state = estadoInicial, action) {
  switch (action.type) {
    case "SEGUIR":
      if (state.seguidas.includes(action.payload)) return state;
      return { seguidas: [...state.seguidas, action.payload] };
    case "DEJAR_DE_SEGUIR":
      return { seguidas: state.seguidas.filter((id) => id !== action.payload) };
    default:
      return state;
  }
}
