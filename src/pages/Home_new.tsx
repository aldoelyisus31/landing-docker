// src/pages/Home.tsx
const Home = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 text-center overflow-hidden">
      {/* Efectos de luces de fondo programados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Haces de luz dinámicos */}
        <div className="absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-kokelight-primary/30 via-kokelight-primary/10 to-transparent transform rotate-12 animate-pulse"></div>
        <div className="absolute top-0 right-1/3 w-1 h-full bg-gradient-to-b from-kokelight-secondary/30 via-kokelight-secondary/10 to-transparent transform -rotate-12 animate-pulse delay-500"></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-kokelight-primary/20 via-kokelight-primary/5 to-transparent transform rotate-6 animate-pulse delay-1000"></div>
        
        {/* Círculos de luz simulando spots */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-kokelight-primary/10 rounded-full blur-xl animate-ping delay-700"></div>
        <div className="absolute bottom-32 right-24 w-24 h-24 bg-kokelight-secondary/15 rounded-full blur-xl animate-ping delay-300"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-kokelight-primary/20 rounded-full blur-lg animate-ping delay-1500"></div>
        <div className="absolute bottom-20 left-1/3 w-20 h-20 bg-kokelight-secondary/10 rounded-full blur-xl animate-ping delay-1200"></div>
        
        {/* Grid de puntos LED simulado */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 gap-8 h-full w-full p-8">
            {[...Array(48)].map((_, i) => (
              <div 
                key={i} 
                className="w-2 h-2 bg-kokelight-primary rounded-full animate-pulse" 
                style={{ animationDelay: `${i * 0.1}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Líneas de scan técnico */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-kokelight-primary/30 to-transparent animate-pulse"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-kokelight-secondary/30 to-transparent animate-pulse delay-700"></div>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-4xl">
        {/* Título principal con efectos avanzados */}
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-outfit font-black mb-4 tracking-wide">
            <span className="text-kokelight-primary drop-shadow-[0_0_20px_rgba(255,166,0,0.8)] animate-pulse">
              JORGE
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              "KOKE"
            </span>
            <br />
            <span className="text-kokelight-secondary drop-shadow-[0_0_20px_rgba(255,213,79,0.6)]">
              LIGHTS
            </span>
          </h1>
          
          {/* Línea decorativa técnica */}
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="w-12 h-0.5 bg-kokelight-primary"></div>
            <div className="w-3 h-3 border-2 border-kokelight-primary rotate-45"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-kokelight-primary to-kokelight-secondary"></div>
            <div className="w-3 h-3 border-2 border-kokelight-secondary rotate-45"></div>
            <div className="w-12 h-0.5 bg-kokelight-secondary"></div>
          </div>
        </div>

        {/* Subtítulo técnico */}
        <div className="mb-8">
          <p className="text-xl md:text-2xl text-gray-300 mb-4 font-light">
            <span className="text-kokelight-primary font-semibold">INGENIERO AUDIOVISUAL</span> • 
            <span className="text-kokelight-secondary font-semibold"> PROGRAMACIÓN DE LUCES</span>
          </p>
          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Transformamos eventos masivos con tecnología audiovisual de alto nivel. 
            Especialistas en programación de luces, instalación de escenarios y sistemas de sonido profesional.
          </p>
        </div>

        {/* Estadísticas técnicas */}
        <div className="grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-kokelight-primary mb-1">500+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Eventos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-kokelight-secondary mb-1">50K+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Asistentes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-kokelight-primary mb-1">15+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Años</div>
          </div>
        </div>

        {/* Botones de acción */}
        <div className="flex justify-center gap-6 flex-wrap">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-kokelight-primary to-kokelight-secondary text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,166,0,0.5)]"
          >
            <span className="relative z-10 flex items-center gap-2">
              📞 CONTACTAR AHORA
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-kokelight-secondary to-kokelight-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a
            href="#portfolio"
            className="group relative border-2 border-kokelight-primary hover:border-kokelight-secondary text-kokelight-primary hover:text-black font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 overflow-hidden"
          >
            <span className="relative z-10">VER PORTFOLIO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-kokelight-primary to-kokelight-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>

        {/* Indicador de scroll */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-kokelight-primary rounded-full flex justify-center">
            <div className="w-1 h-3 bg-kokelight-primary rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Efectos adicionales de overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20"></div>
    </section>
  );
};

export default Home;
