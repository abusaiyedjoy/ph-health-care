"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Bell,
  Brain,
  Calendar,
  FileText,
  MessageSquare,
  Video,
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: "AI Doctor Recommendation",
      description:
        "Get instantly matched with top specialists using advanced AI that analyzes symptoms, history, and preferences.",
      gradient: "from-[#3F3693] to-[#635BBD]",
    },
    {
      icon: MessageSquare,
      title: "AI Health Assistant",
      description:
        "24/7 intelligent chatbot for instant answers, symptom checks, and real-time wellness tracking.",
      gradient: "from-[#6A5ACD] to-[#A47CF3]",
    },
    {
      icon: Calendar,
      title: "Smart Appointment Scheduling",
      description:
        "Find ideal consultation times using AI that syncs patient and doctor availability effortlessly.",
      gradient: "from-[#3F3693] to-[#5A4FCF]",
    },
    {
      icon: FileText,
      title: "Digital Health Records",
      description:
        "Securely access your health data anywhere. AI organizes medical records and lab results for clarity.",
      gradient: "from-[#7B61FF] to-[#9B8BFF]",
    },
    {
      icon: Video,
      title: "Telemedicine Consultations",
      description:
        "Connect with doctors in high-quality, encrypted video calls — comfort meets convenience.",
      gradient: "from-[#635BBD] to-[#3F3693]",
    },
    {
      icon: Bell,
      title: "Smart Health Reminders",
      description:
        "Stay on top of medications, checkups, and health milestones with personalized notifications.",
      gradient: "from-[#8E7CFF] to-[#3F3693]",
    },
  ];

  return (
    <section className="relative px-4 py-20 md:py-28 overflow-hidden">

      <div className="max-w-7xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-[#3F3693]/10 text-[#3F3693] mb-4 border-0 text-sm px-4 py-1.5 font-semibold">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Features
          </Badge>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Intelligent Healthcare Solutions
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Experience a new era of digital healthcare driven by artificial
            intelligence and designed for patient well-being.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <Card
              key={i}
              className="group relative border-0 bg-white/60 backdrop-blur-xl shadow-lg rounded-3xl overflow-hidden transition-all hover:-translate-y-3 hover:shadow-2xl duration-500"
            >
              <CardContent className="relative p-8 flex flex-col items-start justify-start">
                {/* Icon */}
                <div
                  className={`relative mb-6 p-5 rounded-2xl bg-linear-to-br ${feature.gradient} shadow-lg`}
                >
                  <div className="absolute inset-0 rounded-2xl bg-white/10 blur-md"></div>
                  <feature.icon className="w-8 h-8 text-white relative z-10" />
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#3F3693] transition-colors">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed mb-4">
                  {feature.description}
                </p>

                {/* Hover Gradient Border */}

                {/* Decorative Glow */}
                <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#3F3693]/5 blur-2xl rounded-full group-hover:opacity-100 opacity-0 transition-opacity duration-700"></div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
