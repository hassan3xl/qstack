import Link from "next/link";
import Image from "next/image";
import { Button } from "../../components/ui/button";
import {
  ExternalLink,
  Github,
  Globe,
  Smartphone,
  Bot,
  ArrowRight,
} from "lucide-react";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: "web" | "mobile" | "ai" | "enterprise";
  liveUrl?: string;
  githubUrl?: string;
  status: "live" | "development" | "managing";
  client?: string;
}

const projects: Project[] = [
  {
    id: "onepage-revenue",
    title: "OnePage Revenue System",
    description:
      "A comprehensive vehicle registration and revenue collection platform for government agencies.",
    longDescription:
      "Full-stack revenue management system with real-time tracking, agent management, and automated fine calculations.",
    image: "/projects/onepage.jpg",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "FastAPI"],
    category: "enterprise",
    status: "managing",
    client: "Government Agency",
  },
  {
    id: "ai-chatbot-platform",
    title: "AI Customer Support Bot",
    description:
      "Intelligent chatbot powered by LLMs for automated customer support and query resolution.",
    longDescription:
      "Custom AI solution with natural language understanding, context retention, and seamless handoff to human agents.",
    image: "/projects/chatbot.jpg",
    tags: ["Python", "LangChain", "OpenAI", "React"],
    category: "ai",
    liveUrl: "https://demo.quantumstack.tech/chatbot",
    status: "live",
  },
  {
    id: "ecommerce-platform",
    title: "E-Commerce Platform",
    description:
      "Modern e-commerce solution with inventory management and payment integration.",
    longDescription:
      "Scalable multi-vendor marketplace with real-time inventory tracking, multiple payment gateways, and analytics dashboard.",
    image: "/projects/ecommerce.jpg",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    category: "web",
    status: "live",
  },
  {
    id: "healthcare-app",
    title: "Healthcare Mobile App",
    description:
      "Patient-doctor communication platform with appointment scheduling and telemedicine.",
    longDescription:
      "Cross-platform mobile app enabling patients to book appointments, consult doctors via video, and manage prescriptions.",
    image: "/projects/healthcare.jpg",
    tags: ["React Native", "Node.js", "MongoDB", "WebRTC"],
    category: "mobile",
    status: "development",
  },
  {
    id: "inventory-system",
    title: "Inventory Management System",
    description:
      "Real-time inventory tracking and supply chain management for retail businesses.",
    longDescription:
      "Enterprise-grade inventory solution with barcode scanning, automated reordering, and multi-warehouse support.",
    image: "/projects/inventory.jpg",
    tags: ["Vue.js", "Django", "PostgreSQL", "Redis"],
    category: "enterprise",
    status: "live",
    client: "Retail Chain",
  },
  {
    id: "data-analytics",
    title: "Business Analytics Dashboard",
    description:
      "Interactive data visualization and business intelligence platform.",
    longDescription:
      "Custom analytics solution with real-time data processing, customizable dashboards, and automated reporting.",
    image: "/projects/analytics.jpg",
    tags: ["React", "D3.js", "Python", "Apache Kafka"],
    category: "web",
    status: "managing",
  },
];

const categoryIcons = {
  web: Globe,
  mobile: Smartphone,
  ai: Bot,
  enterprise: Globe,
};

const statusColors = {
  live: "bg-green-500/10 text-green-600 dark:text-green-400 border-green-500/20",
  development:
    "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  managing:
    "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
};

const statusLabels = {
  live: "Live",
  development: "In Development",
  managing: "Managing",
};

export default function PortfolioPage() {
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
            Our Work
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Projects We&apos;ve <span className="text-primary">Built</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            From innovative startups to enterprise solutions, here are some of
            the projects we&apos;re proud to have built and continue to manage.
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-4 w-11/12 pb-20 md:pb-32">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const CategoryIcon = categoryIcons[project.category];
            return (
              <div
                key={project.id}
                className="group relative overflow-hidden rounded-2xl border bg-card hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
              >
                {/* Project Image */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <CategoryIcon className="size-16 text-muted-foreground/30" />
                  </div>
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Status Badge */}
                <div className="absolute top-4 right-4">
                  <span
                    className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${statusColors[project.status]}`}
                  >
                    {statusLabels[project.status]}
                  </span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  {project.client && (
                    <p className="text-sm text-muted-foreground mb-2">
                      Client: {project.client}
                    </p>
                  )}
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-primary/5 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-primary hover:underline"
                      >
                        <ExternalLink className="size-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-primary hover:underline"
                      >
                        <Github className="size-4" />
                        Code
                      </a>
                    )}
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-chart-1 to-chart-2 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto w-11/12 py-16 md:py-24 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 rounded-3xl mb-12">
        <div className="flex flex-col items-center text-center gap-6 px-4">
          <h2 className="text-3xl md:text-4xl font-bold">
            Have a project in mind?
          </h2>
          <p className="text-muted-foreground max-w-lg">
            Let&apos;s discuss how we can bring your ideas to life. We&apos;re
            always excited to take on new challenges.
          </p>
          <Link href="/contact">
            <Button size="lg" className="gap-2">
              Start a Project <ArrowRight className="size-4" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
