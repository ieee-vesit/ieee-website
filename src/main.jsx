import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource-variable/hanken-grotesk'
import './index.css'
import './theme/theme.css'
import './theme/components.css'
import App from './App.jsx'
import { ThemeProvider } from './theme/ThemeProvider.jsx'
import { initEffects } from './theme/effects.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
)

initEffects()

// Take the first-load logo screen away once the page has really loaded,
// but never before the logo has had a moment to be seen.
const MIN_SHOWN_MS = 1100
const bootLoader = document.getElementById('boot-loader')

function hideBootLoader() {
  if (!bootLoader) return
  const wait = Math.max(0, MIN_SHOWN_MS - performance.now())
  setTimeout(() => {
    bootLoader.classList.add('bl-hide')
    setTimeout(() => bootLoader.remove(), 700)
  }, wait)
}

if (document.readyState === 'complete') hideBootLoader()
else window.addEventListener('load', hideBootLoader, { once: true })
