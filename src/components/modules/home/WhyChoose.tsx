import { Badge } from "@/components/ui/badge";
import { Users, Clock, Shield, TrendingUp, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const WhyChoose = () => {
  return (
    <section className="px-4 py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(63,54,147,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(63,54,147,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Badge className="bg-[#3F3693]/10 text-[#3F3693] mb-4">
            <TrendingUp className="w-4 h-4 mr-2" />
            Why CareNest
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Patients Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of satisfied patients experiencing better healthcare
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
                <div className="inline-flex p-4 bg-[#3F3693]/10 text-[#3F3693] rounded-2xl mb-4">
                  <item.icon className="w-8 h-8" />
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
  );
};

export default WhyChoose;
