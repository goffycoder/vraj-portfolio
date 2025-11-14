"use client";

import React, { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Send } from "lucide-react";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // --- THIS IS THE UPDATED SUBMIT FUNCTION ---
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => { // 1. Use HTMLFormElement
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    // We use new FormData(e.currentTarget) to get all form data, including hidden fields
    const formDataBody = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formsubmit.co/vjpatel4423@gmail.com", { // 2. YOUR EMAIL
        method: "POST",
        body: formDataBody,
        headers: {
          'Accept': 'application/json' // 3. This is the key to prevent redirect!
        }
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-16 w-full" id="contact">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="flex flex-col items-center space-y-8">
          <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold tracking-tight text-primary">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl">
              Have a question or want to work together? Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <Card className="w-full max-w-2xl">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Send me a message
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* 4. Make sure your <form> tag uses the new handleSubmit */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* --- 5. ADD THESE HIDDEN FIELDS --- */}
                {/* This sets the email subject line */}
                <input type="hidden" name="_subject" value="New Portfolio Contact Form Submission!" />
                {/* This disables the reCAPTCHA */}
                <input type="hidden" name="_captcha" value="false" />
                
                {/* --- Your Visible Form Fields --- */}
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name" // This 'name' must match the form
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email" // This 'name' must match the form
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message" // This 'name' must match the form
                    placeholder="Your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    rows={6}
                    className="resize-none"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>

                {submitStatus === "success" && (
                  <p className="text-sm text-green-600 text-center">
                    ✓ Message sent successfully! I'll get back to you soon.
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm text-red-600 text-center">
                    ✗ Something went wrong. Please try again.
                  </p>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};