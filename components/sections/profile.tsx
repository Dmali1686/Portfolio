import Image from "next/image";
import { Mail, MapPin, Github, Linkedin, Twitter, Phone } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ContactForm } from "./contact-form";

export function ProfileSection() {
  return (
    <section id="home" className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-16 items-center">
          {/* Profile Image */}
          <div className="lg:col-span-2 flex justify-center lg:justify-end">
            <div className="relative w-48 h-48 md:w-64 md:h-64 overflow-hidden rounded-2xl ring-2 ring-primary/20 transition-transform hover:scale-105">
              <Image
                src={profile.avatar}
                alt={profile.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 192px, 256px"
                priority
                quality={100}
              />
            </div>
          </div>

          {/* Profile Information */}
          <div className="lg:col-span-3 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                {profile.name}
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground">
                {profile.title}
              </h2>
              <p className="max-w-2xl mx-auto lg:mx-0 text-muted-foreground">
                {profile.bio}
              </p>

              {/* Contact Button */}
              <div className="pt-6 flex flex-wrap gap-4 justify-center lg:justify-start">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="default" size="lg" className="gap-2 rounded-full bg-white text-black hover:bg-white/90">
                      <Mail className="h-4 w-4" />
                      Contact Me
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogTitle className="text-2xl text-center">Contact Form</DialogTitle>
                    <ContactForm />
                  </DialogContent>
                </Dialog>
                <Button asChild variant="outline" size="lg" className="gap-2 rounded-full border-white/20 hover:bg-white/10">
                  <a href="#experience">
                    View Experience
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Email */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground">
                <a href={`mailto:${profile.contact.email}`} className="hover:underline">
                  {profile.contact.email}
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Phone */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <Phone className="h-4 w-4" />
                Phone
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground">
                <a href={`tel:${profile.contact.phone}`} className="hover:underline">
                  {profile.contact.phone}
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          {/* Location */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                Location
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-foreground">
                {profile.contact.location}
              </CardDescription>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-colors">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm">Social Media</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex space-x-3">
                <a
                  href={profile.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href={profile.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href={profile.contact.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}