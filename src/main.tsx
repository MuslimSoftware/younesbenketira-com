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

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

const root = ReactDOM.createRoot(rootElement)

const renderApp = () => {
  root.render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  )
}

const loadFontsAndRender = async () => {
  if ('fonts' in document && typeof document.fonts.load === 'function') {
    try {
      await document.fonts.load("400 1em 'Great Vibes'")
    } catch (error) {
      // Continue with rendering even if the font fails to preload
    }
  }

  renderApp()
}

loadFontsAndRender()