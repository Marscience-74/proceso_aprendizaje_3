// Datos de prueba (locales y simulados). El consumo de APIs con Axios es de la sesión 11.
// Estos nombres (ESTADOS, TIPOS, solicitudesIniciales) son el contrato común del equipo.

export const ESTADOS = ["Pendiente", "En revisión", "Aprobada", "Rechazada"];

export const TIPOS = [
  "Constancia de estudios",
  "Reprogramación de examen",
  "Retiro de curso",
  "Reserva de matrícula",
  "Convalidación de cursos",
  "Certificado de notas",
];

export const solicitudesIniciales = [
  { id: 1, tipo: "Constancia de estudios", descripcion: "Constancia para presentar en el centro de prácticas.", estado: "Pendiente", fecha: "2026-10-20" },
  { id: 2, tipo: "Reprogramación de examen", descripcion: "Cruce de horarios entre dos evaluaciones de la misma semana.", estado: "En revisión", fecha: "2026-10-21" },
  { id: 3, tipo: "Retiro de curso", descripcion: "Retiro de un curso electivo por cambio de horario laboral.", estado: "Aprobada", fecha: "2026-10-15" },
  { id: 4, tipo: "Reserva de matrícula", descripcion: "Reserva de matrícula para el siguiente periodo académico.", estado: "Rechazada", fecha: "2026-10-12" },
  { id: 5, tipo: "Certificado de notas", descripcion: "Certificado de notas del ciclo anterior para un trámite externo.", estado: "Pendiente", fecha: "2026-10-25" },
  { id: 6, tipo: "Convalidación de cursos", descripcion: "Convalidación de dos cursos aprobados en otra institución.", estado: "En revisión", fecha: "2026-10-18" },
];
