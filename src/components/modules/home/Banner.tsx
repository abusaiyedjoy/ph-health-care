import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Sparkles,
  ArrowRight,
  Users,
  Heart,
  Clock,
  Brain,
  Calendar,
  MessageSquare,
  Shield,
  Stethoscope,
  Video,
  FileText,
  Bell,
  CheckCircle2,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react";

export default function Banner() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 px-4 py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-8">
              <Badge className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-0 px-4 py-2 text-sm font-medium">
                <Sparkles className="w-4 h-4 mr-2" />
                AI-Powered Healthcare Platform
              </Badge>

              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  Healthcare
                  <br />
                  <span className="bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Reimagined with
                  </span>
                  <br />
                  <span className="text-indigo-600">AI Intelligence</span>
                </h1>

                <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl">
                  Connect patients with the right doctors instantly. Our
                  AI-powered matching system ensures optimal care
                  recommendations, reducing wait times and improving health
                  outcomes.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-indigo-600 hover:text-indigo-600 px-8 py-6 text-lg font-semibold rounded-xl transition-all"
                >
                  Watch Demo
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Users className="w-5 h-5 text-indigo-600" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">
                      50K+
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Active Users
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Heart className="w-5 h-5 text-indigo-600" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">
                      98%
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Satisfaction
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="w-5 h-5 text-indigo-600" />
                    <div className="text-3xl md:text-4xl font-bold text-gray-900">
                      24/7
                    </div>
                  </div>
                  <div className="text-sm md:text-base text-gray-600">
                    Support
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-br from-indigo-400 to-purple-400 rounded-3xl blur-3xl opacity-20"></div>
              <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl p-8 md:p-12 shadow-2xl border border-white/20">
                <div className="space-y-6">
                  <div className="inline-flex p-4 bg-linear-to-br from-indigo-500 to-purple-600 rounded-2xl shadow-lg">
                    <Sparkles className="w-8 h-8 text-white" />
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-gray-900">
                    AI Doctor Matching
                  </h3>

                  <p className="text-lg text-gray-600 leading-relaxed">
                    Intelligent recommendations in seconds. Our advanced AI
                    analyzes your symptoms, medical history, and preferences to
                    connect you with the perfect healthcare provider.
                  </p>

                  <div className="space-y-3 pt-4">
                    {[
                      "Instant specialist matching",
                      "Personalized care plans",
                      "Real-time availability",
                      "Secure health records",
                    ].map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <div className="shrink-0 w-6 h-6 bg-indigo-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 bg-indigo-600 rounded-full"></div>
                        </div>
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-4">
                    <div className="w-16 h-1 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full"></div>
                    <div className="w-8 h-1 bg-linear-to-r from-purple-600 to-pink-500 rounded-full"></div>
                    <div className="w-4 h-1 bg-linear-to-r from-pink-500 to-red-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Features Section */}
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
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-indigo-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6">
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

      {/* Services Section */}
      <section className="px-4 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-700 mb-4">
              <Stethoscope className="w-4 h-4 mr-2" />
              Our Services
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need for better health, all in one platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Stethoscope,
                title: "General Consultation",
                description:
                  "Connect with general physicians for routine checkups and common health issues",
                features: [
                  "Virtual & In-person",
                  "Same-day bookings",
                  "Prescription delivery",
                ],
              },
              {
                icon: Heart,
                title: "Specialist Care",
                description:
                  "Access to 50+ specialties including cardiology, dermatology, and orthopedics",
                features: [
                  "Expert specialists",
                  "Advanced diagnostics",
                  "Treatment plans",
                ],
              },
              {
                icon: Brain,
                title: "Mental Health Support",
                description:
                  "Professional counseling and therapy services for mental wellness",
                features: [
                  "Licensed therapists",
                  "Confidential sessions",
                  "Flexible scheduling",
                ],
              },
              {
                icon: FileText,
                title: "Lab Tests & Reports",
                description:
                  "Book lab tests from home and get digital reports instantly",
                features: [
                  "Home sample collection",
                  "Fast results",
                  "Expert interpretation",
                ],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="border-2 hover:border-green-200 transition-all hover:shadow-xl group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="shrink-0 p-4 bg-linear-to-br from-green-500 to-emerald-600 rounded-2xl group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="px-4 py-16 md:py-24 bg-linear-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-700 mb-4">
              <TrendingUp className="w-4 h-4 mr-2" />
              Why CareNest
            </Badge>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Patients Choose Us
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of satisfied patients experiencing better
              healthcare
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "Bank-level encryption for your health data",
              },
              {
                icon: Clock,
                title: "Save Time",
                desc: "No more waiting rooms or long queues",
              },
              {
                icon: Users,
                title: "Verified Doctors",
                desc: "All doctors are licensed and verified",
              },
              {
                icon: Star,
                title: "Top Rated",
                desc: "4.8/5 rating from 10,000+ reviews",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="border-2 hover:border-blue-300 transition-all hover:shadow-lg text-center bg-white"
              >
                <CardContent className="p-8">
                  <div className="inline-flex p-4 bg-blue-100 rounded-2xl mb-4">
                    <item.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-16 md:py-24 bg-linear-to-br from-indigo-600 to-purple-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Experience Better Healthcare?
          </h2>
          <p className="text-xl text-indigo-100 mb-8">
            Join CareNest today and get connected with the right doctor in
            minutes
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-indigo-600 hover:bg-gray-100 px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold rounded-xl transition-all"
            >
              Book a Demo
            </Button>
          </div>
          <p className="text-indigo-200 mt-6">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </section>
    </div>
  );
}
