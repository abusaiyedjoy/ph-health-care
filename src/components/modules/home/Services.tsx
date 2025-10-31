import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Heart,
  Brain,
  Stethoscope,
  FileText,
  CheckCircle2,
} from "lucide-react";


const Services = () => {
    return (
        <section className="px-4 py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <Badge className="bg-indigo-100 text-indigo-700 mb-4">
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
                    <div className="shrink-0 p-4  bg-linear-to-r from-[#3F3693] to-purple-600 rounded-2xl group-hover:scale-110 transition-transform">
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
    );
};

export default Services;