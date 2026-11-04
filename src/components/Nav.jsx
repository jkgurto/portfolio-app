import { DiCode } from 'react-icons/di';
import { Link } from "react-router-dom";

export default function Nav() {

  return (
    <nav className="w-full z-50 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50 ">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-yellow-700 to-red-800 border border-slate-700 flex items-center justify-center">
            <DiCode />
          </div>
          {/* <span className="text-xl font-bold">Title</span> */}
        </div>
        <div className="flex items-center gap-8">
          <ul className="r">
              <li>
                  <Link to="/" className="text-sm text-slate-400 hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                  <Link to="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Me</Link>
              </li>
              <li>
                  <Link to="/projects" className="text-sm text-slate-400 hover:text-white transition-colors">Projects</Link>
              </li>
          </ul>
        </div>
      </div>

    </nav>
  )
}
