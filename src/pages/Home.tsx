// src/pages/Home.tsx
const Home = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 pt-24 text-center overflow-hidden">
      {/* Efectos de luces de fondo programados */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Haces de luz dinámicos con animaciones personalizadas */}
        <div className="absolute top-0 left-1/4 w-2 h-full bg-gradient-to-b from-kokelight-primary/40 via-kokelight-primary/15 to-transparent light-beam"></div>
        <div className="absolute top-0 right-1/3 w-2 h-full bg-gradient-to-b from-kokelight-secondary/40 via-kokelight-secondary/15 to-transparent light-beam" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-0 left-2/3 w-1 h-full bg-gradient-to-b from-kokelight-primary/30 via-kokelight-primary/10 to-transparent light-beam" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-kokelight-secondary/25 via-kokelight-secondary/8 to-transparent light-beam" style={{ animationDelay: '3s' }}></div>
        
        {/* Círculos de luz simulando spots mejorados */}
        <div className="absolute top-20 left-20 w-40 h-40 bg-kokelight-primary/15 rounded-full blur-2xl spot-light"></div>
        <div className="absolute bottom-32 right-24 w-32 h-32 bg-kokelight-secondary/20 rounded-full blur-2xl spot-light" style={{ animationDelay: '1.5s' }}></div>
        <div className="absolute top-1/2 left-10 w-24 h-24 bg-kokelight-primary/25 rounded-full blur-xl spot-light" style={{ animationDelay: '2.5s' }}></div>
        <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-kokelight-secondary/15 rounded-full blur-2xl spot-light" style={{ animationDelay: '0.8s' }}></div>
        <div className="absolute top-32 right-20 w-20 h-20 bg-kokelight-primary/20 rounded-full blur-xl spot-light" style={{ animationDelay: '1.8s' }}></div>
        
        {/* Grid de puntos LED simulado más denso */}
        <div className="absolute inset-0 opacity-15">
          <div className="grid grid-cols-16 gap-6 h-full w-full p-6">
            {[...Array(64)].map((_, i) => (
              <div 
                key={i} 
                className="w-1.5 h-1.5 bg-kokelight-primary rounded-full led-grid" 
                style={{ animationDelay: `${i * 0.05}s` }}
              ></div>
            ))}
          </div>
        </div>
        
        {/* Líneas de scan técnico mejoradas */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-kokelight-primary/40 to-transparent scan-line"></div>
          <div className="absolute bottom-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-kokelight-secondary/40 to-transparent scan-line" style={{ animationDelay: '3s' }}></div>
          <div className="absolute top-2/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-kokelight-primary/30 to-transparent scan-line" style={{ animationDelay: '1.5s' }}></div>
        </div>
        
        {/* Partículas flotantes */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div 
              key={i}
              className="absolute w-1 h-1 bg-kokelight-secondary/60 rounded-full animate-ping"
              style={{
                left: `${10 + (i * 7)}%`,
                top: `${20 + (i * 5)}%`,
                animationDelay: `${i * 0.7}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-5xl">
        {/* Título principal con efectos avanzados */}
        <div className="mb-10">
          <h1 className="text-6xl md:text-8xl font-outfit font-black mb-6 tracking-wide leading-tight">
            <span className="text-kokelight-primary title-glow animate-pulse">
              JORGE
            </span>
            <br />
            <span className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">
              "KOKE"
            </span>
            <br />
            <span className="text-kokelight-secondary secondary-glow">
              LIGHTS
            </span>
          </h1>
          
          {/* Línea decorativa técnica mejorada */}
          <div className="flex justify-center items-center gap-6 mb-8">
            <div className="w-16 h-px bg-kokelight-primary animate-pulse"></div>
            <div className="w-4 h-4 border-2 border-kokelight-primary rotate-45 animate-spin" style={{ animationDuration: '8s' }}></div>
            <div className="w-32 h-px bg-gradient-to-r from-kokelight-primary via-kokelight-secondary to-kokelight-primary"></div>
            <div className="w-4 h-4 border-2 border-kokelight-secondary rotate-45 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}></div>
            <div className="w-16 h-px bg-kokelight-secondary animate-pulse"></div>
          </div>
        </div>

        {/* Subtítulo técnico mejorado */}
        <div className="mb-10">
          <p className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
            <span className="text-kokelight-primary font-semibold">INGENIERO AUDIOVISUAL</span> • 
            <span className="text-kokelight-secondary font-semibold"> PROGRAMACIÓN DE LUCES</span>
          </p>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Transformamos eventos masivos con tecnología audiovisual de alto nivel. 
            Especialistas en programación de luces, instalación de escenarios y sistemas de sonido profesional.
          </p>
        </div>

        {/* Especialidades técnicas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 max-w-4xl mx-auto">
          <div className="text-center p-4 border border-kokelight-primary/20 rounded-lg backdrop-blur-sm bg-black/20">
            <div className="text-3xl mb-2">🎛️</div>
            <div className="text-sm text-kokelight-primary font-semibold">CONSOLAS DMX</div>
          </div>
          <div className="text-center p-4 border border-kokelight-secondary/20 rounded-lg backdrop-blur-sm bg-black/20">
            <div className="text-3xl mb-2">💡</div>
            <div className="text-sm text-kokelight-secondary font-semibold">MOVING HEADS</div>
          </div>
          <div className="text-center p-4 border border-kokelight-primary/20 rounded-lg backdrop-blur-sm bg-black/20">
            <div className="text-3xl mb-2">📺</div>
            <div className="text-sm text-kokelight-primary font-semibold">LED WALLS</div>
          </div>
          <div className="text-center p-4 border border-kokelight-secondary/20 rounded-lg backdrop-blur-sm bg-black/20">
            <div className="text-3xl mb-2">🔊</div>
            <div className="text-sm text-kokelight-secondary font-semibold">AUDIO PRO</div>
          </div>
        </div>

        {/* Estadísticas técnicas */}
        <div className="grid grid-cols-3 gap-10 mb-14 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-kokelight-primary mb-2 title-glow">500+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Eventos</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-kokelight-secondary mb-2 secondary-glow">50K+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Asistentes</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold text-kokelight-primary mb-2 title-glow">15+</div>
            <div className="text-sm text-gray-400 uppercase tracking-wide">Años</div>
          </div>
        </div>

        {/* Botones de acción mejorados */}
        <div className="flex justify-center gap-8 flex-wrap mb-20">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative bg-gradient-to-r from-kokelight-primary to-kokelight-secondary text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 btn-glow shadow-lg"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg text-white transition-colors">
              📞 CONTACTAR AHORA
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-kokelight-secondary to-kokelight-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
          
          <a
            href="#portfolio"
            className="group relative border-2 border-kokelight-primary text-kokelight-primary hover:text-white font-bold px-10 py-5 rounded-full transition-all duration-300 hover:scale-105 overflow-hidden shadow-lg"
          >
            <span className="relative z-10 text-lg transition-colors">VER PORTFOLIO</span>
            <div className="absolute inset-0 bg-gradient-to-r from-kokelight-primary to-kokelight-secondary scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></div>
          </a>
        </div>
      </div>

      {/* Efectos adicionales de overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30"></div>
      
      {/* Haces de luz desde abajo - CON ESCENARIO */}
      <div className="absolute bottom-0 left-0 right-0 h-full overflow-hidden pointer-events-none">
        {/* 7 Haces de luz desde el centro */}
        {[...Array(7)].map((_, i) => (
          <div 
            key={`light-${i}`}
            className="absolute w-1.5 origin-bottom"
            style={{ 
              bottom: '0px', // Desde el fondo de la página
              left: '50%', // Todas empiezan desde el centro
              transform: 'translateX(-50%)', // Centradas perfectamente
              height: 'calc(100vh - 100px)', // Altura para llegar casi al navbar
              background: `linear-gradient(to top, ${i % 2 === 0 ? 'rgba(255, 166, 0, 0.4)' : 'rgba(255, 213, 79, 0.4)'} 0%, ${i % 2 === 0 ? 'rgba(255, 166, 0, 0.25)' : 'rgba(255, 213, 79, 0.25)'} 20%, ${i % 2 === 0 ? 'rgba(255, 166, 0, 0.15)' : 'rgba(255, 213, 79, 0.15)'} 40%, ${i % 2 === 0 ? 'rgba(255, 166, 0, 0.08)' : 'rgba(255, 213, 79, 0.08)'} 60%, ${i % 2 === 0 ? 'rgba(255, 166, 0, 0.03)' : 'rgba(255, 213, 79, 0.03)'} 80%, transparent 100%)`,
              animationDelay: `${i * 0.8}s`,
              filter: 'blur(1px)',
              transformOrigin: 'bottom center',
              animation: `stage-light-${i} ${12 + (i * 1.5)}s ease-in-out infinite alternate`
            }}
          ></div>
        ))}
      </div>
      
      {/* Efectos de esquinas */}
      <div className="absolute top-0 left-0 w-32 h-32 border-l-2 border-t-2 border-kokelight-primary/30"></div>
      <div className="absolute top-0 right-0 w-32 h-32 border-r-2 border-t-2 border-kokelight-secondary/30"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l-2 border-b-2 border-kokelight-secondary/30"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r-2 border-b-2 border-kokelight-primary/30"></div>
    </section>
  );
};

export default Home;
