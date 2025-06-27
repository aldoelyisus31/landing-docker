// src/components/layout/Footer.tsx
const Footer = () => {
  return (
    <footer className="relative bg-black text-white border-t border-kokelight-primary/20 overflow-hidden pt-16 pb-8">
      {/* Efectos de luces de fondo del footer */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Haces de luz sutiles */}
        <div className="absolute top-0 left-1/6 w-1 h-full bg-gradient-to-b from-kokelight-primary/20 to-transparent opacity-50"></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-kokelight-secondary/20 to-transparent opacity-50"></div>
        <div className="absolute top-0 left-3/4 w-1 h-full bg-gradient-to-b from-kokelight-primary/15 to-transparent opacity-50"></div>
        
        {/* Círculos de luz sutiles */}
        <div className="absolute top-4 left-20 w-16 h-16 bg-kokelight-primary/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-4 right-24 w-20 h-20 bg-kokelight-secondary/10 rounded-full blur-xl"></div>
        <div className="absolute top-6 right-32 w-12 h-12 bg-kokelight-primary/8 rounded-full blur-lg"></div>
        
        {/* Línea de scan horizontal */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-kokelight-primary/30 to-transparent animate-pulse"></div>
        
        {/* Partículas pequeñas */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-0.5 h-0.5 bg-kokelight-secondary/40 rounded-full animate-ping"
              style={{
                left: `${15 + (i * 12)}%`,
                top: `${30 + (i * 8)}%`,
                animationDelay: `${i * 1.2}s`,
                animationDuration: '3s'
              }}
            ></div>
          ))}
        </div>
        
        {/* Gradiente superior para cubrir el inicio de las luces */}
        <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black/80 via-black/60 to-transparent"></div>
      </div>
      
      {/* Línea superior con efecto glow */}
      <div className="h-px bg-gradient-to-r from-transparent via-kokelight-primary to-transparent mb-8"></div>
      
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-left">
          {/* Logo y descripción */}
          <div className="md:col-span-1">
            <h3 className="text-2xl font-outfit font-bold text-kokelight-primary mb-3 drop-shadow-[0_0_8px_rgba(255,166,0,0.4)]">
              KOKE<span className="text-kokelight-secondary">LIGHTS</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Ingeniería audiovisual profesional para eventos masivos. 
              Especialistas en programación de luces y sistemas de sonido.
            </p>
          </div>
          
          {/* Enlaces rápidos */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-kokelight-secondary mb-4">Enlaces</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#inicio" className="text-gray-400 hover:text-kokelight-primary transition-colors">
                  Inicio
                </a>
              </li>
              <li>
                <a href="#servicios" className="text-gray-400 hover:text-kokelight-primary transition-colors">
                  Servicios
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-gray-400 hover:text-kokelight-primary transition-colors">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contacto" className="text-gray-400 hover:text-kokelight-primary transition-colors">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contacto y redes */}
          <div className="md:col-span-1">
            <h4 className="text-lg font-semibold text-kokelight-secondary mb-4">Contacto</h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-kokelight-primary">📱</span>
                <a href="https://wa.me/5210000000000" className="hover:text-kokelight-primary transition-colors">
                  WhatsApp
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-kokelight-primary">📧</span>
                <a href="mailto:info@kokelights.com" className="hover:text-kokelight-primary transition-colors">
                  info@kokelights.com
                </a>
              </p>
              <p className="flex items-center justify-center md:justify-start gap-2">
                <span className="text-kokelight-primary">📍</span>
                <span>México</span>
              </p>
            </div>
          </div>
        </div>
        
        {/* Separador con efectos */}
        <div className="flex items-center justify-center gap-4 my-8">
          <div className="w-16 h-px bg-kokelight-primary/50"></div>
          <div className="w-2 h-2 border border-kokelight-primary rounded-full animate-pulse"></div>
          <div className="w-32 h-px bg-gradient-to-r from-kokelight-primary/50 via-kokelight-secondary/50 to-kokelight-primary/50"></div>
          <div className="w-2 h-2 border border-kokelight-secondary rounded-full animate-pulse"></div>
          <div className="w-16 h-px bg-kokelight-secondary/50"></div>
        </div>
        
        {/* Copyright con estilo técnico */}
        <div className="text-center space-y-2">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} <span className="text-kokelight-primary font-semibold">KOKELIGHTS</span>. 
            Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-600 flex items-center justify-center gap-2">
            <span className="text-kokelight-secondary">⚡</span>
            Sitio desarrollado por 
            <span className="text-kokelight-primary font-medium">Aldo Escobedo</span>
            <span className="text-kokelight-secondary">💡</span>
          </p>
        </div>
      </div>
      
      {/* Efectos de esquinas del footer */}
      <div className="absolute bottom-0 left-0 w-16 h-16 border-l border-b border-kokelight-primary/20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-r border-b border-kokelight-secondary/20"></div>
    </footer>
  );
};

export default Footer;
