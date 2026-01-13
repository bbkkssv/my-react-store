
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import About from './pages/about';
import Admin from './pages/Admin';
import Catalog from './pages/Catalog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';

import Footer from './components/Footer';
import Navbar from './components/Navbar';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <BrowserRouter>
      <div className='bg-dark' data-bs-theme="dark">
        <Navbar />

        <main className='bg-dark text-light py-4'>
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
  )
}
export default App;