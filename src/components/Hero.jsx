export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto text-center">

        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
          Jacqueline Gurto
        </h1>

        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          Developer and aspiring designer.
        </p>
        <p className="text-slate-400 max-w-2xl mx-auto mb-6 leading-relaxed">
          With a background in C++ and Python,
          now building web experiences with React and Tailwind.
          Actively growing my design practice.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="https://drive.proton.me/urls/SDT5RWXQRG#BltECiXKbKC8" target="_blank">
            <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-700 to-red-800 rounded-xl font-semibold text-lg hover:opacity-50 transition-colors shadow-lg shadow-black-500/25">
              Download Resume
            </button>
          </a>
          <a href="https://drive.proton.me/urls/VRKYYYEE9G#j63Xl6tRcWvM" target="_blank">
            <button className="w-full sm:w-auto px-8 py-4 bg-zinc-300 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-colors shadow-lg shadow-black-500/25">
              Download Design Explorations
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}
