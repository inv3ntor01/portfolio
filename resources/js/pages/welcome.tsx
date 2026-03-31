import { Head, Link, usePage } from '@inertiajs/react';
import { 
    Mail, 
    Phone, 
    MapPin, 
    GraduationCap, 
    Award, 
    Users, 
    CheckCircle, 
    Cpu,
    LayoutDashboard
} from 'lucide-react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { dashboard, login, register } from '@/routes';

export default function Welcome({
    canRegister = true,
}: {
    canRegister?: boolean;
}) {
    const { auth } = usePage().props;

    return (
        <div className="min-h-screen bg-background text-foreground font-sans">
            <Head title="Engr. Christine Sheen Ligan Baron-Vergara | Portfolio" />
            
            {/* Header / Navigation */}
            <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-2">
                        <Badge variant="outline" className="px-2 py-1 font-bold tracking-tight">ENGR</Badge>
                        <span className="hidden text-lg font-bold sm:inline-block">CHRISTINE SHEEN</span>
                    </div>
                    <nav className="flex items-center gap-4">
                        {auth.user ? (
                            <Button asChild variant="outline" size="sm">
                                <Link href={dashboard()}>
                                    <LayoutDashboard className="mr-2 h-4 w-4" />
                                    Dashboard
                                </Link>
                            </Button>
                        ) : (
                            <>
                                <Button asChild variant="ghost" size="sm">
                                    <Link href={login()}>Log in</Link>
                                </Button>
                                {canRegister && (
                                    <Button asChild size="sm">
                                        <Link href={register()}>Register</Link>
                                    </Button>
                                )}
                            </>
                        )}
                    </nav>
                </div>
            </header>

            <main className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                {/* Hero Section */}
                <section className="mb-20 flex flex-col items-center text-center lg:flex-row lg:text-left lg:gap-12">
                    <div className="mb-8 lg:mb-0">
                        <Avatar className="h-48 w-48 border-4 border-primary/10 shadow-xl">
                            <AvatarFallback className="text-4xl font-bold bg-primary/5 text-primary">CS</AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="flex-1 space-y-4">
                        <div className="space-y-2">
                            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                Engr. Christine Sheen Ligan Baron-Vergara
                            </h1>
                            <p className="text-xl text-muted-foreground font-medium">
                                Senior Technical Content Writer & Computer Engineer
                            </p>
                        </div>
                        <div className="flex flex-wrap justify-center lg:justify-start gap-4 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1.5">
                                <Mail className="h-4 w-4" />
                                <a href="mailto:engineerbaron28@gmail.com" className="hover:text-primary transition-colors">engineerbaron28@gmail.com</a>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Phone className="h-4 w-4" />
                                <span>09204272135</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                                <MapPin className="h-4 w-4" />
                                <span>Davao City, Philippines</span>
                            </div>
                        </div>
                        <p className="max-w-[800px] text-lg leading-relaxed text-muted-foreground">
                            I am a skilled Computer Engineer with a passion for simplifying complex concepts into clear and
                            engaging content. With a strong background in technology and a keen eye for detail, I excel in creating
                            user-friendly guides, documentation, and blog posts that cater to both technical and non-technical
                            audiences.
                        </p>
                        <div className="flex gap-4 justify-center lg:justify-start pt-4">
                            <Button asChild size="lg">
                                <a href="mailto:engineerbaron28@gmail.com">Contact Me</a>
                            </Button>
                        </div>
                    </div>
                </section>

                <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
                    {/* Main Content Area */}
                    <div className="lg:col-span-2 space-y-16">
                        
                        {/* About / Objectives */}
                        <section className="space-y-4">
                            <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
                            <Separator />
                            <div className="space-y-4 text-muted-foreground leading-relaxed">
                                <p>
                                    As someone who grew up in both an engineering and business environment, my objectives are always
                                    set to a high bar of standards. It has always been my pleasure to support businesses and academic
                                    institutions in uplifting their visions and missions, welcoming success through innovation and
                                    technology.
                                </p>
                                <p>
                                    My ability to adapt my writing style to various platforms and my dedication to staying up to
                                    date with the latest industry trends make me an asset in delivering informative and well-crafted
                                    technical content.
                                </p>
                            </div>
                        </section>

                        {/* Work Experience */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
                            <Separator />
                            <div className="space-y-8">
                                <ExperienceItem 
                                    title="TikTok Live Gaming Streamer"
                                    company="Self-Managed"
                                    period="October 2025 – Present"
                                    description="Creates and manages social media platforms and content."
                                />
                                <ExperienceItem 
                                    title="Senior Technical Content Writer"
                                    company="X10 Technologies, Inc."
                                    period="September 2023 – January 2026"
                                    description="Global Document Custodian, Records Department Head, Policies and Manuals Writer. Handling RFPs (Canada, US, & Philippines), Technical Reports, Document Controls, Formatting, and Branding."
                                />
                                <ExperienceItem 
                                    title="Technical Content Writer"
                                    company="X10 Technologies, Inc."
                                    period="July 2020 – September 2023"
                                    description="Creating and managing technical documentation and content."
                                />
                                <ExperienceItem 
                                    title="Program Head for Computer Engineering"
                                    company="University of Mindanao Digos College"
                                    period="January 2022 - January 2023"
                                    description="Leadership role in the Computer Engineering program."
                                />
                                <ExperienceItem 
                                    title="Full-time Engineering Faculty and Lab Custodian"
                                    company="University of Mindanao Digos College"
                                    period="June 2019 – January 2022"
                                    description="Academic instruction and laboratory management."
                                />
                                <ExperienceItem 
                                    title="Multi-skilled Virtual Assistant"
                                    company="TaskBullet Philippines"
                                    period="May 2020 – October 2020"
                                    description="Providing diverse virtual assistance services."
                                />
                                <ExperienceItem 
                                    title="Administrative Supervisor and Onboarding Trainer"
                                    company="The Virtual S Web Solutions"
                                    period="October 2018 – May 2019"
                                    description="Supervision and training of new team members."
                                />
                                <ExperienceItem 
                                    title="All Rounder Administrative Assistant"
                                    company="The Virtual S Web Solutions"
                                    period="August 2018 – October 2018"
                                    description="Providing administrative support across various functions."
                                />
                                <ExperienceItem 
                                    title="Technical & Marketing Crew"
                                    company="Callbox Philippines Incorporated"
                                    period="April 2017 – June 2017"
                                    description="Supporting technical and marketing operations."
                                />
                                <ExperienceItem 
                                    title="Book Author and Self-Help Writer"
                                    company="Launchora"
                                    period="August 2013 – 2022"
                                    description="Self-help writing and public speaking."
                                />
                            </div>
                        </section>

                        {/* Seminars and Achievements */}
                        <section className="space-y-6">
                            <h2 className="text-3xl font-bold tracking-tight">Seminars and Achievements</h2>
                            <Separator />
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <AchievementCard 
                                    title="Most Valuable Employee 2023"
                                    organization="X10 Technologies"
                                />
                                <AchievementCard 
                                    title="Engineering Oratorical Champion"
                                    organization="University of Mindanao"
                                />
                                <AchievementCard 
                                    title="1st International Convention Awardee"
                                    organization="ICPEP Muscat, Oman"
                                />
                                <AchievementCard 
                                    title="Top 10 Research Presenter"
                                    organization="CODEE Research Congress XI"
                                />
                                <AchievementCard 
                                    title="Essay Writing Champion (Runner-up)"
                                    organization="UM Davao Intramurals"
                                />
                                <AchievementCard 
                                    title="Python Enhancement Speaker"
                                    organization="University of Mindanao"
                                />
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Area */}
                    <div className="space-y-12 lg:sticky lg:top-24 h-fit">
                        
                        {/* Technical Skills */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-primary" />
                                Technical Skills
                            </h3>
                            <div className="flex flex-wrap gap-2">
                                <Badge variant="secondary">Networking Protocols</Badge>
                                <Badge variant="secondary">Device Programming</Badge>
                                <Badge variant="secondary">Video & Audio Editing</Badge>
                                <Badge variant="secondary">Multimedia Networks</Badge>
                                <Badge variant="secondary">ChatGPT</Badge>
                                <Badge variant="secondary">Google Suites</Badge>
                                <Badge variant="secondary">Canva</Badge>
                                <Badge variant="secondary">Office 365</Badge>
                                <Badge variant="secondary">Social Media Mgmt</Badge>
                                <Badge variant="secondary">E-commerce</Badge>
                                <Badge variant="secondary">Zoho</Badge>
                                <Badge variant="secondary">Asana</Badge>
                                <Badge variant="secondary">Trello</Badge>
                                <Badge variant="secondary">Airtable</Badge>
                                <Badge variant="secondary">Slack</Badge>
                            </div>
                        </section>

                        {/* Strengths */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <CheckCircle className="h-5 w-5 text-primary" />
                                Strengths
                            </h3>
                            <ul className="space-y-3 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Precise Verbal Communication</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Proficient Technical Writing</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Excellent Team Coordination</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>High Efficiency & Productivity</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Technical Troubleshooting</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                                    <span>Adaptable Leadership</span>
                                </li>
                            </ul>
                        </section>

                        {/* Education */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <GraduationCap className="h-5 w-5 text-primary" />
                                Education
                            </h3>
                            <div className="space-y-1">
                                <p className="font-semibold text-sm">BS in Computer Engineering</p>
                                <p className="text-sm text-muted-foreground">University of Mindanao, Davao City</p>
                                <p className="text-xs text-muted-foreground italic">Graduated April 2019</p>
                            </div>
                        </section>

                        {/* Professional Affiliations */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Users className="h-5 w-5 text-primary" />
                                Affiliations
                            </h3>
                            <div className="space-y-4 text-sm">
                                <div className="space-y-1">
                                    <p className="font-semibold">ICPEP Region 11</p>
                                    <p className="text-muted-foreground">Regional Vice President for External Affairs</p>
                                    <p className="text-xs text-muted-foreground italic">2025 – Present</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-semibold">ICPEP National Board</p>
                                    <p className="text-muted-foreground">Member for Professional Membership</p>
                                    <p className="text-xs text-muted-foreground italic">2023 – 2024</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-semibold">ICPEP Region 11</p>
                                    <p className="text-muted-foreground">Chapter President</p>
                                    <p className="text-xs text-muted-foreground italic">2023 – 2024</p>
                                </div>
                                <div className="space-y-1">
                                    <p className="font-semibold">ICPEP Region 11</p>
                                    <p className="text-muted-foreground">Professional Development Officer</p>
                                    <p className="text-xs text-muted-foreground italic">2022</p>
                                </div>
                            </div>
                        </section>

                        {/* Certifications */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold flex items-center gap-2">
                                <Award className="h-5 w-5 text-primary" />
                                Certifications
                            </h3>
                            <div className="p-4 rounded-lg bg-primary/5 border border-primary/10">
                                <p className="font-bold text-primary">Certified Computer Engineer</p>
                                <p className="text-xs text-muted-foreground italic">Awarded: July 01, 2021</p>
                            </div>
                        </section>
                    </div>
                </div>
            </main>

            <footer className="mt-24 border-t py-12 bg-muted/30">
                <div className="container mx-auto px-4 text-center space-y-4 sm:px-6 lg:px-8">
                    <p className="text-lg font-bold tracking-tighter">ENGR. CHRISTINE SHEEN LIGAN BARON-VERGARA</p>
                    <div className="flex justify-center gap-6 text-muted-foreground">
                        <a href="mailto:engineerbaron28@gmail.com" className="hover:text-primary transition-colors">
                            <Mail className="h-5 w-5" />
                        </a>
                        <span className="text-sm">Davao City, Philippines</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Professional Portfolio. Built with Laravel, Inertia, and React.
                    </p>
                </div>
            </footer>
        </div>
    );
}

function ExperienceItem({ title, company, period, description }: { title: string, company: string, period: string, description: string }) {
    return (
        <div className="relative pl-8 before:absolute before:left-0 before:top-1.5 before:h-full before:w-px before:bg-border last:before:hidden">
            <div className="absolute left-[-4px] top-1.5 h-2 w-2 rounded-full bg-primary" />
            <div className="space-y-1.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                    <h3 className="text-xl font-bold leading-none">{title}</h3>
                    <Badge variant="outline" className="font-normal">{period}</Badge>
                </div>
                <p className="font-medium text-primary/80">{company}</p>
                <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
        </div>
    );
}

function AchievementCard({ title, organization }: { title: string, organization: string }) {
    return (
        <Card className="hover:shadow-md transition-shadow">
            <CardHeader className="p-4 pb-2">
                <CardTitle className="text-base font-bold">{title}</CardTitle>
                <CardDescription className="text-xs">{organization}</CardDescription>
            </CardHeader>
        </Card>
    );
}
