
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/About';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import Navbar from './components/Navbar';
import GlobalProvider from './state/globalProvider';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <div className='bg-wa-cream min-vh-100 d-flex flex-column'>
          <Navbar />

          <main className='bg-wa-cream flex-fill py-4'>
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path="/catalog" element={<Catalog />}></Route>
              <Route path="/contact" element={<Contact />}></Route>
              <Route path="/admin" element={<Admin />}></Route>
              <Route path="*" element={<NotFound/>}></Route>
            </Routes>
          </main>

          <Footer />
        </div>
      </BrowserRouter>
    </GlobalProvider>
  )
}
export default App;