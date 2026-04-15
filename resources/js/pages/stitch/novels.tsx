import { Head, Link } from '@inertiajs/react';
import { Search, Menu as MenuIcon, BookOpen } from 'lucide-react';
import { home as stitchHome, novels, archives, about } from '../../routes/stitch/index';

/**
 * Novels Page Component
 * 
 * This component displays a collection of long-form narratives.
 * It's built with React, Tailwind CSS, and Inertia.
 * 
 * Key Features:
 * 1. Consistent navigation with the Home page.
 * 2. Responsive grid for novel cards.
 * 3. Featured selection section with an asymmetric layout.
 * 4. Lucide icons used for search and menu interactions.
 */
export default function Novels() {
    return (
        <div className="bg-[#fcf9f2] text-[#1c1c18] font-['Newsreader'] min-h-screen selection:bg-[#fd9a6f]/30">
            <Head>
                <title>Novels | The Modern Archivist</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Work+Sans:wght@300;400;500;600&display=swap" rel="stylesheet" />
            </Head>

            {/* Navigation Bar */}
            <nav className="fixed top-0 w-full z-50 bg-[#fcf9f2]/70 backdrop-blur-xl">
                <div className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
                    <Link href={stitchHome()} className="text-2xl font-bold italic tracking-tight text-[#1c1c18]">The Modern Archivist</Link>
                    
                    <div className="hidden md:flex items-center space-x-8 font-['Newsreader'] tracking-wide uppercase text-[0.7rem] font-medium">
                        <Link href="#" className="text-[#1c1c18] opacity-70 hover:opacity-100 transition-opacity">Essays</Link>
                        <Link href={novels()} className="text-[#3e6374] border-b border-[#3e6374] pb-1">Novels</Link>
                        <Link href={archives()} className="text-[#1c1c18] opacity-70 hover:opacity-100 transition-opacity">Archives</Link>
                        <Link href={about()} className="text-[#1c1c18] opacity-70 hover:opacity-100 transition-opacity">About</Link>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="text-[#3e6374] scale-95 hover:opacity-80 transition-all">
                            <Search size={20} />
                        </button>
                        <button className="text-[#3e6374] scale-95 md:hidden">
                            <MenuIcon size={20} />
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-20 max-w-7xl mx-auto px-8">
                {/* Hero Section */}
                <header className="mb-20 text-center max-w-3xl mx-auto">
                    <h1 className="text-6xl md:text-7xl font-light tracking-tight mb-6 text-[#1c1c18]">Novels</h1>
                    <p className="text-xl md:text-2xl italic text-[#74593f] leading-relaxed">
                        Long-form narratives crafted for the patient reader. Explore our collection of serialised fiction and finished manuscripts.
                    </p>
                    <div className="mt-8 h-px bg-gradient-to-r from-transparent via-[#c1c7cb]/30 to-transparent"></div>
                </header>

                {/* Novels Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
                    {/* Novel Card 1 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCmc_jyhIOTY4L37QVcFHqihZ-nCDh8bMVx7MfMb7mlM9ECjBasdld9k2afh7LwPWXa3LdT_q_2ha4QnFAU_6i4WS6_F77uS1O0FMxjQitvQZ5SSdz7ZNOyeHhz3HPb2TYfSgq88HNmXs0geK8zOXDSdrPXTjcUAmPOePcrBoXEWiJyqO7JjfczORcFDIMrPpJRIgT9NrgzUWvhb-QuKXeTLLmwJ0-IubQKr615DkmurleHtWIdlHSQdYm2BgujZeOBobrO5krXeqPT"
                        category="Historical Fiction"
                        status="8 Chapters Published"
                        title="The Midnight Archive"
                        description="In a city where memories are traded like currency, one young archivist discovers a forgotten vault containing the true history of the founding families."
                        readingTime="6 hours"
                    />

                    {/* Novel Card 2 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBYlCmz0DCJACbV7dU2H8LmL4VhS3xgUlazpto07xtlmOyNcPh0fpHEw2VG5iqXkwY9bfBm6Iv3k0Vf5s_cvXukm8TWuG9qK7e_XHVZ-2P6xyOORq6Ls3Qz-MLAVih4-wLdom9rnFVLdFfvpoaa6Dxqu_7yWdINljoCribzAizAMrf6g_BTWHSGHN25AwbF-MDjRW6fZy7C5NauuOpdEBwb-nvlqmXPIeZI-YP01UDC5heprysoZLaEdLdX4Ad5Nu11P3BHk4QuBPUN"
                        category="Literary Mystery"
                        status="Completed"
                        title="Echoes of the Vellum"
                        description="A reclusive scholar spends her life deciphering a manuscript that changes its text every time the sun sets, leading her into a labyrinth of her own mind."
                        readingTime="4 hours"
                        linkText="Start Reading"
                    />

                    {/* Novel Card 3 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuDBEs1Lj0B-WrPetCjC9utrcgE8oN0DtKc0_lujYnktyYUfBcuwXTY4OFsxX8GSBq1Q41QRrn_UydoBVY9tuxWs0zy3qd3uirQDkZfdicZYZRnXMu748-EhL7fegxf71YJZu-8I95mJyxUh928waQG5WKI8MMlWbpc1HTmD7om37OThfN-SbVkOWGG5RNKzBcdHTXU5y4bcdUsxPBw7src3F0O153DIfHZbUIa7hTMlH1sJRpB2aGnRQomunKVGR1NBQuR74kJ5Ly3H"
                        category="Urban Fantasy"
                        status="Ongoing Series"
                        title="Street Wanderland"
                        description="The streets of modern Paris hide gateways to an ancient, magical realm. A street photographer accidentally captures a ghost in his lens."
                        readingTime="12 Chapters"
                    />

                    {/* Featured Selection */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-3 mt-12 mb-12">
                        <div className="bg-white p-12 rounded-xl flex flex-col md:flex-row items-center gap-12 border border-[#c1c7cb]/10 shadow-sm">
                            <div className="w-full md:w-1/3 aspect-[3/4] overflow-hidden rounded-lg shadow-xl">
                                <img 
                                    className="w-full h-full object-cover" 
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-Q-mFhl2zg6NTV9dHPnEMB0ymGLHEKXwwFfN3su0fTu3e-TPoxbPsG5sBO6ByIrqLiS8iWGuOadBerZHCxtIBgTD2sR7YTcb-DBKOJXTVu3IT0kAtE5B0arPpvLxXX5KcygXpByPCqDKM4LOsOTAedh_jwpnOJBPYwnIkjbI46lNf7pESj97KT1f0QAEbARs7eXkvufOQyltOQlpf6Vo0wOy5X5bg8_e5Pln4wKm9j6ZJ7txhKE5KFQi40AuJCTBvAldDrwWy60Iv" 
                                    alt="The Botanist's Silence"
                                />
                            </div>
                            <div className="w-full md:w-2/3 space-y-6">
                                <div className="flex items-center gap-4">
                                    <span className="bg-[#3e6374] text-white px-4 py-1.5 font-['Work_Sans'] text-[10px] tracking-widest uppercase rounded-full">Staff Pick</span>
                                    <span className="font-['Work_Sans'] text-xs text-[#74593f]">Winner: Archivist Award 2023</span>
                                </div>
                                <h2 className="text-5xl font-light text-[#1c1c18]">The Botanist's Silence</h2>
                                <p className="text-lg leading-relaxed text-[#41484b] italic">
                                    "A haunting exploration of what we leave unsaid. The prose is like silk, the mystery like a slow-acting poison that keeps you turning pages until the early hours."
                                </p>
                                <div className="flex flex-wrap items-center gap-8 pt-4">
                                    <button className="bg-[#3e6374] text-white px-8 py-3 rounded-lg font-['Work_Sans'] text-sm tracking-wide hover:opacity-90 transition-opacity">
                                        Read the Prologue
                                    </button>
                                    <span className="font-['Work_Sans'] text-xs text-[#71787c] tracking-widest uppercase">18 Chapters • Completed</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Novel Card 4 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuB1jkmJQLQlYnY-w_R7XynMBJtACOH16h-XIBRbdms06KsSA6dP23skWq7eMO5HHgsZ4iO-twCCW63uVLbwuW6oVhSBNVQTAqYY6zPhhz0o5pO8g3ePzr2xEOh-f3tN77hoWiHjdkf1RWCYIPKp0PBGvDLXVl7YjgKKnQlkjokEopPq5WL9gHAUO8BJMXmPfb2HiqfekubZlywfm5VgZP315e8DoTCFChqQ1n8tC1sDlH0uAhG8Ch24KX9lkDxJXHfw_AhKfmx6CY2i"
                        category="Dystopian"
                        status="Volume 1"
                        title="Last Seats at the Opera"
                        description="In a world where music has been outlawed, a group of rebel musicians performs clandestine symphonies in the abandoned subway tunnels."
                        readingTime="5 hours"
                    />

                    {/* Novel Card 5 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuBRV3BOegHEuXZ9HC48ImGBIgk0myW438LL7EzXRY7KoVUCOe-PKza7V5PxlLSIhzuJ8B0Cw1M7avTWSlkQEPxox2CPM28oCoMrH_PrxPy1_CI2irCAvvdsKThO0e5HlqrhqnBYsPSZDqxR9iLWUTSsAFFC_RR2-2HyhtWjpc9l84zhe9pkQ_A2dVJg64D3y_-HOAk1u65vBQePLyhbGCk9Sj81WNTuw8spy2o_EE4tmCwka0eijqVOLW3MLLkf0wWN06N9K2hkau8p"
                        category="Romance"
                        status="In Progress"
                        title="The Inkwell Letters"
                        description="An epistolary novel told through letters found in a hidden compartment of a desk bought at an estate auction in Rural England."
                        readingTime="4 Chapters"
                        linkText="Start Reading"
                    />

                    {/* Novel Card 6 */}
                    <NovelCard 
                        image="https://lh3.googleusercontent.com/aida-public/AB6AXuCh9NPCxPzZrJJWGRULcaSIfBltiY9qPyCBHC2avdtOj3UQz4Jaa0JHOJUSv7esQlxFd1wz9HkzuSPVKLowivh6MrqNQ_r4_6pL7qZWfmkepZyePeC6kKEvfr-drY11BO9_jOacD1mmQ-zR83mhH9hXcpMsY5MZ1STk-eT-bnC1uQ0DAZc21A9Ut2s0aVRI10thmqHhunfyhW8gl7aCZbBZ2tZSGJTc-9B06Ogz_p1Gex_mH2aEHZSLmJbJQnBIel70LS5NAwHQWw3-"
                        category="Modern Fable"
                        status="Completed"
                        title="The Weaver of Light"
                        description="A child discovers they can pull colors from the sunrise and weave them into blankets that protect their village from the eternal winter."
                        readingTime="3 hours"
                    />
                </div>

                {/* Pagination */}
                <div className="mt-24 flex flex-col items-center">
                    <button className="font-['Work_Sans'] text-xs tracking-[0.2em] uppercase border-b-2 border-[#3e6374] pb-2 text-[#3e6374] hover:text-[#964824] hover:border-[#964824] transition-colors duration-300">
                        Load More Archives
                    </button>
                </div>
            </main>

            {/* Footer */}
            <footer className="w-full py-12 px-8 mt-20 bg-[#f6f3ec] border-t border-[#1c1c18]/5">
                <div className="flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto pt-12">
                    <div className="mb-8 md:mb-0">
                        <span className="italic text-[#964824] text-xl">The Modern Archivist</span>
                        <p className="font-['Work_Sans'] text-xs tracking-widest uppercase mt-4 text-[#74593f]">© 2024 VioletRemarkably. Crafted for The Modern Archivist.</p>
                    </div>
                    <div className="flex gap-8 font-['Work_Sans'] text-xs tracking-widest uppercase text-[#74593f]">
                        <Link href="#" className="hover:text-[#3e6374] transition-colors">Privacy</Link>
                        <Link href="#" className="hover:text-[#3e6374] transition-colors underline decoration-[#964824] underline-offset-4">Terms</Link>
                        <Link href="#" className="hover:text-[#3e6374] transition-colors">Contact</Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}

/**
 * NovelCard Component for Grid Items
 */
function NovelCard({ image, category, status, title, description, readingTime, linkText = "Explore" }: { 
    image: string, 
    category: string, 
    status: string, 
    title: string, 
    description: string, 
    readingTime: string,
    linkText?: string 
}) {
    return (
        <article className="group">
            <div className="aspect-[3/4] overflow-hidden mb-6 bg-[#f6f3ec] rounded-lg transition-transform duration-500 group-hover:scale-[1.02] shadow-sm">
                <img className="w-full h-full object-cover" src={image} alt={title} />
            </div>
            <div className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="font-['Work_Sans'] text-xs tracking-widest uppercase text-[#74593f]">{category}</span>
                    <span className="font-['Work_Sans'] text-xs text-[#964824] italic">{status}</span>
                </div>
                <h2 className="text-3xl font-bold text-[#1c1c18] leading-tight group-hover:text-[#3e6374] transition-colors">{title}</h2>
                <p className="text-[#41484b] font-light leading-relaxed line-clamp-3">
                    {description}
                </p>
                <div className="pt-4 flex items-center justify-between border-t border-[#c1c7cb]/10">
                    <span className="font-['Work_Sans'] text-[10px] tracking-widest uppercase text-[#71787c]">Est. Reading Time: {readingTime}</span>
                    <Link href="#" className="font-['Work_Sans'] text-sm font-semibold text-[#964824] hover:underline underline-offset-4 decoration-1">
                        {linkText}
                    </Link>
                </div>
            </div>
        </article>
    );
}
