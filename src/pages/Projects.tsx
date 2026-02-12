import React from "react";
import { GitBranch, ExternalLink, Calendar } from "./Icons";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  date: string;
  featured?: boolean;
}

const projects: Project[] = [
  {
    id: "agata-loop",
    title: "Agata Loop",
    description: "Autonomous AI engineering agent system with GitHub integration",
    longDescription:
      "An advanced autonomous engineering loop that integrates with GitHub webhooks, performs intelligent code analysis, security audits, and automated deployments. Features include AI swarm audits, Shadow Lab verification, and comprehensive testing pipelines.",
    image: "/projects/agata-loop.jpg",
    techStack: ["TypeScript", "Node.js", "GitHub API", "AI/ML", "Docker"],
    githubUrl: "https://github.com/jazinski/agata-loop",
    date: "2024",
    featured: true,
  },
  {
    id: "portfolio",
    title: "Personal Portfolio",
    description: "Modern React portfolio with dark mode and responsive design",
    longDescription:
      "A sleek, performant portfolio website built with React and Tailwind CSS. Features dark mode toggle, responsive navigation, accessibility optimizations, and the Gold & Glow design system.",
    image: "/projects/portfolio.jpg",
    techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    githubUrl: "https://github.com/jazinski/jazinski.github.io",
    liveUrl: "https://jazinski.github.io",
    date: "2024",
    featured: true,
  },
];

export default function Projects() {
  const featuredProject = projects.find((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="min-h-screen py-16 bg-white dark:bg-dark-base">
      <div className="container px-4 mx-auto">
        {/* Hero Section */}
        <div className="mb-16 text-center animate-fade-in-up">
          <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white gold-glow">
            Projects
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            A showcase of my recent work in software engineering and automation
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-16 animate-fade-in-up animation-delay-100">
            <div className="overflow-hidden card-geometric">
              <div className="grid gap-8 md:grid-cols-2">
                {/* Image */}
                <div className="overflow-hidden bg-gray-200 dark:bg-dark-base aspect-video">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231a1f26' width='400' height='300'/%3E%3Ctext fill='%23c9a65c' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E%F0%9F%9A%80 {featuredProject.title}%3C/text%3E%3C/svg%3E";
                    }}
                  />
                </div>

                {/* Content */}
                <div className="flex flex-col justify-center p-8">
                  <div className="inline-block px-3 py-1 mb-4 text-sm font-semibold text-gold bg-gold/10 rounded-full w-fit">
                    Featured Project
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white">
                    {featuredProject.title}
                  </h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {featuredProject.longDescription}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredProject.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 text-sm font-medium text-gray-700 bg-gray-100 rounded-full dark:bg-dark-base dark:text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    {featuredProject.githubUrl && (
                      <a
                        href={featuredProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-all btn-secondary"
                      >
                        <GitBranch className="w-5 h-5" />
                        GitHub
                      </a>
                    )}
                    {featuredProject.liveUrl && (
                      <a
                        href={featuredProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 font-medium transition-all btn-primary"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        {otherProjects.length > 0 && (
          <>
            <h2 className="mb-8 text-3xl font-bold text-center text-gray-900 dark:text-white animate-fade-in-up animation-delay-200">
              More Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {otherProjects.map((project, index) => (
                <div
                  key={project.id}
                  className="overflow-hidden card-geometric animate-fade-in-up"
                  style={{
                    animationDelay: `${(index + 3) * 100}ms`,
                  }}
                >
                  {/* Image */}
                  <div className="overflow-hidden bg-gray-200 dark:bg-dark-base aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="object-cover w-full h-full transition-transform duration-500 hover:scale-110"
                      onError={(e) => {
                        e.currentTarget.src = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300'%3E%3Crect fill='%231a1f26' width='400' height='300'/%3E%3Ctext fill='%23c9a65c' font-family='Arial' font-size='20' x='50%25' y='50%25' text-anchor='middle' dominant-baseline='middle'%3E%F0%9F%9A%80 ${project.title}%3C/text%3E%3C/svg%3E`;
                      }}
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-sm text-gray-500 dark:text-gray-400">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </div>

                    <p className="mb-4 text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs font-medium text-gray-700 bg-gray-100 rounded dark:bg-dark-base dark:text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.techStack.length > 3 && (
                        <span className="px-2 py-1 text-xs font-medium text-gray-500 dark:text-gray-400">
                          +{project.techStack.length - 3}
                        </span>
                      )}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all btn-secondary"
                        >
                          <GitBranch className="w-4 h-4" />
                          Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium transition-all btn-primary"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in-up animation-delay-300">
          <div className="p-12 card-geometric bg-gradient-to-br from-dark-card to-dark-base">
            <h2 className="mb-4 text-3xl font-bold text-white gold-glow">
              Interested in Collaborating?
            </h2>
            <p className="max-w-2xl mx-auto mb-8 text-lg text-gray-400">
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
            <a
              href="#/contact"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg font-medium transition-all btn-primary"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
