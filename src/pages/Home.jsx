import React from "react";
import Hero from "@/components/ui/home/Hero";
import Services from "@/components/ui/home/Services";
import About from "@/components/ui/home/About";
import Portfolio from "@/components/ui/home/Portfolio";
import Testimonials from "@/components/ui/home/Testimonials";
import Contacts from "@/components/ui/home/Contacts";

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Portfolio />
      <Testimonials />
      <Contacts />
    </div>
  );
}