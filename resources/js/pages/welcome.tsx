import { Head, Link } from '@inertiajs/react';

export default function Welcome() {
    return (
        <div className="dark min-h-screen bg-background text-on-surface font-body selection:bg-primary selection:text-on-primary">
            <Head title="Engr. Christine Sheen Ligan Baron-Vergara | Portfolio" />

            {/* TopNavBar */}
            <nav className="fixed top-0 w-full z-50 bg-background/60 backdrop-blur-xl">
                <div className="flex justify-between items-center px-8 py-6 max-w-7xl mx-auto w-full">
                    <span className="text-2xl font-bold tracking-tighter text-primary">ENGR. CS</span>
                    <div className="hidden md:flex gap-8 items-center">
                        <Link
                            className="font-headline uppercase tracking-widest text-sm text-primary border-b-2 border-primary pb-1 hover:text-primary transition-colors duration-300 scale-95 active:duration-100"
                            href="/"
                        >
                            Home
                        </Link>
                        <a
                            className="font-headline uppercase tracking-widest text-sm text-white/70 hover:text-primary transition-colors duration-300 scale-95 active:duration-100"
                            href="/stitch"
                        >
                            Writeups
                        </a>
                        <Link
                            className="font-headline uppercase tracking-widest text-sm text-white/70 hover:text-primary transition-colors duration-300 scale-95 active:duration-100"
                            href="/contact"
                        >
                            Contact
                        </Link>
                    </div>
                    <div className="flex items-center gap-4">
                        <button className="material-symbols-outlined text-primary hover:scale-110 transition-transform">
                            dark_mode
                        </button>
                    </div>
                </div>
            </nav>

            <main className="pt-24">
                {/* Hero Section */}
                <section className="max-w-7xl mx-auto px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7">
                        <p className="text-primary font-headline tracking-[0.3em] uppercase text-sm mb-6">PROFESSIONAL PORTFOLIO</p>
                        <h1 className="text-5xl lg:text-7xl font-bold font-headline leading-[1.1] mb-8 tracking-tighter text-on-surface">
                            Engr. Christine Sheen <span className="text-primary">L. Baron-Vergara</span>
                        </h1>
                        <p className="text-xl text-on-surface-variant font-light max-w-2xl mb-10 leading-relaxed">
                            Senior Technical Content Writer & Computer Engineer. Bridging the gap between complex engineering concepts and accessible digital narratives.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="/contact"
                                className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:opacity-90 transition-all"
                            >
                                Contact Me
                            </Link>
                            <button
                                onClick={()=>window.open("https://drive.google.com/file/d/1Vwc1vTizW_bmAb3fBd2BCIDlyw8ZedZF/view?usp=sharing", "_blank")}
                                className="border border-outline-variant/20 text-on-surface px-10 py-4 rounded-lg font-bold text-sm tracking-widest uppercase hover:bg-surface-container-low transition-all">
                                View Resume
                            </button>
                        </div>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div className="aspect-[4/5] bg-surface-container-low rounded-lg overflow-hidden white hover:grayscale-0 transition-all duration-700">
                            <img
                                className="w-full h-full object-cover"
                                alt="Professional portrait of Engr. Christine Sheen"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD1u-wJXqLIrJ5Cjvl05O0EViKVuDb_qZG6Ab5V_TvFlmUl4dRMHQs4QX1-A9qAQSVVJv2njmYH6Pb424z6KqAXqmRgd1k-u-YzaBk14lQZUBbFBZU9My-LBi6z5G_cdycIvOtLLuoQi105yaz0QUV7chMZIdanA_Pkp9qQesJBmLOdw2KQh6d3b6wC3oKYd48_jGZyieW7XTs_A7R2-w64XNYE0v9ejBJPH8xi0OH35T96jVUQhOJ0ETBhuG5XeRWQRbf79iVxXOI"
                            />
                        </div>
                        <div className="absolute -bottom-6 -left-6 bg-primary text-on-primary p-6 rounded-lg hidden md:block">
                            <p className="text-3xl font-bold font-headline">10+</p>
                            <p className="text-xs uppercase tracking-tighter opacity-80">Years of Experience</p>
                        </div>
                    </div>
                </section>

                {/* About & Bento Grid */}
                <section className="bg-surface-container-low py-24">
                    <div className="max-w-7xl mx-auto px-8">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* About Me */}
                            <div className="md:col-span-2 bg-surface p-10 rounded-lg">
                                <h2 className="text-3xl font-bold font-headline mb-8 text-primary">About Me</h2>
                                <p className="text-on-surface-variant leading-relaxed text-lg">
                                    With a dual background in Computer Engineering and Technical Writing, I specialize in distilling intricate technological frameworks into compelling, high-authority content. My approach combines technical precision with editorial flair, ensuring that every project is both accurate and engaging.
                                </p>
                                <div className="mt-12 grid grid-cols-2 gap-8 border-t border-outline-variant/10 pt-10">
                                    <div>
                                        <h4 className="text-primary font-headline text-sm uppercase tracking-widest mb-2">Location</h4>
                                        <p className="text-on-surface">Davao City, Philippines</p>
                                    </div>
                                    <div>
                                        <h4 className="text-primary font-headline text-sm uppercase tracking-widest mb-2">Specialization</h4>
                                        <p className="text-on-surface">ISO/IEC 27001, Document Manager, ISO Auditor, Startup Mentor, Business Analyst</p>
                                    </div>
                                </div>
                            </div>
                            {/* Strengths */}
                            <div className="bg-surface-container-highest p-10 rounded-lg flex flex-col justify-between">
                                <div>
                                    <h2 className="text-3xl font-bold font-headline mb-8 text-white">Strengths</h2>
                                    <ul className="space-y-6">
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">chat</span>
                                            <span className="text-on-surface font-medium">Precise Verbal Communication</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">edit_note</span>
                                            <span className="text-on-surface font-medium">Proficient Technical Writing</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">groups</span>
                                            <span className="text-on-surface font-medium">Excellent Team Coordination</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">bolt</span>
                                            <span className="text-on-surface font-medium">High Efficiency & Productivity</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">build</span>
                                            <span className="text-on-surface font-medium">Technical Troubleshooting</span>
                                        </li>
                                        <li className="flex items-center gap-4">
                                            <span className="material-symbols-outlined text-primary">leaderboard</span>
                                            <span className="text-on-surface font-medium">Adaptable Leadership</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="mt-8">
                                    <span className="text-4xl material-symbols-outlined text-white/20">format_quote</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Work Experience Timeline */}
                <section className="max-w-7xl mx-auto px-8 py-24">
                    <h2 className="text-4xl font-bold font-headline mb-16 text-center">Work <span className="text-primary">Experience</span></h2>
                    <div className="space-y-12 relative before:absolute before:left-0 md:before:left-1/2 before:w-[1px] before:h-full before:bg-outline-variant/30">
                        {/* Item 1 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 md:text-right pr-8 order-2 md:order-1">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">OCTOBER 2025 — PRESENT</span>
                                <h3 className="text-2xl font-bold text-white mb-2">TikTok Live Gaming Streamer</h3>
                                <p className="text-on-surface-variant italic mb-4">Self-Managed</p>
                                <p className="text-on-surface-variant max-w-md ml-auto">Creates and manages social media platforms and content.</p>
                            </div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,20,147,0.4)]"></div>
                            <div className="md:w-1/2 order-3"></div>
                        </div>
                        {/* Item 2 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 order-2 md:order-1"></div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary-container rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,71,156,0.4)]"></div>
                            <div className="md:w-1/2 pl-8 order-3">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">SEPTEMBER 2023 — JANUARY 2026</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Senior Technical Content Writer</h3>
                                <p className="text-on-surface-variant italic mb-4">X10 Technologies, Inc.</p>
                                <p className="text-on-surface-variant max-w-md">Global Document Custodian, Records Department Head, Policies and Manuals Writer. Handling RFPs (Canada, US, & Philippines), Technical Reports, Document Controls, Formatting, and Branding.</p>
                            </div>
                        </div>
                        {/* Item 3 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 md:text-right pr-8 order-2 md:order-1">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">JULY 2020 — SEPTEMBER 2023</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Technical Content Writer</h3>
                                <p className="text-on-surface-variant italic mb-4">X10 Technologies, Inc.</p>
                                <p className="text-on-surface-variant max-w-md ml-auto">Creating and managing technical documentation and content.</p>
                            </div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,20,147,0.4)]"></div>
                            <div className="md:w-1/2 order-3"></div>
                        </div>
                        {/* Item 4 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 order-2 md:order-1"></div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary-container rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,71,156,0.4)]"></div>
                            <div className="md:w-1/2 pl-8 order-3">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">JANUARY 2022 — JANUARY 2023</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Program Head for Computer Engineering</h3>
                                <p className="text-on-surface-variant italic mb-4">University of Mindanao Digos College</p>
                                <p className="text-on-surface-variant max-w-md">Leadership role in the Computer Engineering program.</p>
                            </div>
                        </div>
                        {/* Item 5 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 md:text-right pr-8 order-2 md:order-1">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">JUNE 2019 — JANUARY 2022</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Engineering Faculty & Lab Custodian</h3>
                                <p className="text-on-surface-variant italic mb-4">University of Mindanao Digos College</p>
                                <p className="text-on-surface-variant max-w-md ml-auto">Academic instruction and laboratory management.</p>
                            </div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,20,147,0.4)]"></div>
                            <div className="md:w-1/2 order-3"></div>
                        </div>
                        {/* Item 6 */}
                        <div className="relative flex flex-col md:flex-row items-center gap-8 group">
                            <div className="md:w-1/2 order-2 md:order-1"></div>
                            <div className="absolute left-[-10px] md:left-1/2 md:translate-x-[-50%] w-5 h-5 bg-primary-container rounded-full z-10 border-4 border-surface shadow-[0_0_15px_rgba(255,71,156,0.4)]"></div>
                            <div className="md:w-1/2 pl-8 order-3">
                                <span className="text-primary font-bold font-headline text-sm tracking-widest mb-2 block">MAY 2020 — OCTOBER 2020</span>
                                <h3 className="text-2xl font-bold text-white mb-2">Multi-skilled Virtual Assistant</h3>
                                <p className="text-on-surface-variant italic mb-4">TaskBullet Philippines</p>
                                <p className="text-on-surface-variant max-w-md">Providing diverse virtual assistance services.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Technical Skills & Affiliations */}
                <section className="bg-surface-container py-24">
                    <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-bold font-headline mb-10 text-primary">Technical Skills</h2>
                            <div className="flex flex-wrap gap-3">
                                {[
                                    'Networking Protocols', 'Device Programming', 'Video & Audio Editing',
                                    'Multimedia Networks', 'ChatGPT', 'Google Suites', 'Canva',
                                    'Office 365', 'Social Media Mgmt', 'WordPress', 'E-commerce',
                                    'Zoho', 'Asana', 'Trello', 'Airtable', 'Slack'
                                ].map((skill) => (
                                    <span key={skill} className="px-6 py-2 bg-surface-container-highest text-secondary font-medium rounded-full text-sm border border-outline-variant/10">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                            <h2 className="text-3xl font-bold font-headline mb-10 mt-20 text-white">Affiliations</h2>
                            <div className="space-y-6">
                                {[
                                    { title: 'Regional Vice President for External Affairs', org: 'ICPEP Region 11 (2025 – Present)' },
                                    { title: 'Member for Professional Membership', org: 'ICPEP National Board (2023 – 2024)' },
                                    { title: 'Chapter President', org: 'ICPEP Region 11 (2023 – 2024)' },
                                    { title: 'Professional Development Officer', org: 'ICPEP Region 11 (2022)' }
                                ].map((aff, i) => (
                                    <div key={i} className="flex items-start gap-4 p-4 bg-surface-container-low rounded-lg border-l-4 border-primary">
                                        <span className="material-symbols-outlined text-primary pt-1">verified</span>
                                        <div>
                                            <p className="font-bold text-on-surface">{aff.title}</p>
                                            <p className="text-xs text-on-surface-variant uppercase tracking-widest">{aff.org}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="grid grid-rows-2 gap-8">
                            {/* Education */}
                            <div className="bg-surface p-8 rounded-lg border border-outline-variant/10">
                                <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
                                    <span className="material-symbols-outlined">school</span> Education
                                </h2>
                                <div className="space-y-6">
                                    <div>
                                        <p className="font-bold text-on-surface">BS in Computer Engineering</p>
                                        <p className="text-sm text-on-surface-variant">University of Mindanao</p>
                                        <p className="text-xs text-primary mt-1">Graduated April 2019</p>
                                    </div>
                                    <div className="border-t border-outline-variant/10 pt-4">
                                        <p className="font-bold text-on-surface">Master of Business Administration</p>
                                        <p className="text-sm text-on-surface-variant">Ongoing Research</p>
                                    </div>
                                </div>
                            </div>
                            {/* Certifications */}
                            <div className="bg-surface p-8 rounded-lg border border-outline-variant/10">
                                <h2 className="text-2xl font-bold font-headline mb-6 text-primary flex items-center gap-3">
                                    <span className="material-symbols-outlined">card_membership</span> Certifications
                                </h2>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {[
                                        'Google Analytics Certified','Certified Computer Engineer', 'Program Advisory Council',
                                        'Introduction to Kubernetes', 'Development Mangement', 'Laboratory Safety Training Series III',
                                        'Case Assessment and Initial Industry Matching', 'DICT-DLS002 Navigating Google Workspace',
                                        'DICT-ICT001 Digital Innovation in Government', 'DICT-DLS005 Designing Presentation Slides',
                                        'Professional Organization Representative', 'Aruba Data Center Essentials'
                                    ].map((cert) => (
                                        <div key={cert} className="p-3 bg-surface-container-low rounded">
                                            <p className="text-sm font-bold">{cert}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Seminars & Achievements */}
                <section className="max-w-7xl mx-auto px-8 py-24">
                    <h2 className="text-4xl font-bold font-headline mb-16">Seminars & <span className="text-primary">Achievements</span></h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            { year: '2023', title: 'Most Valuable Employee', org: 'X10 Technologies', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing' },
                            { year: 'Award', title: 'Engineering Oratorical Champion', org: 'University of Mindanao', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing' },
                            { year: 'International', title: '1st International Convention Awardee', org: 'ICPEP Muscat, Oman', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing' },
                            { year: 'Research', title: 'Top 10 Research Presenter', org: 'CODEE Research Congress XI', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing ' },
                            { year: 'Runner-up', title: 'Essay Writing Champion', org: 'UM Davao Intramurals', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing '},
                            { year: 'Speaker', title: 'Python Enhancement Speaker', org: 'University of Mindanao', link: 'https://drive.google.com/file/d/1wsc4fZiU5ytVxS2zkuxHGZrvQB-NcPuE/view?usp=sharing '}
                        ].map((ach, i) => (
                            <a
                                    key={i}
                                    href={ach.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group bg-surface-container-low p-8 rounded-lg hover:bg-primary transition-all duration-300"
                            >
                                <p className="text-primary group-hover:text-on-primary font-bold mb-4">{ach.year}</p>
                                <h4 className="text-lg font-headline font-bold text-white group-hover:text-on-primary mb-2">{ach.title}</h4>
                                <p className="text-sm text-on-surface-variant group-hover:text-on-primary/80">{ach.org}</p>
                            </a>
                        ))}
                    </div>
                </section>
            </main>

            {/* Footer Execution */}
            <footer className="bg-surface-container-lowest w-full py-12 px-8 mt-20">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="text-center md:text-left">
                        <span className="font-headline text-lg text-white block mb-2 uppercase">engr. cs</span>
                        <p className="font-body text-xs tracking-tight text-white/40">© 2026 Virtual Buddy Solutions</p>
                    </div>
                    <div className="flex gap-8">
                        <a className="text-primary font-body text-xs tracking-tight uppercase hover:text-white transition-opacity opacity-80 hover:opacity-100" href="mailto:engineerbaron28@gmail.com">Gmail</a>
                        <a className="text-primary font-body text-xs tracking-tight uppercase hover:text-white transition-opacity opacity-80 hover:opacity-100" href="#">Facebook</a>
                        <a className="text-primary font-body text-xs tracking-tight uppercase hover:text-white transition-opacity opacity-80 hover:opacity-100" href="https://www.linkedin.com/in/engrchristinevergara/">LinkedIn</a>
                    </div>
                    <div className="text-right">
                        <p className="font-body text-xs tracking-tight text-white/20">DESIGNED BY INV3NTOR</p>
                    </div>
                </div>
            </footer>
        </div>
    );
}
