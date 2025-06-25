// src/pages/Home.tsx
const Home = () => {
  return (
    <section className="relative bg-black text-white min-h-screen flex flex-col justify-center items-center px-6 text-center">
      {/* Fondo con luces (puedes reemplazarlo por una imagen real desde /assets) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/assets/images/lights-koke.jpg')" }}
      ></div>

      {/* Contenido principal */}
      <div className="relative z-10 max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 tracking-tight bg-gradient-to-br from-green-400 to-lime-300 text-transparent bg-clip-text drop-shadow-[0_0_10px_rgba(0,255,0,0.7)]">
            JORGE “KOKE” LIGHTS
        </h1>
        <p className="text-lg md:text-xl text-gray-200 mb-8">
          Transformamos tu evento con tecnología audiovisual de alto nivel.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a
            href="https://wa.me/5210000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-black font-semibold px-6 py-3 rounded-full transition"
          >
            📞 WhatsApp
          </a>
          <a
            href="#contacto"
            className="border border-white hover:bg-white hover:text-black font-semibold px-6 py-3 rounded-full transition"
          >
            Formulario
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;

