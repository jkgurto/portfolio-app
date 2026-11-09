import Nav from './Nav.jsx'
import { useState, useCallback } from 'react'

import { FiChevronLeft } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";

function Carousel({ items, onZoom }) {
    const [index, setIndex] = useState(0)
    const next = useCallback(() => setIndex(i => (i + 1) % items.length), [items.length])
    const prev = useCallback(() => setIndex(i => (i - 1 + items.length) % items.length, [items.length]))

    return (

        <div className="relative overflow-hidden rounded-lg border border-slate-200">

            {/*Stage*/}
            <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
            >
            {items.map(item => (
                <figure key={item.title} className="w-full shrink-0">
                <div className="flex-1 flex items-center justify-center">
                     <button type="button"
                        onClick={() => onZoom?.(index)}
                        aria-label={`${item.title} — view larger`}
                        className="cursor-zoom-in">
                    <img src={item.img} alt={item.alt} className="h-100 object-contain" />
                    </button>
                </div>
                <figcaption className="p-4 bg-white">
                    <p className="font-medium text-slate-800">{item.title}</p>
                    <p className="text-sm text-slate-500">{item.note}</p>
                </figcaption>
                </figure>
            ))}
            </div>

        {/* Arrows */}
        <button onClick={prev} aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white">
        <FiChevronLeft />
        </button>
        <button onClick={next} aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/90 p-2 shadow hover:bg-white">
        <FiChevronRight />
        </button>

        {/* Dots + counter */}
        <div className="mt-3 flex items-center justify-center gap-2">
            {items.map((_, i) => (
            <button key={i} onClick={() => setIndex(i)} aria-label={`Go to image ${i + 1}`}
                aria-current={i === index}
                className={`size-2.5 rounded-full transition-colors ${
                i === index ? 'bg-yellow-700' : 'bg-slate-300 hover:bg-slate-400'
                }`} />
            ))}
            <span className="ml-3 text-xs text-slate-400">{index + 1} / {items.length}</span>
        </div>

        </div>


    )
}
        

            

export default Carousel