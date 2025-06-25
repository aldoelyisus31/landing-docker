// src/components/layout/Navbar.tsx
const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-700">Eventos Pro</h1>
        <nav className="space-x-6 text-gray-700 font-medium">
          <a href="#" className="hover:text-blue-600">Inicio</a>
          <a href="#servicios" className="hover:text-blue-600">Servicios</a>
          <a href="#contacto" className="hover:text-blue-600">Contacto</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
