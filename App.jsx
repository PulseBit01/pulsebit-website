
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Globe } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-slate-800 text-white">
      <header className="p-6 flex flex-col items-center justify-center">
        <img src="./logo.png" alt="PulseBIT Logo" className="w-32 h-32 mb-4" />
        <h1 className="text-4xl font-bold tracking-wide text-center">
          PulseBIT Business Solutions LLC
        </h1>
        <p className="mt-2 text-lg text-slate-300">
          Empowering your Success
        </p>
      </header>

      <section className="px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">IT Consultancy</h3>
              <p className="text-sm text-slate-300 mt-2">
                Expert guidance in transforming your business through innovative IT strategies and digital transformation.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Cloud & Infrastructure</h3>
              <p className="text-sm text-slate-300 mt-2">
                Scalable, secure cloud infrastructure solutions tailored to your growth and compliance needs.
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4">
              <h3 className="text-xl font-bold">Business Automation</h3>
              <p className="text-sm text-slate-300 mt-2">
                Streamline workflows and increase productivity with our intelligent automation systems.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-6 py-10 text-center bg-gray-800">
        <h2 className="text-3xl font-semibold mb-6">About Us</h2>
        <p className="text-md max-w-3xl mx-auto text-slate-300">
          PulseBIT Business Solutions LLC is a Texas-based company specializing in IT consultancy, cloud integration, and business automation. We partner with clients to deliver high-impact, cost-effective solutions that drive real growth.
        </p>
      </section>

      <section className="px-6 py-10 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Us</h2>
        <div className="flex flex-col gap-3 items-center">
          <div className="flex items-center gap-2">
            <Mail size={18} /> <span>info@pulsebit.com</span>
          </div>
          <div className="flex items-center gap-2">
            <Phone size={18} /> <span>+1 (512) 555-7890</span>
          </div>
          <div className="flex items-center gap-2">
            <Globe size={18} /> <span>www.pulsebit.com</span>
          </div>
        </div>
        <Button className="mt-6">Send Message</Button>
      </section>

      <footer className="text-sm text-center text-slate-400 py-6">
        &copy; {new Date().getFullYear()} PulseBIT Business Solutions LLC. All rights reserved.
      </footer>
    </div>
  );
}
