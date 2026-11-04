import Nav from './Nav.jsx'

function NotFound() {

  return (
    <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
      {/* Background */}
      <Nav />
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto text-center">

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Page Not Found
            </h1>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a href="https://jacqui3d.com">
                <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-700 to-red-800 rounded-xl font-semibold text-lg hover:opacity-50 transition-colors shadow-lg shadow-black-500/25">
                   Return Home
                </button>
              </a>
            </div>
        </div>
      </section>
    </div>
  )
}

export default NotFound