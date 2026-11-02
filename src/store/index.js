// Store: único almacén global de Redux.
// Nota: en Redux 5 createStore aparece marcado como obsoleto (solo es un aviso
// visual); sigue funcionando. Lo recomendado hoy es Redux Toolkit.
import { createStore } from "redux";
import { seguimientoReducer } from "./seguimientoReducer";

export const store = createStore(seguimientoReducer);
