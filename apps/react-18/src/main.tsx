import { AuthProvider } from '@aroma/sdk-react-17'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
)
