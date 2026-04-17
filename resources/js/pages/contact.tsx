import { Head, Link } from '@inertiajs/react';

export default function Contact() {
    return (
        <div className="dark min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
            <Head title="Contact | Engr. Christine Sheen Ligan Baron-Vergara" />

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl">
                <div className="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
                    <Link className="text-2xl font-black tracking-tighter text-primary font-headline uppercase" href="/">engr. cs</Link>
                    <div className="hidden md:flex items-center gap-10">
                        <Link className="font-headline uppercase tracking-tight text-sm text-white/70 hover:text-white transition-colors" href="/">HOME</Link>
                        <a className="font-headline uppercase tracking-tight text-sm text-white/70 hover:text-white transition-colors" href="/stitch">WRITEUPS</a>
                        <Link className="font-headline uppercase tracking-tight text-sm text-primary border-b-2 border-primary pb-1" href="/contact">CONTACT</Link>
                    </div>
                </div>
            </nav>

            <main className="pt-32 pb-24 px-8 max-w-screen-2xl mx-auto">
                {/* Editorial Header Section */}
                <header className="mb-20 md:mb-32 flex flex-col md:flex-row items-end justify-between gap-8">
                    <div className="max-w-3xl">
                        <span className="font-label text-primary uppercase tracking-[0.3em] text-xs mb-6 block">Inquiries & Collaborations</span>
                        <h1 className="font-headline text-6xl md:text-8xl font-bold tracking-tighter leading-[0.9] text-white">
                            GET IN <br /> <span className="text-primary italic">TOUCH.</span>
                        </h1>
                    </div>
                    <div className="hidden md:flex w-32 h-32 rounded-full border border-outline-variant/30 items-center justify-center p-4">
                        <span className="material-symbols-outlined text-primary text-5xl animate-pulse">arrow_downward</span>
                    </div>
                </header>

                {/* Asymmetric Layout Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                    {/* Left Side: Information & Branding */}
                    <div className="lg:col-span-5 flex flex-col gap-12">
                        <div className="p-8 bg-surface-container-low rounded-lg">
                            <p className="font-headline text-2xl mb-8 leading-snug">
                                Engr. CS Vergara is currently accepting new project commissions and engineering consultations.
                            </p>
                            <div className="space-y-8">
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">Location</h3>
                                    <p className="text-lg text-on-surface font-light">Davao City, Philippines</p>
                                </div>
                                <div>
                                    <h3 className="font-label text-xs uppercase tracking-widest text-primary mb-2">Connect</h3>
                                    <div className="flex flex-col gap-3">
                                        <a className="text-lg hover:text-primary transition-colors flex items-center gap-2 group" href="#">
                                            LinkedIn <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                                        </a>
                                        <a className="text-lg hover:text-primary transition-colors flex items-center gap-2 group" href="#">
                                            Twitter <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">north_east</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Abstract Visual Element */}
                        <div className="relative h-64 w-full rounded-lg overflow-hidden group">
                            <img
                                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                alt="Sonic Noir aesthetic visual"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYNDwbEZeY97-va5ueolGORXFVBNBz0ITXm6eXuh4lARgfx1k3m2b-RyYJ5yT52R_aYr1iQVb3d6SF4WeNB7pTBNXUawAjPfk9-_G46ks6katl0OJ4zUVAa0w4ISjUUX7x553dh_2pXvDcR3mXkcc8CsczjBDytNQZJxDT6v6rfBL3kX_uUGES80MYfMkuN8wVA4XAFNNS3_0kWbCtt8zFucPDuR1JI3KrIvE8wvnmFV-5pnnQgXO3wGUQOinrMM04samha48GrLo"
                            />
                            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                    </div>

                    {/* Right Side: Sleek Contact Form */}
                    <div className="lg:col-span-7">
                        <form action="#" className="space-y-10 bg-surface-container rounded-lg p-8 md:p-12">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div className="relative group">
                                    <input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary text-white placeholder-transparent transition-all" id="name" name="name" placeholder=" " required type="text" />
                                    <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-xs font-label pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-primary" htmlFor="name">
                                        Full Name
                                    </label>
                                </div>
                                <div className="relative group">
                                    <input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary text-white placeholder-transparent transition-all" id="email" name="email" placeholder=" " required type="email" />
                                    <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-xs font-label pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-primary" htmlFor="email">
                                        Email Address
                                    </label>
                                </div>
                            </div>
                            <div className="relative group">
                                <input className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary text-white placeholder-transparent transition-all" id="subject" name="subject" placeholder=" " required type="text" />
                                <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-xs font-label pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-primary" htmlFor="subject">
                                    Subject
                                </label>
                            </div>
                            <div className="relative group">
                                <textarea className="peer w-full bg-transparent border-0 border-b border-outline-variant py-4 px-0 focus:ring-0 focus:border-primary text-white placeholder-transparent transition-all resize-none" id="message" name="message" placeholder=" " required rows={4}></textarea>
                                <label className="absolute left-0 top-4 text-white/40 uppercase tracking-widest text-xs font-label pointer-events-none transition-all peer-focus:-top-4 peer-focus:text-primary peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-primary" htmlFor="message">
                                    Project Details
                                </label>
                            </div>
                            <div className="pt-6">
                                <button className="sonic-gradient group relative inline-flex items-center gap-4 px-10 py-5 rounded-md font-headline font-bold text-on-primary-fixed uppercase tracking-tighter hover:scale-[1.02] transition-transform overflow-hidden" type="submit">
                                    <span className="">Send Message</span>
                                    <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform">arrow_forward</span>
                                </button>
                            </div>
                        </form>
                        <div className="mt-12 flex items-center gap-4 p-6 bg-surface-container-highest/20 rounded-lg border border-white/5">
                            <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                                <img
                                    className="w-full h-full object-cover"
                                    alt="Professional woman portrait"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAo_8qqnO7O5WyqQ1PVJJhW-26NQD4V9Q8VCXTAy1sMxRlknhNuTGAAvyRZRpB1ycdeM9RQds8K_kSaegg56BQKD1d1yFshlub3uSuAkuJmA5sGDQGHzG3_o9LUb783zZwXNpj418in_pXyZPBBIAOV8YOCfxJn4_P3cvahaD_LGdL581nNb-k99PBJQ5VtDKQuG_Ph5S8kzO0bd-qsy5tN-qqXj0bC4Hn_TiiDkW8WrRAq1sb-KVXfFf-gTuUjP_xOcHLLfFKK9J0"
                                />
                            </div>
                            <p className="text-xs text-white/60 font-label leading-relaxed">
                                Expected response time: Within 24-48 business hours. For urgent engineering matters, please specify "URGENT" in the subject line.
                            </p>
                        </div>
                    </div>
                </div>
            </main>

            {/* Map Section (Asymmetric) */}
            <section className="w-full px-8 mb-24 max-w-screen-2xl mx-auto">
                <div className="h-[400px] w-full bg-surface-container-low rounded-lg overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-1000 group">
                    <div className="absolute inset-0 z-10 bg-[#FF1493]/[0.2] group-hover:bg-[#FF1493]/[0.05] transition-all duration-500"></div>
                    <img
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
                        alt="Davao City map"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8EBWZRt_4OH-swy3Uy-IRXIIvXXyfywO6Op-dMYs9KqWdCh7ZaqF_ufYGiyrp52RzO8wo61d-A8k0BYU5wVL0n1gzZXwJO8RHU8m3BWpX_SCUqZ5oD5VgXaXmRPitaf4d8-K12W_wZPLVDDJ9d88SYQXj02Mr7Z-5UImqEpmWquRSmnFoyPlze2qJwE4T6u7Y_8B8-dVYpvtf316bmbP7RvTrcEV4g6yT5hRSAWq0Xdpkm4DECn9uTPX58kp0vZEbmjYg1419U0o"
                    />
                    <div className="absolute bottom-8 left-8 z-20 bg-surface p-6 rounded-lg border border-white/5">
                        <p className="font-headline font-bold text-primary mb-1">DAVAO HUB</p>
                        <p className="text-sm text-white/60 font-label">Mindanao, Philippines</p>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="w-full py-12 px-8 bg-surface-container-lowest border-t border-white/5">
                <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-full max-w-screen-2xl mx-auto">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <span className="text-primary font-bold font-headline uppercase tracking-tight">engr. cs</span>
                        <p className="font-body text-xs tracking-widest uppercase text-white/40 text-center md:text-left">© 2024 THE SONIC NOIR. ALL RIGHTS RESERVED.</p>
                    </div>
                    <div className="flex gap-8">
                        <a className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">INSTAGRAM</a>
                        <a className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">gmail</a>
                        <a className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">facebook</a>
                        <a className="font-body text-xs tracking-widest uppercase text-white/40 hover:text-primary transition-colors duration-300" href="#">LINKEDIN</a>
                    </div>
                </div>
            </footer>
        </div>
    );
}
