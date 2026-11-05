import { Link } from "react-router-dom";
import { projects } from '../lib/content.js'
import { icons } from './Icons.jsx'
import Nav from './Nav.jsx'

function Projects() {

  return (
    <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
        {/* Background */}
        <Nav />
        <section className="pt-32 pb-20 px-6">
          <div className="max-w-6xl mx-auto text-center">
    
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Projects
            </h1>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, i) => {
                const Icon = icons[project.icon]
                return (
                  <div key={i} className="group p-6 rounded-2xl bg-zinc-300 border border-zinc-800/50 hover:border-zinc-00 hover:bg-zinc-100 transition-all duration-300 justify-center items-center">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-700 to-red-800 flex items-center justify-center text-zinc-900 mb-4 transition-colors">
                      <Icon />
                    </div>
                    <img src={project.img} alt={project.title} className="w-full h-auto rounded-lg mb-4" />
                    <Link to={project.link} className="text-sm text-slate-400 hover:text-white transition-colors">
                      <h3 className="text-lg font-semibold mb-2 text-zinc-700">{project.title}</h3>
                      <p className="text-zinc-400 text-sm text-left leading-relaxed">{project.desc}</p>
                    </Link>
                  </div>
                )
              })}
            </div>
            </div>
        </section>
    </div>
  )
}

export default Projects