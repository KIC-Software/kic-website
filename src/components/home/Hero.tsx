export default function Hero() {
    return (
      <section className="px-6 py-24 max-w-5xl">
        <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
          Websites and software systems designed to help businesses grow.
        </h1>
  
        <p className="mt-6 text-lg text-gray-400 max-w-2xl">
          KIC Software creates modern websites, UI improvements, and business tools
          with a focus on clarity, performance, and long-term value.
        </p>
  
        <div className="mt-8 flex gap-4">
          <button className="bg-white text-black px-6 py-3 rounded-lg">
            Start a Project
          </button>
  
          <button className="border border-white px-6 py-3 rounded-lg">
            View Work
          </button>
        </div>
      </section>
    );
  }