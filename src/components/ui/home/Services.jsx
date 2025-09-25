// src/components/ui/home/Services.jsx

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Search,
  Target,
  Users,
  PenTool,
  BarChart3,
  Smartphone,
  ArrowRight
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Users,
      title: "Social Media Marketing",
      description: "Build engaged communities and amplify your brand voice across all major social media platforms.",
      features: ["Content Strategy", "Community Management", "Influencer Outreach", "Social Analytics"],
      color: "from-purple-500 to-pink-600"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Dominate search rankings with our proven SEO strategies that drive organic traffic and boost your online visibility.",
      features: ["Keyword Research", "On-page Optimization", "Link Building", "Technical SEO"],
      color: "from-green-500 to-emerald-600"
    },
    {
      icon: Target,
      title: "Photography & Videography",
      description: "Capture stunning visuals that tell your brand story and engage your audience.",
      features: ["Professional Photography", "Video Production", "Drone Services", "Post-Production"],
      color: "from-blue-500 to-cyan-600"
    },
    {
      icon: PenTool,
      title: "Content Strategy",
      description: "Create compelling content that tells your brand story and converts prospects into loyal customers.",
      features: ["Blog Writing", "Video Production", "Infographics", "Email Campaigns"],
      color: "from-orange-500 to-red-600"
    },
    {
      icon: BarChart3,
      title: "Branding",
      description: "Establish a strong brand identity and create lasting impressions with our branding services.",
      features: ["Logo Design", "Brand Strategy", "Visual Identity", "Brand Guidelines"],
      color: "from-indigo-500 to-purple-600"
    },
    {
      icon: Smartphone,
      title: "Printed Media Advertising",
      description: "Reach your audience wherever they are with targeted print campaigns and advertising strategies.",
      features: ["Brochures", "Posters", "Flyers", "Banners"],
      color: "from-teal-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-24 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-900/50 text-blue-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
            Our Services
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-slate-50 mb-6">
            Complete Digital
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> Solutions</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            From strategy to execution, we provide end-to-end digital marketing services 
            that drive growth and deliver measurable results for your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title}>
              <Card className="group h-full hover:shadow-2xl transition-all duration-500 border border-slate-800 bg-slate-900 hover:-translate-y-2">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-bold text-slate-50 mb-4 group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed mb-6">
                        {service.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-3 text-gray-300">
                          <div className="w-2 h-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center text-blue-400 font-semibold group-hover:gap-3 gap-2 transition-all cursor-pointer">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}