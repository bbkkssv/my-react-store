import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './App.jsx'

// Render the App component to the root element
createRoot(document.getElementById('root')).render(
  <App />
)
