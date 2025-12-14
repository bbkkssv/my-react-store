
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/navbar'
import Catalog from './pages/Catalog'

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Catalog />
        <Footer />
      </div>
    </>
  );
}
export default App;