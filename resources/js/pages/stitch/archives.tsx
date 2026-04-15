import { Head, Link } from '@inertiajs/react';
import { Search, BookOpen, Share2, Mail } from 'lucide-react';
import { home as stitchHome, novels, archives, about } from '../../routes/stitch/index';

/**
 * Archives Page Component
 * 
 * This component displays a curated collection of past reflections and historical notes.
 * It's built with React, Tailwind CSS, and Inertia.
 * 
 * Key Features:
 * 1. Consistent navigation with the Home and Novels pages.
 * 2. Visual grid with varying card heights for an editorial feel.
 * 3. Lucide icons for social and search interactions.
 */
export default function Archives() {
    return (
        <div className="bg-[#fcf9f2] text-[#1c1c18] font-['Newsreader'] min-h-screen selection:bg-[#fd9a6f]/30">
            <Head>
                <title>The Archives | The Modern Archivist</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#fcf9f2]/70 backdrop-blur-xl">
                <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto">
                    <div className="flex items-center gap-8">
                        <Link href={stitchHome()} className="text-2xl font-bold italic tracking-tight text-[#1c1c18]">The Modern Archivist</Link>
                        <div className="hidden md:flex items-center gap-8 font-['Work_Sans'] text-[0.7rem] tracking-widest uppercase font-medium">
                            <Link href="#" className="text-[#1c1c18]/60 hover:text-[#3e6374] transition-colors duration-300">Essays</Link>
                            <Link href={novels()} className="text-[#1c1c18]/60 hover:text-[#3e6374] transition-colors duration-300">Novels</Link>
                            <Link href={archives()} className="text-[#3e6374] border-b border-[#3e6374] pb-1">Archives</Link>
                            <Link href={about()} className="text-[#1c1c18]/60 hover:text-[#3e6374] transition-colors duration-300">About</Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="hidden md:flex items-center bg-[#f6f3ec] px-4 py-2 rounded-lg group focus-within:bg-[#e5e2db] transition-colors border border-transparent focus-within:border-[#c1c7cb]/20">
                            <Search size={16} className="text-[#71787c] mr-2" />
                            <input className="bg-transparent border-none focus:ring-0 text-sm font-['Work_Sans'] placeholder:text-[#c1c7cb] w-48" placeholder="Search the collection..." type="text"/>
                        </div>
                        <button className="text-[#3e6374] scale-95 active:opacity-80 transition-all">
                            <BookOpen size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Header Section */}
            <header className="pt-40 pb-20 px-8 max-w-7xl mx-auto">
                <div className="max-w-3xl">
                    <span className="font-['Work_Sans'] text-xs tracking-[0.2em] uppercase text-[#74593f] mb-4 block font-semibold">A Digital Sanctuary</span>
                    <h1 className="text-6xl md:text-8xl font-light tracking-tight text-[#1c1c18] mb-8 leading-[0.95]">The Archives</h1>
                    <p className="text-xl md:text-2xl italic text-[#41484b] leading-relaxed font-light">
                        An intentional collection of past reflections, historical notes, and the lingering whispers of memory. Explore the layers of time preserved in ink and silver.
                    </p>
                </div>
            </header>

            {/* Archive Grid */}
            <main className="px-8 pb-32 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDRJ2GTnMBTu2D8fqXIQHWqjF9RjVnDhSYkgE6Ny6caTdKeHItbN_iT5ogPjcop9mg9mwn8HrmF_amHmaC5XbxDvQWkBq7X4extYjbyj2Cvc_QuX7smCNEYU9lCseEm2ustvpG-2K2TqtH1w89xOcx0tkwNTpqFsDiRh-ZG3jVm3EZQejhyuhLflCkzCavhaVI76xkoK-t9rsm0Tl1gpsq2VwLdAYJZgTLy0Doxvzf948xGefoxVahyN_JiACSW10Oe-6mHxY23LCeB"
                        category="Historical"
                        title="The Silent Sentinels of Oxford"
                        description="A photographic journey through the forgotten alcoves of Bodleian’s oldest wings, where the air smells of leather and static time."
                    />

                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCjsF5N3_cJeQE95yquOwQKrADkr4pAQwzkJb8DgYIPL_warjUp84ug3CaLf1i7zcmzQ8DQjEabOwvsIoa-EPkCX9rssyImFn56J5uriRLqzOL2OyAQpEG-4wTDb-SFPsgzlWv25r9aVcBA8qBkmdEhVRXlCMWzXrzYE36p_XWwaLTHia_pCn8fZyFuxNp9Gt0z-Z1gNzUm9dkj5VAwWH2NcKg1dru5V882HGJSzwGUjImsxpo9up_Z-EG8RJAj7GTDD4t6IP5qXreD"
                        category="Field Notes"
                        title="Cartography of the Unseen"
                        description="Mapping the coastlines of 18th-century imagination, where myth and navigation intertwined on hand-pressed paper."
                        className="lg:mt-16"
                    />

                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAk1z6EG7zlge1ca62lcspCRKYJJy4OARXcQo7xPYRVCIdtrKpKGVh4tk8LXEQtJZanc7IU0Wi0i4tufEjLAtQ-46-WWOqmNnMJPPKf0lNYEz4JbdITTvK0hW5WMrkvMl7LFs82Za4nVmtlh27yHTqLYzt0Wm9M70HLH29EEovoNvViFT9s73OzTP9fgRODGAYlGYrbC7V86rFIoTRuMrcoPwY1tPaQCyRCe3ga7l5RPcEtf7sfBH6rDxqRZ9Ko0xIqIpzi2EO68eb9"
                        category="Essays"
                        title="The Epistolary Ghost"
                        description="Deciphering a series of unsent correspondences found in an abandoned Parisian attic during the winter of 1994."
                    />

                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBa-XMDGKBeZYhAn1naBwYX8SeLsivjiAEUVHJ6mT4v_Yo6LeHJpoKwf5e4HVTUH38FtyNSx0mHc3Z0PKtE_QfzU-XY_eSXSRv8N1IKdHq56W6qMsEX8t6SEsqlg4whghaYSl9RmrUCa7A_uUZ7mGfHYtIN3Z52feiXqxtf85G8lfMjEib4ARfM07N7n5FXXZy63-5zDpzfOV9mq6iJ1fQNr493kBvyFlM5zdwsEAfmYX-PHainMSwihtPaLC4nXCQ1mC4J86mWyEN4"
                        category="Field Notes"
                        title="Nocturnal Topographies"
                        description="An exploration of the city's quietest hours, where architecture becomes a sculptural monument to human absence."
                        className="lg:-mt-16"
                    />

                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuAvNIUGzLHsI4F5omj9YE2jfHW5aW8JLbsQvK0ATaXfcAqhYq0k2FiorEhetiWaOsDN6PSznYuV9s9jOaoXDyYZgxswF626D5FOojT1J4q-cnJ0Uncsr0Zsuvqfy1fHVtCJlf1erKZZNrY5Pn1Gz16r5hZaxywDGNru5qu5CK8MSsFA0k4ulMYNIt_UrlnEo9ttC1u3voPyN5xwZCpVYP4ITvCF4eVIQVKnPKE6My75mTmOtKcVAwPAqIWTOV63Cjd4lKNhgZKghwAf"
                        category="Historical"
                        title="The Herbaria of 1902"
                        description="Recovering the lost botanical journals of an amateur naturalist who documented the flora of the Scottish Highlands."
                    />

                    <ArchiveCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBtpllR_K6r9Z-3214pHhJ3UH1sok2d3HfYq7b6A6AGWcWCKFH0Y0D3xXKrHmJKUpXBMY0XkX1WNRaOjQsiOyT52o2urvfq3KV-V_gsGdkffbP91gschZiuEg5eBndo3VmNzQqTvlDV0bY2L8Dp941F9X1Vo93B1o4ZJ7wQ6iNMGKd7Yk_Sjd58QTBoyT86qjm8SNcMd3VrC-S4ewYTGuAuoSNtFNUIsd2hN5Rj3BVcNvYjwPPKuegtc97kZwZCv5hD_INchlzCT3dU"
                        category="Essays"
                        title="Geometry of Memory"
                        description="How the shapes of our dwellings dictate the structures of our nostalgia. An analysis of communal living spaces."
                        className="lg:mt-16"
                    />
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 mt-24 bg-[#f6f3ec] border-t border-[#c1c7cb]/15">
                <div className="flex flex-col md:flex-row justify-between items-center px-12 max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row items-center gap-8 mb-8 md:mb-0">
                        <span className="font-['Work_Sans'] text-xs tracking-widest uppercase text-[#74593f]">© 2024 VioletRemarkably</span>
                        <div className="flex gap-6 font-['Work_Sans'] text-xs tracking-widest uppercase text-[#74593f]/60 font-medium">
                            <Link className="hover:opacity-100 transition-opacity" href="#">Privacy</Link>
                            <Link className="underline decoration-[#964824] underline-offset-4" href="#">Terms</Link>
                            <Link className="hover:opacity-100 transition-opacity" href="#">Colophon</Link>
                        </div>
                    </div>
                    <div className="flex gap-4">
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c1c7cb] text-[#3e6374] hover:bg-[#3e6374] hover:text-white transition-all">
                            <Share2 size={16} />
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center rounded-full border border-[#c1c7cb] text-[#3e6374] hover:bg-[#3e6374] hover:text-white transition-all">
                            <Mail size={16} />
                        </button>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/**
 * ArchiveCard Component for Grid Items
 */
function ArchiveCard({ image, category, title, description, className = "" }: { 
    image: string, 
    category: string, 
    title: string, 
    description: string,
    className?: string 
}) {
    return (
        <article className={`flex flex-col group ${className}`}>
            <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-8 bg-[#f6f3ec] transition-all duration-700 group-hover:scale-[1.01] shadow-sm">
                <img className="w-full h-full object-cover" src={image} alt={title} />
                <div className="absolute inset-0 bg-[#3e6374]/10 group-hover:bg-transparent transition-colors duration-500"></div>
            </div>
            <div className="flex flex-col h-full">
                <span className="font-['Work_Sans'] text-[10px] tracking-widest uppercase text-[#964824] mb-3 font-bold">{category}</span>
                <h3 className="text-3xl font-medium text-[#1c1c18] mb-4 group-hover:text-[#3e6374] transition-colors leading-tight">{title}</h3>
                <p className="font-light text-[#41484b] leading-relaxed mb-8 flex-grow">
                    {description}
                </p>
                <Link className="font-['Work_Sans'] text-xs tracking-widest uppercase text-[#3e6374] border-b border-[#3e6374]/20 pb-1 self-start hover:border-[#964824] hover:text-[#964824] transition-all font-bold" href="#">
                    View Entry
                </Link>
            </div>
        </article>
    );
}
