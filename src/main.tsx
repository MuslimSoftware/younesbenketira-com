import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProfessionalPage from './components/ProfessionalPage'
import PersonalPageLayout from './components/PersonalPageLayout'
import './index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProfessionalPage />
  },
  {
    path: "/personal",
    element: <PersonalPageLayout />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)