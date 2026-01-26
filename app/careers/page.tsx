import Link from "next/link";
import { Button } from "../../components/ui/button";
import {
  MapPin,
  Clock,
  Briefcase,
  ArrowRight,
  Building2,
  Users,
  Zap,
  Heart,
} from "lucide-react";

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: "full-time" | "part-time" | "contract" | "internship";
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  benefits: string[];
  salary?: string;
  isRemote: boolean;
  postedDate: string;
}

const jobOpenings: JobOpening[] = [
  {
    id: "senior-fullstack-dev",
    title: "Senior Full-Stack Developer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "full-time",
    experience: "4+ years",
    description:
      "We're looking for an experienced full-stack developer to join our growing engineering team. You'll work on exciting projects ranging from enterprise solutions to cutting-edge AI applications.",
    responsibilities: [
      "Design, develop, and maintain web applications using React/Next.js and Node.js",
      "Collaborate with designers and product managers to deliver exceptional user experiences",
      "Write clean, maintainable, and well-tested code",
      "Mentor junior developers and participate in code reviews",
      "Contribute to architectural decisions and technical strategy",
    ],
    requirements: [
      "4+ years of experience in full-stack development",
      "Strong proficiency in TypeScript, React, and Node.js",
      "Experience with databases (PostgreSQL, MongoDB)",
      "Familiarity with cloud platforms (AWS, GCP, or Azure)",
      "Excellent problem-solving and communication skills",
    ],
    benefits: [
      "Competitive salary",
      "Remote work flexibility",
      "Learning & development budget",
      "Health insurance",
      "Equity options",
    ],
    salary: "₦500,000 - ₦800,000/month",
    isRemote: true,
    postedDate: "2026-01-20",
  },
  {
    id: "ai-ml-engineer",
    title: "AI/ML Engineer",
    department: "AI & Research",
    location: "Remote",
    type: "full-time",
    experience: "3+ years",
    description:
      "Join our AI team to build intelligent systems that solve real-world problems. You'll work with LLMs, computer vision, and other cutting-edge AI technologies.",
    responsibilities: [
      "Develop and deploy machine learning models for various applications",
      "Work with LLMs and implement AI-powered features",
      "Optimize model performance and inference speed",
      "Collaborate with product teams to identify AI opportunities",
      "Stay current with the latest AI research and technologies",
    ],
    requirements: [
      "3+ years of experience in ML/AI development",
      "Strong Python skills and experience with ML frameworks (PyTorch, TensorFlow)",
      "Experience with LLMs and prompt engineering",
      "Understanding of MLOps and model deployment",
      "Strong mathematical foundation in statistics and linear algebra",
    ],
    benefits: [
      "Competitive salary",
      "Fully remote position",
      "Conference & training budget",
      "Flexible working hours",
      "Latest hardware/equipment",
    ],
    salary: "₦600,000 - ₦1,000,000/month",
    isRemote: true,
    postedDate: "2026-01-18",
  },
  {
    id: "ui-ux-designer",
    title: "UI/UX Designer",
    department: "Design",
    location: "Lagos, Nigeria",
    type: "full-time",
    experience: "2+ years",
    description:
      "We're seeking a creative UI/UX designer to craft beautiful and intuitive user experiences. You'll work closely with our engineering team to bring designs to life.",
    responsibilities: [
      "Create user-centered designs for web and mobile applications",
      "Develop wireframes, prototypes, and high-fidelity mockups",
      "Conduct user research and usability testing",
      "Maintain and evolve our design system",
      "Collaborate with developers to ensure design implementation quality",
    ],
    requirements: [
      "2+ years of experience in UI/UX design",
      "Proficiency in Figma or similar design tools",
      "Strong portfolio showcasing web and mobile designs",
      "Understanding of design systems and accessibility",
      "Excellent visual design skills and attention to detail",
    ],
    benefits: [
      "Competitive salary",
      "Hybrid work model",
      "Design tool subscriptions",
      "Health insurance",
      "Career growth opportunities",
    ],
    isRemote: false,
    postedDate: "2026-01-22",
  },
  {
    id: "frontend-intern",
    title: "Frontend Developer Intern",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "internship",
    experience: "0-1 years",
    description:
      "Great opportunity for aspiring developers! Join our team as an intern and learn from experienced engineers while working on real projects.",
    responsibilities: [
      "Learn and apply modern frontend development practices",
      "Work on real projects under mentorship",
      "Participate in code reviews and team meetings",
      "Contribute to documentation and testing",
      "Present your work and learnings to the team",
    ],
    requirements: [
      "Currently pursuing or recently completed a degree in CS or related field",
      "Basic understanding of HTML, CSS, and JavaScript",
      "Familiarity with React is a plus",
      "Eagerness to learn and grow",
      "Good communication skills",
    ],
    benefits: [
      "Competitive stipend",
      "Mentorship from senior engineers",
      "Real-world project experience",
      "Potential for full-time offer",
      "Flexible hours for students",
    ],
    salary: "₦100,000 - ₦150,000/month",
    isRemote: false,
    postedDate: "2026-01-24",
  },
];

