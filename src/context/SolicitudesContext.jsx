import { createContext, useState } from 'react';

export const SolicitudesContext = createContext();

export const SolicitudesProvider = ({ children }) => {
  const [solicitudes, setSolicitudes] = useState([
    { id: 1, titulo: 'Cambio de horario', estado: 'Pendiente' },
    { id: 2, titulo: 'Justificación de inasistencia', estado: 'Aprobado' }
  ]);

  const agregarSolicitud = (nuevaSolicitud) => {
    setSolicitudes([...solicitudes, nuevaSolicitud]);
  };

  return (
    <SolicitudesContext.Provider value={{ solicitudes, agregarSolicitud }}>
      {children}
    </SolicitudesContext.Provider>
  );
};