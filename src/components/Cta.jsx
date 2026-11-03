import { socials } from '../lib/content.js'
import { socialIcons } from "./Icons";

export default function Cta() {
  return (
    <section id="cta" className='py-16 px-6 border-y border-slate-800/50'>
          <p className="text-xl text-slate-400 max-w-xl mx-auto text-center">
            Connect with me on
          </p>
          <div id="socialList" className="flex flex-wrap justify-center gap-6">
            {socials.map((social, i) => {
            const Icon = socialIcons[social.icon];
            return (
                <div key={i} className="group p-6">
                    <a href={social.link} target="_blank">
                        <button className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-yellow-700 to-red-800 rounded-xl font-semibold text-lg hover:opacity-90 transition-opacity shadow-lg shadow-red-500/25">
                            <div className='flex justify-center items-center gap-2'>
                                <Icon />
                                <p>{social.title}</p>
                            </div>
                            
                        </button>
                    </a>
                </div>

            );
            })}
        </div>
    </section>
  );
}
