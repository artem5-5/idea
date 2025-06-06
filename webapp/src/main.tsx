import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ErrorBoundary } from 'react-error-boundary'
import { App } from './App.tsx'
import { AllIdeasPage } from './pages/AllIdeasPage/index.tsx'
import { ErrorFallback } from './pages/ErrorFallbackPage/index.tsx'

createRoot(document.getElementById('root')!).render(
  <ErrorBoundary FallbackComponent={ErrorFallback} onReset={AllIdeasPage}>
    <StrictMode>
      <App />
    </StrictMode>
  </ErrorBoundary>
)
