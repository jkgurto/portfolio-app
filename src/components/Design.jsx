import Carousel from './Carousel.jsx'
import Nav from './Nav.jsx'
import { useState, useCallback } from 'react'

const items = [
{
    title: 'Data Visualization',
    img: '/design/children-births-deaths-stunted8.jpg',
    note: 'Top 20 Countries: Births, Deaths, and Stunting.',
},
{
    title: 'Spring Flowers Newsletter',
    img: '/design/SpringFlowersNewsletterDesktop.png',
    note: 'Newsletter for desktop.',
},
{
    title: 'Spring Flowers Newsletter',
    img: '/design/SpringFlowersNewsletterMobile.png',
    note: 'Newsletter for mobile.',
},
{
    title: 'Magazine Article',
    img: '/design/EnshittificationMagazineArticle.jpg',
    note: 'Magazine article.',
},
{
    title: 'Old and New Icons',
    img: '/design/OldAndNewIconsCollage_Scan_Crop2_01-09-26.jpg',
    note: 'Collage.',
},
{
    title: 'Painting',
    img: '/design/IMG_7322_painting_crop.png',
    note: 'Acrylic on canvas.',
},
{
    title: 'Sketch',
    img: '/design/VogueGlamour_Sketch_Scan_03-09-26.jpg',
    note: 'Graphite on paper.',
},
]

function Design() {

    const [zoomed, setZoomed] = useState(null)   // index of zoomed item, or null

    return (
      <div className="w-full min-h-screen bg-zinc-100 text-black antialiased overflow-x-hidden">
        {/* Background */}
        <Nav />
        <section className="pt-32 pb-20 pl-12 pr-12 px-6">
            <div className="max-w-6xl mx-auto text-center">
    
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 leading-[1.1]">
            Design Explorations
            </h1>

            <Carousel items={items} onZoom={setZoomed}/>
            
            </div>

        {/* Zoomed image modal */}
        {zoomed !== null && (
            <div
            role="dialog" aria-modal="true" aria-label="Zoomed design exploration"
            onClick={() => setZoomed(null)}
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4 cursor-zoom-out"
            >
            <img
                src={items[zoomed].img}
                alt={items[zoomed].alt}
                className="max-h-full max-w-full object-contain rounded-lg"
            />
            </div>
        )}

        {/* Download button */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
            <a href="https://drive.proton.me/urls/VRKYYYEE9G#j63Xl6tRcWvM" target="_blank">
                <button className="w-full sm:w-auto px-8 py-4 bg-zinc-300 border border-slate-700 rounded-xl font-semibold text-lg hover:bg-slate-700 transition-colors shadow-lg shadow-black-500/25">
                Download Design Explorations
                </button>
            </a>
        </div>
        </section>
      </div>
      )
}

export default Design