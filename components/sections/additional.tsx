import { additional } from "@/lib/data";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Target, Heart, Award } from "lucide-react";

export function AdditionalSection() {
  return (
    <section id="goals" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Goals & Interests</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Beyond my professional work, here's what drives me and what I enjoy.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Professional Goals */}
          <Card className="group hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Target className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Professional Goals</CardTitle>
              </div>
              <CardDescription>
                What I'm working toward in my career
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {additional.goals.map((goal, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <span className="flex-shrink-0 h-5 w-5 mt-0.5 flex items-center justify-center rounded-full bg-primary/10 text-primary text-xs">
                      {index + 1}
                    </span>
                    <span>{goal}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Personal Interests */}
          <Card className="group hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Heart className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Personal Interests</CardTitle>
              </div>
              <CardDescription>
                Activities I enjoy outside of work
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-3">
                {additional.interests.map((interest, index) => (
                  <div
                    key={index}
                    className="bg-muted p-3 rounded-lg text-center group-hover:bg-primary/5 transition-colors"
                  >
                    {interest}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Certifications */}
          <Card className="group hover:shadow-md transition-all">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-2 mb-2">
                <div className="p-2 rounded-full bg-primary/10 text-primary">
                  <Award className="h-5 w-5" />
                </div>
                <CardTitle className="text-xl">Certifications</CardTitle>
              </div>
              <CardDescription>
                Professional certifications I've earned
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                {additional.certifications.map((cert, index) => (
                  <li key={index} className="border-b border-border pb-3 last:border-0 last:pb-0">
                    <div className="font-medium">{cert.name}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      {cert.issuer} • {cert.date}
                    </div>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}