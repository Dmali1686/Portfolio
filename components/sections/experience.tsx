import { experience, education } from "@/lib/data";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Experience & Education</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            My professional journey and academic background that has shaped my skills and expertise.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          {/* Work Experience */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Briefcase className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Work Experience</h3>
            </div>

            <div className="relative pl-8 space-y-6">
              <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-border" />

              {experience.map((job, index) => (
                <div key={job.id} className="relative">
                  <div className="absolute -left-6 top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <Card className="relative transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-lg">{job.title}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {job.company}, {job.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {job.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="mb-3">{job.description}</p>
                      
                      {job.achievements.length > 0 && (
                        <div className="mt-2">
                          <strong className="text-sm text-muted-foreground font-medium mb-1 block">
                            Key Achievements:
                          </strong>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {job.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-semibold">Education</h3>
            </div>

            <div className="relative pl-8 space-y-6">
              <div className="absolute top-0 bottom-0 left-2 w-0.5 bg-border" />

              {education.map((edu, index) => (
                <div key={edu.id} className="relative">
                  <div className="absolute -left-6 top-1 h-4 w-4 rounded-full bg-primary ring-4 ring-background" />
                  <Card className="relative transition-all hover:shadow-md">
                    <CardHeader className="pb-2">
                      <div className="flex justify-between items-start flex-wrap gap-2">
                        <div>
                          <CardTitle className="text-lg">{edu.degree}</CardTitle>
                          <CardDescription className="text-base text-muted-foreground">
                            {edu.institution}, {edu.location}
                          </CardDescription>
                        </div>
                        <Badge variant="outline" className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {edu.period}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-4">
                      <p className="mb-3">{edu.description}</p>
                      
                      {edu.achievements.length > 0 && (
                        <div className="mt-2">
                          <strong className="text-sm text-muted-foreground font-medium mb-1 block">
                            Achievements:
                          </strong>
                          <ul className="space-y-1 text-sm list-disc pl-5">
                            {edu.achievements.map((achievement, i) => (
                              <li key={i}>{achievement}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}