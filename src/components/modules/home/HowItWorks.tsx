import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Brain,
  MessageSquare,
  Video,
  Zap,
} from "lucide-react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-white">
      {/* How It Works Section */}
      <section className="px-4 py-16 md:py-24 bg-linear-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-purple-100 text-purple-700 mb-4">
              <Zap className="w-4 h-4 mr-2" />
              Simple Process
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How CareNest Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get connected with the right healthcare in just 3 simple steps
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                icon: MessageSquare,
                title: "Describe Your Symptoms",
                description:
                  "Share your health concerns with our AI assistant through chat or voice",
              },
              {
                step: "02",
                icon: Brain,
                title: "Get AI Recommendations",
                description:
                  "Our intelligent system analyzes and matches you with the best specialists",
              },
              {
                step: "03",
                icon: Video,
                title: "Book & Consult",
                description:
                  "Schedule appointments and consult via video call or in-person visit",
              },
            ].map((step, index) => (
              <div key={index} className="relative">
                {index < 2 && (
                  <div className="hidden md:block absolute top-24 left-full w-full h-0.5 bg-linear-to-r from-indigo-300 to-purple-300 -translate-x-1/2 z-0"></div>
                )}
                <Card className="relative z-10 border-2 hover:border-indigo-300 transition-all hover:shadow-xl bg-white">
                  <CardContent className="p-8 text-center">
                    <div className="absolute top-0 left-0 inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-r-xl rounded-tl-xl text-white text-2xl font-bold mb-6">
                      {step.step}
                    </div>
                    <div className="inline-flex p-4 bg-indigo-100 rounded-2xl mb-6">
                      <step.icon className="w-8 h-8 text-indigo-600" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
