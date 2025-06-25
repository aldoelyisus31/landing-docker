// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        {/* Navbar fija arriba */}
        <Navbar />

        {/* Contenido de la página */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Puedes agregar más rutas aquí si las necesitas */}
          </Routes>
        </main>

        {/* Footer al fondo */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
