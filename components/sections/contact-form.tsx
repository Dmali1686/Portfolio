"use client";

import { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";
import emailjs from '@emailjs/browser';

export function ContactForm() {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      if (form.current) {
        await emailjs.sendForm(
          'service_17m1v23',
          'template_8mihu7f',
          form.current,
          'gbSaGpTYlxxwZeO-P'
        );
        setSubmitStatus("success");
        form.current.reset();
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }
  };

  return (
    <form ref={form} onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <label htmlFor="user_name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="user_name"
          name="user_name"
          placeholder="Your name"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="user_email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="user_email"
          name="user_email"
          type="email"
          placeholder="your.email@example.com"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="subject" className="text-sm font-medium">
          Subject
        </label>
        <Input
          id="subject"
          name="subject"
          placeholder="What is this regarding?"
          required
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Your message here..."
          className="min-h-[150px]"
          required
        />
      </div>

      <Button
        type="submit"
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message
            <Send className="ml-2 h-4 w-4" />
          </>
        )}
      </Button>

      {submitStatus === "success" && (
        <p className="text-green-600 text-center">Message sent successfully!</p>
      )}
      {submitStatus === "error" && (
        <p className="text-red-600 text-center">Failed to send message. Please try again.</p>
      )}
    </form>
  );
} 