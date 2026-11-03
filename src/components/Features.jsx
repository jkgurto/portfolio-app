import { features } from '../lib/content.js'
import { icons } from './Icons.jsx'

export default function Features() {
  return (
    <section id="features" className="py-4 px-6 border-t border-slate-800/50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Expertise</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">What I bring to a team.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = icons[feature.icon]
            return (
              <div key={i} className="group p-6 rounded-2xl bg-zinc-300 border border-zinc-800/50 hover:border-zinc-500 hover:bg-zinc-900 transition-all duration-300 justify-center items-center">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-yellow-700 to-red-800 flex items-center justify-center text-zinc-900 mb-4 transition-colors">
                  <Icon />
                </div>
                <h3 className="text-lg font-semibold mb-2 text-zinc-700">{feature.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
