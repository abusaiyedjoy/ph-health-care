"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Sparkles, ArrowRight, Users, Heart, Clock } from "lucide-react";
import AIDoctorSuggestionCard from "./AI/DoctorSuggestion";

export default function CareNestHero() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-[#f4f2ff] via-[#ece8ff] to-[#dcd6ff] overflow-hidden">
      {/* Decorative linear blobs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#3F3693]/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-md h-112 bg-[#3F3693]/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* LEFT SECTION */}
          <div
            className="space-y-10"
          >
            {/* Badge */}
            <Badge className="bg-[#EAE7FF] text-[#3F3693] px-4 py-2 border-0 font-medium text-sm flex items-center gap-2 shadow-sm">
              <Sparkles className="w-4 h-4" />
              AI-Powered Healthcare Platform
            </Badge>

            {/* Headline */}
            <div className="space-y-5">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight text-gray-900">
                Transforming{" "}
                <span className="bg-linear-to-r from-[#3F3693] to-[#7a6ef7] bg-clip-text text-transparent">
                  Healthcare
                </span>{" "}
                with <br />
                <span className="text-[#3F3693]">AI Precision</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                Empowering patients with intelligent care. Instantly match with
                the right specialists and make informed health decisions — all
                powered by AI.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-[#3F3693] hover:bg-[#342e7a] text-white px-8 py-6 text-lg font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all group"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-[#3F3693] text-[#3F3693] hover:bg-[#3F3693]/10 px-8 py-6 text-lg font-semibold rounded-2xl transition-all"
              >
                Watch Demo
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Users className="w-5 h-5 text-[#3F3693]" />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    50K+
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Active Users
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Heart className="w-5 h-5 text-[#3F3693]" />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    98%
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600">
                  Satisfaction
                </p>
              </div>
              <div className="text-center sm:text-left">
                <div className="flex items-center justify-center sm:justify-start gap-2 mb-1">
                  <Clock className="w-5 h-5 text-[#3F3693]" />
                  <span className="text-3xl md:text-4xl font-bold text-gray-900">
                    24/7
                  </span>
                </div>
                <p className="text-sm md:text-base text-gray-600">Support</p>
              </div>
            </div>
          </div>

          {/* RIGHT SECTION (AI CARD) */}
          <div
            className="relative"
          >
            <AIDoctorSuggestionCard />
          </div>
        </div>
      </div>
    </div>
  );
}
