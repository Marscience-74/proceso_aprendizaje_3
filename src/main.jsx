
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { store } from './store/index.js'
import { SolicitudesProvider } from './context/SolicitudesProvider.jsx'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <SolicitudesProvider>
        <App />
      </SolicitudesProvider>
    </Provider>
  </StrictMode>,
)