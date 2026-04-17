import { Head, Link } from '@inertiajs/react';
import { Search, ArrowRight, Rss, Mail } from 'lucide-react';
import { home as stitchHome, novels, archives, about } from '../../routes/stitch/index';

/**
 * Street Wanderland Home Component
 *
 * This component is a React implementation of the original home.html design.
 * It uses Tailwind CSS for styling and Inertia's <Link> for client-side navigation.
 *
 * Key changes:
 * 1. Converted HTML attributes to JSX (e.g., class -> className, crossOrigin).
 * 2. Replaced Material Symbols with Lucide React icons for better React integration.
 * 3. Mapped custom CSS variables from home.css to Tailwind arbitrary values for consistency.
 * 4. Used <Head> to manage metadata and external font loading.
 * 5. Integrated with Inertia's routing system using <Link> with Wayfinder route functions.
 */
export default function Home() {
    return (
        <div className="bg-[#fcf9f2] text-[#1c1c18] font-['Newsreader'] min-h-screen selection:bg-[#3e6374]/10">
            {/* Metadata and Font Loading */}
            <Head>
                <title>Street Wanderland | The Modern Archivist</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation Bar - Fixed with backdrop blur for an editorial feel */}
            <nav className="fixed top-0 w-full z-50 bg-[#fcf9f2]/70 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    <Link href={stitchHome()} className="text-2xl font-semibold no-underline text-[#1c1c18]">Street Wanderland</Link>

                    {/* Navigation Links - Hidden on mobile, spaced out for readability */}
                    <div className="hidden md:flex gap-10">
                        <Link href="#" className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#3e6374] border-b border-[#3e6374] transition-all">Essays</Link>
                        <Link href={novels()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Novels</Link>
                        <Link href={archives()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Archives</Link>
                        <Link href={about()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">About</Link>
                        <Link href="/" className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Home</Link>
                    </div>

                    <div className="flex items-center gap-4">
                        <button className="text-[#1c1c18] cursor-pointer hover:text-[#3e6374] transition-colors">
                            <Search size={22} />
                        </button>
                        <button className="bg-[#3e6374] text-white px-8 py-3 uppercase tracking-widest text-[0.75rem] font-['Work_Sans'] rounded-sm hover:bg-[#964824] transition-all duration-300">
                            Subscribe
                        </button>
                    </div>
                </div>
            </nav>

            {/* Main Content Area */}
            <main className="max-w-7xl mx-auto pt-32 pb-20 px-8">
                {/* Hero Section - Split grid with text and featured image */}
                <section className="min-h-[70vh] flex items-center mb-40">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-8">
                            <span className="uppercase tracking-[0.3em] text-[0.75rem] font-['Work_Sans'] text-[#964824] block font-medium">The Digital Sanctuary</span>
                            <h1 className="text-7xl md:text-8xl font-light leading-[1.1] tracking-tight text-[#1c1c18]">
                                Street <br/>
                                <span className="italic font-normal">Wanderland</span>
                            </h1>
                            <p className="text-xl md:text-2xl max-w-md text-[#41484b] leading-relaxed font-light">
                                Exploring the intersections of city life, forgotten histories, and the quiet magic of the everyday.
                            </p>
                            <div className="flex flex-wrap items-center gap-8 pt-4">
                                <Link href="#featured" className="bg-[#3e6374] text-white px-10 py-4 uppercase tracking-widest text-[0.75rem] font-['Work_Sans'] rounded-sm hover:bg-[#964824] transition-all duration-300 no-underline shadow-lg shadow-[#3e6374]/10">
                                    Begin Reading
                                </Link>
                                <Link href={archives()} className="uppercase tracking-widest text-[0.75rem] font-['Work_Sans'] text-[#1c1c18] no-underline border-b border-[#1c1c18]/20 hover:border-[#1c1c18] transition-all py-1">
                                    The Archive
                                </Link>
                            </div>
                        </div>

                        {/* Hero Image and Floating Quote */}
                        <div className="relative group">
                            <div className="shadow-[0_40px_80px_-15px_rgba(28,28,24,0.12)] rounded-sm overflow-hidden transform transition-transform duration-700 group-hover:scale-[1.01]">
                                <img
                                    alt="City street at golden hour"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDE56AOghDxXt8LzAQrkKVDz0jMvY6Rk5tggrCtspiPUeDRtpAXXN2zhKp1_w9y56tG-O76Cpn3sBbokIFcSgRU1gf2NG91Jh502HejJFHJlt1PFEsRJUwdYmE95UYqLMTar19E_bcDfOENCvwk2-NskmQeb0J5f0n76_NhAaWHYF85HPTytT-s3KwoU75AjCUgyxet1BfQ4S041i3FjJjQ626C9LeBKUynuzhQL_k2WHHp9w85pOUrT1kuUpXQq-XLtONx555Ot4X_"
                                    className="w-full h-[600px] object-cover"
                                />
                            </div>
                            {/* Floating Quote Box - Overlays the image for editorial depth */}
                            <div className="absolute -bottom-10 -left-10 bg-[#fcf9f2] p-10 shadow-[0_40px_60px_-15px_rgba(28,28,24,0.15)] max-w-xs space-y-6 border border-[#c1c7cb]/10">
                                <p className="italic text-2xl leading-relaxed text-[#1c1c18]">"To wander is to find the story hidden beneath the pavement."</p>
                                <div className="flex items-center gap-4">
                                    <span className="w-10 h-px bg-[#964824]"></span>
                                    <span className="uppercase tracking-[0.15em] text-[0.6rem] font-['Work_Sans'] text-[#41484b] font-semibold">Current Theme: Urban Solitude</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Featured Section - Bento-style layout for latest entries */}
                <section id="featured" className="space-y-16">
                    <div className="flex justify-between items-end border-b border-[#1c1c18]/10 pb-6">
                        <div className="space-y-2">
                            <h2 className="text-5xl font-light text-[#1c1c18]">Latest Archives</h2>
                            <div className="w-16 h-[2px] bg-[#964824]"></div>
                        </div>
                        <Link href={archives()} className="flex items-center gap-3 uppercase tracking-widest text-[0.75rem] font-['Work_Sans'] text-[#1c1c18] hover:text-[#3e6374] transition-all font-medium group">
                            View All Entries <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Primary Featured Card - Large bento item */}
                        <div className="lg:col-span-2 shadow-[0_30px_60px_-15px_rgba(28,28,24,0.08)] bg-white/50 flex flex-col md:flex-row rounded-sm overflow-hidden group border border-[#c1c7cb]/10">
                            <div className="md:w-1/2 overflow-hidden relative">
                                <img
                                    alt="Typewriter"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCih8G0JFrK2r8vYF0BzxMJUyM1zSylv3LSJKWZikzppmscTHZjaML3Gjg6PacZbeg7X6nIRJOuBq0hVfvsI95DcJJ0c8qPmGvmAL_m22r1HQ8RyTTNnH1easkyaZhLNXlEsBtT4SmLl4c4ZIHWZmAzga664DOeCLIbS2tklhuMrMd8po78b3SPym2pHDo_LX1gk3PMi4WxZbjxPcY-yXESd2GraSFgFik_cafCa9NWAT1LWuXAtRyDyzj8BycuoSeAayWClZdBZIlO"
                                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-[#3e6374]/5 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <div className="md:w-1/2 p-12 space-y-8 flex flex-col justify-center">
                                <div className="flex items-center gap-5">
                                    <span className="bg-[#fd9a6f]/20 text-[#964824] px-4 py-1.5 text-[0.6rem] uppercase tracking-widest font-['Work_Sans'] font-bold rounded-full border border-[#964824]/10">Featured Essay</span>
                                    <span className="text-[0.6rem] uppercase tracking-widest font-['Work_Sans'] text-[#41484b]/50 font-semibold italic">12 Min Read</span>
                                </div>
                                <h3 className="text-4xl font-light leading-tight text-[#1c1c18]">The Anatomy of a Quiet Afternoon</h3>
                                <p className="text-[#41484b] leading-relaxed text-lg font-light">
                                    In the heart of the bustling metropolis, there are pockets of stillness that defy the clock. Discover the hidden rhythms of the city.
                                </p>
                                <Link href="#" className="group inline-flex items-center gap-3 text-[#3e6374] font-['Work_Sans'] text-[0.75rem] uppercase tracking-widest no-underline font-bold">
                                    Read More
                                    <span className="relative w-10 h-px bg-[#3e6374]/30 overflow-hidden">
                                        <span className="absolute inset-0 bg-[#3e6374] -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></span>
                                    </span>
                                </Link>
                            </div>
                        </div>

                        {/* Side Feed - Secondary items */}
                        <div className="space-y-12">
                            <article className="p-10 bg-white/30 backdrop-blur-sm shadow-[0_20px_40px_-10px_rgba(28,28,24,0.05)] space-y-6 border border-[#c1c7cb]/10 rounded-sm hover:shadow-xl transition-all duration-500">
                                <span className="uppercase tracking-[0.2em] text-[0.65rem] font-['Work_Sans'] text-[#964824] font-bold">Short Story</span>
                                <h4 className="text-3xl font-light text-[#1c1c18]">The Weaver's Corridor</h4>
                                <p className="text-[#41484b] text-base leading-relaxed font-light">Elena didn't notice the door until the third time she walked past the alley. It was made of weathered oak...</p>
                                <Link href="#" className="inline-block text-[#3e6374] font-['Work_Sans'] text-[0.7rem] uppercase tracking-widest no-underline border-b border-[#3e6374]/20 hover:border-[#3e6374] transition-all py-1 font-bold italic">Continue Reading</Link>
                            </article>

                            <article className="p-10 bg-white/30 backdrop-blur-sm shadow-[0_20px_40px_-10px_rgba(28,28,24,0.05)] space-y-6 border border-[#c1c7cb]/10 rounded-sm hover:shadow-xl transition-all duration-500">
                                <span className="uppercase tracking-[0.2em] text-[0.65rem] font-['Work_Sans'] text-[#964824] font-bold">Critique</span>
                                <h4 className="text-3xl font-light text-[#1c1c18]">Bricks and Memory</h4>
                                <p className="text-[#41484b] text-base leading-relaxed font-light">A meditation on why we feel connected to architecture that pre-dates our parents and the stories buildings tell.</p>
                                <Link href="#" className="inline-block text-[#3e6374] font-['Work_Sans'] text-[0.7rem] uppercase tracking-widest no-underline border-b border-[#3e6374]/20 hover:border-[#3e6374] transition-all py-1 font-bold italic">Continue Reading</Link>
                            </article>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer - Minimalist and elegant */}
            <footer className="bg-[#f6f3ec] border-t border-[#c1c7cb]/30 px-8 py-20 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
                    <div className="space-y-4">
                        <span className="text-3xl font-semibold text-[#1c1c18] tracking-tight">Street Wanderland</span>
                        <p className="text-[#41484b]/50 text-sm font-['Work_Sans'] tracking-wide">© 2024 VioletRemarkably. All rights reserved.</p>
                    </div>

                    <div className="flex flex-wrap justify-center gap-10 font-['Work_Sans'] text-[0.75rem] uppercase tracking-[0.15em] text-[#1c1c18]/60 font-medium">
                        <Link href="#" className="hover:text-[#3e6374] transition-colors">Privacy Policy</Link>
                        <Link href="#" className="hover:text-[#3e6374] transition-colors">Terms of Service</Link>
                        <Link href="#" className="hover:text-[#3e6374] transition-colors">Contact</Link>
                    </div>

                    <div className="flex items-center gap-8 text-[#1c1c18]/40">
                        <Rss size={22} className="cursor-pointer hover:text-[#3e6374] hover:scale-110 transition-all" />
                        <Mail size={22} className="cursor-pointer hover:text-[#3e6374] hover:scale-110 transition-all" />
                    </div>
                </div>
            </footer>
        </div>
    );
}
