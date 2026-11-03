import { useState } from 'react';
import { SolicitudesContext } from './SolicitudesContext';
import { solicitudesIniciales } from '../data/mockData';

// Provider: guarda las solicitudes y expone las funciones que las modifican.
// Se colocan aquí porque las usan varias vistas (Solicitudes y Seguimiento).
export const SolicitudesProvider = ({ children }) => {
  const [solicitudes, setSolicitudes] = useState(solicitudesIniciales);

  // Agrega una solicitud nueva en estado "Pendiente" y devuelve su id.
  const agregarSolicitud = ({ tipo, descripcion }) => {
    const id = Math.max(0, ...solicitudes.map((s) => s.id)) + 1;
    const nueva = {
      id,
      tipo,
      descripcion,
      estado: 'Pendiente',
      fecha: new Date().toISOString().slice(0, 10),
    };
    setSolicitudes([...solicitudes, nueva]);
    return id;
  };

  // Cambia el estado de una solicitud sin modificar el arreglo original.
  const cambiarEstado = (id, estado) => {
    setSolicitudes(solicitudes.map((s) => (s.id === id ? { ...s, estado } : s)));
  };

  return (
    <SolicitudesContext.Provider value={{ solicitudes, agregarSolicitud, cambiarEstado }}>
      {children}
    </SolicitudesContext.Provider>
  );
};
