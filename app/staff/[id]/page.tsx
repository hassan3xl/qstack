import Link from "next/link";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "../../../components/ui/avatar";
import { Button } from "../../../components/ui/button";
import { StaffMember } from "../../../components/StaffCard";
import { ArrowLeft, Linkedin, Twitter, Github, Mail } from "lucide-react";
import { notFound } from "next/navigation";

const staffMembers: StaffMember[] = [
  {
    id: "hasan-ahmad",
    name: "Hasan Ahmad",
    role: "CEO & Founder",
    bio: "Visionary leader with 10+ years of experience in software development and business strategy. Passionate about leveraging technology to solve complex problems. Hasan founded Quantum Stack Technologies with the mission to bridge the gap between cutting-edge technology and real-world business needs. Under his leadership, the company has grown from a small startup to a trusted partner for enterprises worldwide.",
    avatar: "/avatars/hasan.jpg",
    email: "hasan@quantumstack.tech",
    linkedin: "https://linkedin.com/in/hasanahmad",
    twitter: "https://twitter.com/hasanahmad",
    github: "https://github.com/hasanahmad",
    skills: [
      "Leadership",
      "Strategy",
      "Full-Stack Development",
      "AI/ML",
      "Product Management",
      "Team Building",
    ],
  },
  {
    id: "amina-yusuf",
    name: "Amina Yusuf",
    role: "CTO",
    bio: "Expert in cloud architecture and distributed systems. Leads the technical vision and ensures we stay ahead of the technology curve. Amina has architected systems that handle millions of requests per day and has been instrumental in establishing our engineering culture of excellence. She believes in building systems that are not just functional but also elegant and maintainable.",
    avatar: "/avatars/amina.jpg",
    email: "amina@quantumstack.tech",
    linkedin: "https://linkedin.com/in/aminayusuf",
    github: "https://github.com/aminayusuf",
    skills: [
      "Cloud Architecture",
      "DevOps",
      "System Design",
      "Security",
      "Kubernetes",
      "AWS",
    ],
  },
  {
    id: "david-okonkwo",
    name: "David Okonkwo",
    role: "Lead AI Engineer",
    bio: "Machine learning specialist with a focus on natural language processing and computer vision. Building the future of intelligent systems. David has published research in top AI conferences and brings academic rigor to practical applications. He leads our AI initiatives and is passionate about making AI accessible and beneficial for everyone.",
    avatar: "/avatars/david.jpg",
    email: "david@quantumstack.tech",
    linkedin: "https://linkedin.com/in/davidokonkwo",
    github: "https://github.com/davidokonkwo",
    skills: [
      "Machine Learning",
      "NLP",
      "Computer Vision",
      "Python",
      "TensorFlow",
      "PyTorch",
    ],
  },
  {
    id: "fatima-bello",
    name: "Fatima Bello",
    role: "Senior Full-Stack Developer",
    bio: "Creative developer who bridges design and engineering. Specializes in building performant and beautiful web applications. Fatima has a keen eye for detail and believes that great software should be both functional and aesthetically pleasing. She mentors junior developers and is an advocate for clean code practices.",
    avatar: "/avatars/fatima.jpg",
    email: "fatima@quantumstack.tech",
    twitter: "https://twitter.com/fatimabello",
    github: "https://github.com/fatimabello",
    skills: [
      "React",
      "Next.js",
      "Node.js",
      "TypeScript",
      "GraphQL",
      "Tailwind CSS",
    ],
  },
  {
    id: "chukwu-emeka",
    name: "Chukwu Emeka",
    role: "Backend Engineer",
    bio: "Database expert and API architect. Ensures our systems are robust, scalable, and lightning fast. Chukwu has a deep understanding of database internals and distributed systems. He's responsible for our high-performance backend services and has optimized systems that reduced latency by over 80%.",
    avatar: "/avatars/chukwu.jpg",
    email: "chukwu@quantumstack.tech",
    github: "https://github.com/chukwuemeka",
    skills: [
      "Go",
      "PostgreSQL",
      "Redis",
      "gRPC",
      "Microservices",
      "Performance Optimization",
    ],
  },
  {
    id: "zainab-musa",
    name: "Zainab Musa",
    role: "UI/UX Designer",
    bio: "Human-centered designer focused on creating intuitive and delightful user experiences. Advocates for accessibility in all designs. Zainab believes that great design is invisible – it just works. She has designed interfaces used by millions and leads our design system initiative to ensure consistency across all our products.",
    avatar: "/avatars/zainab.jpg",
    email: "zainab@quantumstack.tech",
    linkedin: "https://linkedin.com/in/zainabmusa",
    twitter: "https://twitter.com/zainabmusa",
    skills: [
      "UI Design",
      "UX Research",
      "Figma",
      "Design Systems",
      "Prototyping",
      "Accessibility",
    ],
  },
];

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function StaffDetailPage({ params }: PageProps) {
  const { id } = await params;
  const member = staffMembers.find((m) => m.id === id);

  if (!member) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      {/* Background decoration */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-chart-2/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 w-11/12 py-12 md:py-20">
        {/* Back Button */}
        <Link href="/staff">
          <Button
            variant="ghost"
            className="mb-8 gap-2 hover:gap-3 transition-all"
          >
            <ArrowLeft className="size-4" />
            Back to Team
          </Button>
        </Link>

        {/* Profile Header */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-8 md:p-12 mb-12">
          {/* Accent decorations */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-chart-2/10 rounded-full blur-3xl" />

          <div className="relative z-10 flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Large Avatar */}
            <div className="relative flex-shrink-0">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-chart-1 to-chart-2 blur-lg opacity-60 scale-110" />
              <Avatar className="relative size-40 md:size-48 ring-4 ring-background shadow-2xl">
                <AvatarImage src={member.avatar} alt={member.name} />
                <AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-chart-2 text-primary-foreground">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            {/* Info */}
            <div className="text-center md:text-left flex-1">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-3">
                {member.name}
              </h1>
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary mb-6">
                {member.role}
              </span>

              {/* Social Links */}
              <div className="flex items-center justify-center md:justify-start gap-3 mt-6">
                {member.email && (
                  <a
                    href={`mailto:${member.email}`}
                    className="p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                  >
                    <Mail className="size-5" />
                  </a>
                )}
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/80 hover:bg-[#0077B5] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                  >
                    <Linkedin className="size-5" />
                  </a>
                )}
                {member.twitter && (
                  <a
                    href={member.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/80 hover:bg-[#1DA1F2] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                  >
                    <Twitter className="size-5" />
                  </a>
                )}
                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/80 hover:bg-[#333] hover:text-white transition-all duration-300 shadow-sm hover:shadow-lg hover:scale-110"
                  >
                    <Github className="size-5" />
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Bio Section */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">About</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {member.bio}
              </p>
            </div>
          </div>

          {/* Skills Section */}
          <div className="lg:col-span-1">
            <div className="rounded-2xl border bg-card p-8 h-full">
              <h2 className="text-2xl font-bold mb-6">Skills & Expertise</h2>
              <div className="flex flex-wrap gap-2">
                {member.skills?.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full text-sm font-medium bg-gradient-to-r from-primary/10 to-chart-2/10 text-foreground border border-primary/20 hover:border-primary/40 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Want to work with {member.name.split(" ")[0]}?
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return staffMembers.map((member) => ({
    id: member.id,
  }));
}
