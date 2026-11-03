import { DiCode } from 'react-icons/di';

export default function Nav() {

  return (
    <nav className="w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-zinc-300 border border-slate-700 flex items-center justify-center">
            <DiCode />
          </div>
          {/* <span className="text-xl font-bold">Title</span> */}
        </div>
        {/*<div className="hidden md:flex items-center gap-8">
          <a href="#home" className="text-sm text-slate-400 hover:text-white transition-colors">Home</a>
        </div>*/}
      </div>

    </nav>
  )
}
