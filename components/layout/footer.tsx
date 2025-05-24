import { Github, Linkedin, Twitter, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/30 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h3 className="font-bold text-xl mb-1">
              Dinesh<span className="text-primary">Mali</span>
            </h3>
            <p className="text-muted-foreground text-sm">
              Full Stack Developer based in Pune
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="GitHub">
              <a href={profile.contact.github} target="_blank" rel="noopener noreferrer">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="LinkedIn">
              <a href={profile.contact.linkedin} target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="Twitter">
              <a href={profile.contact.twitter} target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="rounded-full" aria-label="Email">
              <a href={`mailto:${profile.contact.email}`}>
                <Mail className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <Separator className="my-6" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {currentYear} Dinesh Mali. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}