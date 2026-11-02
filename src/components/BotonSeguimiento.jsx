import { useSelector, useDispatch } from "react-redux";

// Lee el estado global con useSelector y lo modifica despachando acciones.
export default function BotonSeguimiento({ solicitudId }) {
  const seguidas = useSelector((state) => state.seguidas);
  const dispatch = useDispatch();
  const siguiendo = seguidas.includes(solicitudId);

  return (
    <button
      onClick={() =>
        dispatch({ type: siguiendo ? "DEJAR_DE_SEGUIR" : "SEGUIR", payload: solicitudId })
      }
    >
      {siguiendo ? "Dejar de seguir" : "Seguir"}
    </button>
  );
}
