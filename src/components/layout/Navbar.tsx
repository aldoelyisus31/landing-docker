const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-kokelight-primary/20 text-white">
      {/* Línea de luz superior */}
      <div className="h-0.5 bg-gradient-to-r from-transparent via-kokelight-primary to-transparent animate-pulse"></div>
      
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo con efecto de glow */}
        <div className="relative">
          <h1 className="text-2xl font-outfit font-bold tracking-wider text-kokelight-primary drop-shadow-[0_0_10px_rgba(255,166,0,0.5)]">
            KOKE
            <span className="text-white ml-1">LIGHTS</span>
          </h1>
          {/* Dots técnicos */}
          <div className="absolute -top-1 -right-2 w-2 h-2 bg-kokelight-secondary rounded-full animate-ping"></div>
          <div className="absolute -top-1 -right-2 w-2 h-2 bg-kokelight-secondary rounded-full"></div>
        </div>

        {/* Navegación con efectos */}
        <nav className="hidden md:flex space-x-8 font-medium">
          <a 
            href="#" 
            className="relative group py-2 px-4 transition-all duration-300 hover:text-kokelight-primary"
          >
            <span className="relative z-10">INICIO</span>
            <div className="absolute inset-0 bg-kokelight-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kokelight-primary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
          <a 
            href="#servicios" 
            className="relative group py-2 px-4 transition-all duration-300 hover:text-kokelight-primary"
          >
            <span className="relative z-10">SERVICIOS</span>
            <div className="absolute inset-0 bg-kokelight-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kokelight-primary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
          <a 
            href="#portfolio" 
            className="relative group py-2 px-4 transition-all duration-300 hover:text-kokelight-primary"
          >
            <span className="relative z-10">PORTFOLIO</span>
            <div className="absolute inset-0 bg-kokelight-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kokelight-primary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
          <a 
            href="#contacto" 
            className="relative group py-2 px-4 transition-all duration-300 hover:text-kokelight-primary"
          >
            <span className="relative z-10">CONTACTO</span>
            <div className="absolute inset-0 bg-kokelight-primary/10 scale-x-0 group-hover:scale-x-100 transition-transform origin-left rounded-md"></div>
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-kokelight-primary scale-x-0 group-hover:scale-x-100 transition-transform"></div>
          </a>
        </nav>

        {/* Botón de menú móvil */}
        <button className="md:hidden flex flex-col space-y-1 p-2 group">
          <div className="w-6 h-0.5 bg-kokelight-primary transition-all group-hover:bg-kokelight-secondary"></div>
          <div className="w-6 h-0.5 bg-kokelight-primary transition-all group-hover:bg-kokelight-secondary"></div>
          <div className="w-6 h-0.5 bg-kokelight-primary transition-all group-hover:bg-kokelight-secondary"></div>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
