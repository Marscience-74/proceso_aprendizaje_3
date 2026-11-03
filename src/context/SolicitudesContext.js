import { createContext } from 'react';

// Contexto con valor por defecto (describe lo que ofrece el provider).
export const SolicitudesContext = createContext({
  solicitudes: [],
  agregarSolicitud: () => {},
  cambiarEstado: () => {},
});
