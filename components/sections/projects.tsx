import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { ProjectImage } from "@/components/ui/project-image";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A selection of my recent work and projects I've contributed to.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden group transition-all hover:shadow-lg">
              <div className="relative h-48 w-full overflow-hidden bg-muted">
                <ProjectImage
                  src={project.image}
                  alt={project.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  priority={project.id === 1}
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription className="line-clamp-2">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="gap-2 flex justify-start">
                <Button asChild variant="default" size="sm" className="gap-2">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4" />
                    View Project
                  </a>
                </Button>
                <Button asChild variant="outline" size="sm" className="gap-2">
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    Source Code
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}