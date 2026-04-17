import { Head, Link } from '@inertiajs/react';
import { Search, Rss, Mail } from 'lucide-react';
import { home as stitchHome, novels, archives, about } from '../../routes/stitch/index';

/**
 * About Page Component
 *
 * This component displays information about the curator, Violet Remarkebly.
 * It's adapted from custom_files/aboutCurator.tsx and integrated into the full-page layout.
 */
export default function About() {
    return (
        <div className="bg-[#fcf9f2] text-[#1c1c18] font-['Newsreader'] min-h-screen selection:bg-[#3e6374]/10">
            <Head>
                <title>About the Curator | Street Wanderland</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#fcf9f2]/70 backdrop-blur-2xl">
                <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-4">
                    <Link href={stitchHome()} className="text-2xl font-semibold no-underline text-[#1c1c18]">Street Wanderland</Link>

                    <div className="hidden md:flex gap-10">
                        <Link href="#" className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Essays</Link>
                        <Link href={novels()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Novels</Link>
                        <Link href={archives()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#1c1c18]/60 hover:text-[#1c1c18] transition-colors">Archives</Link>
                        <Link href={about()} className="uppercase tracking-widest text-[0.8rem] font-['Work_Sans'] text-[#3e6374] border-b border-[#3e6374] transition-all">About</Link>
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

            <main className="pt-32 pb-20">
                {/* Curator Section */}
                <section className="py-32 bg-[#f6f3ec]/50 border-y border-[#c1c7cb]/10" id="about-curator">
                    <div className="max-w-5xl mx-auto px-8">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            {/* Portrait Column */}
                            <div className="relative">
                                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-[#e5e2db] shadow-xl relative z-10 group">
                                    <img
                                        alt="Portrait of Violet Remarkebly"
                                        className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out"
                                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuAAf-dyN2YSFhArGu2BuZFYyn9amUlo_kpjWPevCt41GN3CXkH_HbKaSssg-CbRF4zCK3zOfrmilg8YUquR0UKIi5c5ecUnM62rRhTQwr3y6jtz4WN_YMdv25EUbSbzh19soj0CqeRCps50GYgWBKtpWS0szqdDaDtNpe-UJXRqgAfa9vaA2ur404ALFcPQ9SaCYOfT08YRiBJCB8njjVblTI5Buk0o3NPNscC4z1kLVX7K4eFUSwi07il1x_giBNnzdzpwjFAoXKCD"
                                    />
                                </div>
                                {/* Decorative Frame Element */}
                                <div className="absolute -top-6 -left-6 w-full h-full border border-[#964824]/20 rounded-lg z-0"></div>
                            </div>

                            {/* Text Column */}
                            <div>
                                <span className="font-['Work_Sans'] text-[#964824] uppercase tracking-[0.3em] text-xs mb-4 block font-semibold">
                                    The Curator
                                </span>
                                <h2 className="text-5xl font-light mb-8 text-[#1c1c18]">
                                    Violet <span className="italic text-[#3e6374]">Remarkebly</span>
                                </h2>

                                <div className="space-y-6 text-lg font-light text-[#41484b] leading-relaxed">
                                    <p>
                                        Violet is a chronicler of the unnoticed, a writer and urban historian who finds poetry in the patinated surfaces of the city. With a background in classical literature and a penchant for long, aimless walks, she launched <span className="italic">Street Wanderland</span> as a digital sanctuary for the modern archivist.
                                    </p>
                                    <p>
                                        When not documenting the echoes of forgotten alleyways, she can be found in dusty libraries, collecting vintage ink pens, or debating the merits of brutalist architecture over a single-origin espresso.
                                    </p>
                                </div>

                                {/* Social Links */}
                                <div className="mt-10 flex flex-wrap items-center gap-8">
                                    <a href="#" className="flex items-center gap-2 font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3e6374] hover:text-[#964824] transition-colors group">
                                        <Mail size={16} />
                                        Contact
                                    </a>
                                    <a href="#" className="flex items-center gap-2 font-['Work_Sans'] text-xs uppercase tracking-widest text-[#3e6374] hover:text-[#964824] transition-colors group">
                                        <Rss size={16} />
                                        Substack
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            {/* Footer */}
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
