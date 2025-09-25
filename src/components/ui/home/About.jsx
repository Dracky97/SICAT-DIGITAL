import React from "react";
import { CheckCircle2, Award, Users, TrendingUp } from "lucide-react";

export default function About() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-medium mb-6">
              About SICAT DIGITAL
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
              We're Digital Marketing
              <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent"> Experts</span>
            </h2>
            
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              At SICAT DIGITAL, we combine creativity, technology, and data-driven insights to help businesses 
              achieve unprecedented digital growth. Our team of seasoned professionals brings years of experience 
              in crafting marketing strategies that deliver real, measurable results.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Data-driven marketing strategies that maximize ROI",
                "Expert team with 5+ years of proven experience", 
                "Custom solutions tailored to your business goals",
                "24/7 support and transparent reporting"
              ].map((point, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">200+</div>
                <div className="text-gray-600">Projects Delivered</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">98%</div>
                <div className="text-gray-600">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-slate-900 mb-2">50+</div>
                <div className="text-gray-600">Team Members</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-600 flex items-center justify-center mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Award Winning</h3>
                <p className="text-gray-600">Recognized excellence in digital marketing innovation</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mt-8 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Certified professionals with proven track records</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg -mt-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-600 flex items-center justify-center mb-4">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Growth Focus</h3>
                <p className="text-gray-600">Strategies designed for sustainable business growth</p>
              </div>

              <div className="bg-white rounded-2xl p-8 shadow-lg mt-4 hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-red-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Results Driven</h3>
                <p className="text-gray-600">Measurable outcomes that impact your bottom line</p>
              </div>
            </div>

            {/* Floating decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}