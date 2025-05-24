import { skills } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Progress } from "@/components/ui/progress";
import { 
  Card, 
  CardContent,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function SkillsSection() {
  const allCategories = skills.map(category => category.category);
  
  return (
    <section id="skills" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Skills & Expertise</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The technologies and tools I specialize in, with a focus on full-stack development.
          </p>
        </div>

        <Tabs defaultValue={allCategories[0]} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="grid grid-flow-col auto-cols-max gap-1">
              {allCategories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-4 py-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {skills.map((category) => (
            <TabsContent
              key={category.category}
              value={category.category}
              className="animate-in fade-in-50 duration-300"
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-center">
                    {category.category} Skills
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((skill, index) => (
                      <div
                        key={skill.name}
                        className={cn(
                          "space-y-2",
                          index % 2 === 0 ? "md:pr-4" : "md:pl-4"
                        )}
                      >
                        <div className="flex justify-between items-center">
                          <h4 className="font-medium">{skill.name}</h4>
                          <span className="text-sm text-muted-foreground">
                            {skill.level}%
                          </span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-6">Core Competencies</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {/* Tags for overall skills */}
            {["React Ecosystem", "Responsive Design", "API Integration", "Performance Optimization", 
              "UI/UX Design", "Database Design", "Cloud Deployment", "Authentication & Security"].map((tag) => (
              <span
                key={tag}
                className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}