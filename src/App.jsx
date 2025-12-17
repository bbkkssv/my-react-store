import Footer from './components/Footer'
import Navbar from './components/navbar'
import Catalog from './pages/Catalog'

// Main App component
function App() {
  return (
    <div className="d-flex flex-column min-vh-100 bg-black">
      <Navbar />
      <main className="flex-grow-1">
        <Catalog />
      </main>
      <Footer />
    </div>
  );
}
export default App;