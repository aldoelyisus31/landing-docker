// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Eventos Pro. Todos los derechos reservados.
        </p>
        <p className="text-xs mt-2 text-gray-400">
          Sitio desarrollado por Aldo Escobedo 💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;
