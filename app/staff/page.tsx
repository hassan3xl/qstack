import { StaffCard, StaffMember } from "../../components/StaffCard";

const staffMembers: StaffMember[] = [
  {
    id: "Musa-ahmad",
    name: "Hasan Ahmad",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years of experience in software development and business strategy. Passionate about leveraging technology to solve complex problems.",
    avatar: "/avatars/hasan.jpg",
    email: "hasan@quantumstack.tech",
    linkedin: "https://linkedin.com/in/hasanahmad",
    twitter: "https://twitter.com/hasanahmad",
    github: "https://github.com/hasanahmad",
    skills: ["Leadership", "Strategy", "Full-Stack Development", "AI/ML"],
  },
  {
    id: "amina-yusuf",
    name: "Amina Yusuf",
    role: "CTO",
    bio: "Expert in cloud architecture and distributed systems. Leads the technical vision and ensures we stay ahead of the technology curve.",
    avatar: "/avatars/amina.jpg",
    email: "amina@quantumstack.tech",
    linkedin: "https://linkedin.com/in/aminayusuf",
    github: "https://github.com/aminayusuf",
    skills: ["Cloud Architecture", "DevOps", "System Design", "Security"],
  },
  {
    id: "david-okonkwo",
    name: "David Okonkwo",
    role: "Lead AI Engineer",
    bio: "Machine learning specialist with a focus on natural language processing and computer vision. Building the future of intelligent systems.",
    avatar: "/avatars/david.jpg",
    email: "david@quantumstack.tech",
    linkedin: "https://linkedin.com/in/davidokonkwo",
    github: "https://github.com/davidokonkwo",
    skills: ["Machine Learning", "NLP", "Computer Vision", "Python"],
  },
  {
    id: "fatima-bello",
    name: "Fatima Bello",
    role: "Senior Full-Stack Developer",
    bio: "Creative developer who bridges design and engineering. Specializes in building performant and beautiful web applications.",
    avatar: "/avatars/fatima.jpg",
    email: "fatima@quantumstack.tech",
    twitter: "https://twitter.com/fatimabello",
    github: "https://github.com/fatimabello",
    skills: ["React", "Next.js", "Node.js", "TypeScript"],
  },
  {
    id: "chukwu-emeka",
    name: "Chukwu Emeka",
    role: "Backend Engineer",
    bio: "Database expert and API architect. Ensures our systems are robust, scalable, and lightning fast.",
    avatar: "/avatars/chukwu.jpg",
    email: "chukwu@quantumstack.tech",
    github: "https://github.com/chukwuemeka",
    skills: ["Go", "PostgreSQL", "Redis", "gRPC"],
  },
  {
    id: "zainab-musa",
    name: "Zainab Musa",
    role: "UI/UX Designer",
    bio: "Human-centered designer focused on creating intuitive and delightful user experiences. Advocates for accessibility in all designs.",
    avatar: "/avatars/zainab.jpg",
    email: "zainab@quantumstack.tech",
    linkedin: "https://linkedin.com/in/zainabmusa",
    twitter: "https://twitter.com/zainabmusa",
    skills: ["UI Design", "UX Research", "Figma", "Design Systems"],
  },
];

export default function StaffPage() {
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
            Our Amazing Team
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Meet the <span className="text-primary">Innovators</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We are a diverse team of engineers, designers, and strategists
            united by our passion for building exceptional software solutions.
          </p>
        </div>
      </section>

      {/* Staff Grid */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-32">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {staffMembers.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </section>

      {/* Join Us CTA */}
      <section className="container mx-auto w-11/12 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl mb-12">
        <div className="flex flex-col items-center text-center gap-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Want to join our team?
          </h2>
          <p className="text-muted-foreground max-w-lg">
            We&apos;re always looking for talented individuals who share our
            passion for innovation and excellence.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
}
