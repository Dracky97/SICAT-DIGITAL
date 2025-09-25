// src/components/ui/home/Hero.jsx

import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, TrendingUp, Target } from "lucide-react";
import LightRays from './LightRays';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToPortfolio = () => {
    document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative h-screen pt-20 pb-20 bg-slate-900 dark:bg-slate-900 overflow-hidden">

      <div className="absolute inset-0 w-full h-full">
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="opacity-40 custom-rays" 
        />
      </div>

      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex items-center h-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                #1 Digital Marketing Agency
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-slate-50 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Transform Your
                </span>
                <br />
                <span className="text-slate-50">Digital Presence</span>
              </h1>

              <p className="text-xl text-gray-400 leading-relaxed max-w-2xl">
                We help businesses grow exponentially through data-driven digital marketing strategies,
                cutting-edge technology, and creative excellence that delivers measurable results.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold px-8 py-4 text-lg group"
              >
                Start Your Growth
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              
              <Button
                onClick={scrollToPortfolio}
                variant="outline"
                size="lg"
                className="font-semibold px-8 py-4 text-lg border-2 border-slate-700 text-slate-50 hover:border-blue-400 hover:text-blue-400 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Our Work
              </Button>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative z-10 bg-slate-800/50 backdrop-blur-md border border-slate-700 rounded-3xl shadow-2xl p-8">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-xl flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-semibold text-white">Campaign Performance</div>
                    <div className="text-sm text-gray-400">Real-time analytics</div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="text-sm font-medium">Conversion Rate</span>
                    <span className="text-green-400 font-bold">+247%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-green-400 to-green-600 h-3 rounded-full w-[85%]"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="text-sm font-medium">Lead Generation</span>
                    <span className="text-blue-400 font-bold">+312%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-3 rounded-full w-[92%]"></div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center text-slate-200">
                    <span className="text-sm font-medium">Brand Awareness</span>
                    <span className="text-purple-400 font-bold">+189%</span>
                  </div>
                  <div className="w-full bg-slate-700 rounded-full h-3">
                    <div className="bg-gradient-to-r from-purple-400 to-purple-600 h-3 rounded-full w-[78%]"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-6 -right-6 w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-2xl shadow-lg flex items-center justify-center">
              <TrendingUp className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}