const typeColors = {
  "full-time":
    "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  "part-time":
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
  contract:
    "bg-orange-500/10 text-orange-600 dark:text-orange-400 border-orange-500/20",
  internship:
    "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
};

const perks = [
  {
    icon: Users,
    title: "Great Team",
    description: "Work with talented, passionate people who love what they do.",
  },
  {
    icon: Zap,
    title: "Growth Focused",
    description:
      "Continuous learning opportunities and career development paths.",
  },
  {
    icon: Building2,
    title: "Flexible Work",
    description: "Remote-friendly culture with flexible working hours.",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "We believe in sustainable pace and mental well-being.",
  },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Background decoration */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-chart-2/5 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto px-4 w-11/12 text-center">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
            Join Our Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Build the <span className="text-primary">Future</span> With Us
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;re always looking for talented individuals who share our
            passion for innovation and excellence. Join us in building software
            that matters.
          </p>
        </div>
      </section>

      {/* Perks Section */}
      <section className="container mx-auto px-4 w-11/12 pb-16">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {perks.map((perk) => (
            <div
              key={perk.title}
              className="p-6 rounded-2xl border bg-card hover:shadow-lg hover:border-primary/20 transition-all duration-300"
            >
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <perk.icon className="size-6 text-primary" />
              </div>
              <h3 className="font-bold text-lg mb-2">{perk.title}</h3>
              <p className="text-muted-foreground text-sm">
                {perk.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Job Openings */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-32">
        <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
        <div className="space-y-6 max-w-4xl mx-auto">
          {jobOpenings.map((job) => (
            <div
              key={job.id}
              className="group relative overflow-hidden rounded-2xl border bg-card p-6 md:p-8 hover:shadow-xl hover:border-primary/20 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Left side - Job info */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-3">
                    <span
                      className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${typeColors[job.type]}`}
                    >
                      {job.type.charAt(0).toUpperCase() + job.type.slice(1)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {job.department}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {job.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-2">
                    {job.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="inline-flex items-center gap-1">
                      <MapPin className="size-4" />
                      {job.location} {job.isRemote && "(Remote OK)"}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Briefcase className="size-4" />
                      {job.experience}
                    </span>
                    <span className="inline-flex items-center gap-1">
                      <Clock className="size-4" />
                      Posted{" "}
                      {new Date(job.postedDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>
                  {job.salary && (
                    <p className="mt-3 text-sm font-medium text-primary">
                      {job.salary}
                    </p>
                  )}
                </div>

                {/* Right side - Apply button */}
                <div className="flex items-center md:self-center">
                  <Link
                    href={`/contact?position=${encodeURIComponent(job.title)}`}
                  >
                    <Button className="gap-2 group-hover:gap-3 transition-all">
                      Apply Now <ArrowRight className="size-4" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </div>
          ))}
        </div>
      </section>

      {/* No Matching Role CTA */}
      <section className="container mx-auto w-11/12 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl mb-12">
        <div className="flex flex-col items-center text-center gap-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Don&apos;t see a matching role?
          </h2>
          <p className="text-muted-foreground max-w-lg">
            We&apos;re always looking for exceptional talent. Send us your
            resume and tell us how you&apos;d like to contribute to our team.
          </p>
          <Link href="/contact">
            <Button size="lg" variant="outline" className="gap-2">
              Send Your Resume <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
