import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Bell, Brain, Calendar, FileText, MessageSquare, Video } from "lucide-react";

const Features = () => {
    return (
      <section className="px-4 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 mb-4">
              <Brain className="w-4 h-4 mr-2" />
              AI-Powered Features
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Intelligent Healthcare Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the future of healthcare with our cutting-edge AI
              technology
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "AI Doctor Recommendation",
                description:
                  "Smart matching algorithm connects you with specialists based on symptoms, history, and location",
                color: "from-blue-500 to-indigo-600",
              },
              {
                icon: MessageSquare,
                title: "AI Health Assistant",
                description:
                  "24/7 chatbot for instant answers, symptom checking, and health guidance",
                color: "from-purple-500 to-pink-600",
              },
              {
                icon: Calendar,
                title: "Smart Appointment Scheduling",
                description:
                  "Automated booking system finds optimal times matching your and doctor's availability",
                color: "from-green-500 to-emerald-600",
              },
              {
                icon: FileText,
                title: "Digital Health Records",
                description:
                  "Secure, centralized access to all your medical records and test results",
                color: "from-orange-500 to-red-600",
              },
              {
                icon: Video,
                title: "Telemedicine Consultations",
                description:
                  "High-quality video calls with doctors from the comfort of your home",
                color: "from-cyan-500 to-blue-600",
              },
              {
                icon: Bell,
                title: "Smart Health Reminders",
                description:
                  "Never miss medications, appointments, or health checkups with intelligent alerts",
                color: "from-pink-500 to-rose-600",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="border-2 hover:border-indigo-200 transition-all hover:shadow-xl group"
              >
                <CardContent className="p-8">
                  <div
                    className={`inline-flex p-4 bg-linear-to-br ${feature.color} rounded-2xl mb-6 group-hover:scale-110 transition-transform`}
                  >
                    <feature.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Features;