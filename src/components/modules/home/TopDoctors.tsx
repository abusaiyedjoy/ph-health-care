"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Star,
  MapPin,
  Award,
  Calendar,
  Video,
  CheckCircle2,
  Stethoscope,
  Heart,
  Brain,
  Activity,
  Eye,
  Bone,
  ThumbsUp,
  Clock,
  TrendingUp,
} from "lucide-react";

export default function TopRatedDoctorsSection() {
  const [activeSpecialty, setActiveSpecialty] = useState("All");

  const specialties = [
    { name: "All", icon: Stethoscope },
    { name: "Cardiology", icon: Heart },
    { name: "Neurology", icon: Brain },
    { name: "Orthopedics", icon: Bone },
    { name: "General", icon: Activity },
    { name: "Ophthalmology", icon: Eye },
  ];

  const doctors = [
    {
      id: 1,
      name: "Dr. Sarah Johnson",
      specialty: "Cardiology",
      image: "SJ",
      rating: 4.9,
      reviews: 1250,
      experience: "15 years",
      patients: "5000+",
      location: "New York, USA",
      languages: ["English", "Spanish"],
      availability: "Available Today",
      consultationFee: 150,
      awards: ["Best Cardiologist 2024", "Top Rated"],
      education: "Harvard Medical School",
      specialization: ["Heart Disease", "Hypertension", "Cardiac Surgery"],
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      image: "MC",
      rating: 4.8,
      reviews: 980,
      experience: "12 years",
      patients: "3500+",
      location: "Los Angeles, USA",
      languages: ["English", "Mandarin"],
      availability: "Available Tomorrow",
      consultationFee: 140,
      awards: ["Excellence Award", "Top Neurologist"],
      education: "Stanford University",
      specialization: ["Brain Disorders", "Epilepsy", "Stroke"],
    },
    {
      id: 3,
      name: "Dr. Emily Williams",
      specialty: "Orthopedics",
      image: "EW",
      rating: 4.9,
      reviews: 1100,
      experience: "10 years",
      patients: "4200+",
      location: "Chicago, USA",
      languages: ["English", "French"],
      availability: "Available Today",
      consultationFee: 130,
      awards: ["Best Orthopedic Surgeon", "Patient Choice"],
      education: "Johns Hopkins University",
      specialization: ["Joint Replacement", "Sports Injuries", "Spine"],
    },
    {
      id: 4,
      name: "Dr. James Wilson",
      specialty: "General",
      image: "JW",
      rating: 4.7,
      reviews: 850,
      experience: "8 years",
      patients: "3000+",
      location: "Boston, USA",
      languages: ["English"],
      availability: "Available Today",
      consultationFee: 100,
      awards: ["Rising Star", "Community Choice"],
      education: "Yale School of Medicine",
      specialization: ["Primary Care", "Preventive Medicine", "Wellness"],
    },
  ];

  const filteredDoctors =
    activeSpecialty === "All"
      ? doctors
      : doctors.filter((doc) => doc.specialty === activeSpecialty);

  return (
    <section className="px-4 py-16 md:py-20 bg-linear-to-br from-gray-50 via-white to-purple-50 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(63,54,147,0.1),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(63,54,147,0.08),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto z-20">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-[#3F3693] text-white hover:bg-[#342d7a] mb-4">
            <Award className="w-4 h-4 mr-2" />
            Top Rated Physicians
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Meet Our{" "}
            <span className="bg-linear-to-r from-[#3F3693] to-purple-600 bg-clip-text text-transparent">
              Top-Rated Doctors
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Consult with highly qualified and experienced doctors trusted by
            thousands of patients
          </p>
        </div>

        {/* Specialty Filter */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {specialties.map((specialty) => (
            <Button
              key={specialty.name}
              onClick={() => setActiveSpecialty(specialty.name)}
              variant={
                activeSpecialty === specialty.name ? "default" : "outline"
              }
              className={`px-6 py-3 rounded-full font-semibold transition-all ${
                activeSpecialty === specialty.name
                  ? "bg-[#3F3693] text-white hover:bg-[#342d7a] shadow-lg scale-105"
                  : "border-2 border-gray-300 text-gray-700 hover:border-[#3F3693] hover:text-[#3F3693]"
              }`}
            >
              <specialty.icon className="w-4 h-4 mr-2" />
              {specialty.name}
            </Button>
          ))}
        </div>

        {/* Doctors Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12">
          {filteredDoctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="relative pt-0 group border border-gray-200 hover:border-[#3F3693]/60 hover:shadow-xl shadow-md transition-all duration-300 rounded-2xl overflow-hidden"
            >
              <CardContent className="p-0">
                {/* Header */}
                <div className="bg-linear-to-br from-[#3F3693] to-purple-600 p-5 relative overflow-hidden">
                  {/* Decorative Elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12"></div>

                  <div className="relative flex items-center gap-4">
                    {/* Doctor Avatar */}
                    <div className="relative">
                      <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center text-[#3F3693] font-bold text-xl shadow-lg">
                        {doctor.image}
                      </div>
                      {/* Online status */}
                      <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full animate-pulse"></span>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white leading-tight">
                        {doctor.name}
                      </h3>
                      <p className="text-purple-100 text-sm mb-2">
                        {doctor.specialty} Specialist
                      </p>
                      <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-full text-sm">
                          <Star className="w-4 h-4 text-yellow-300 fill-yellow-300" />
                          <span className="text-white font-semibold">
                            {doctor.rating}
                          </span>
                          <span className="text-purple-200 text-xs">
                            ({doctor.reviews})
                          </span>
                        </div>
                        <Badge className="bg-white/20 text-white border-0 text-xs font-medium">
                          <Award className="w-3 h-3 mr-1" />
                          Top Rated
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className=" p-5 space-y-4 bg-white">
                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 bg-blue-100 rounded-lg flex items-center justify-center">
                        <Stethoscope className="w-5 h-5 text-[#3F3693]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Experience</p>
                        <p className="font-medium text-gray-900">
                          {doctor.experience}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <div className="w-9 h-9 bg-green-100 rounded-lg flex items-center justify-center">
                        <ThumbsUp className="w-5 h-5 text-[#3F3693]" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500">Patients</p>
                        <p className="font-medium text-gray-900">
                          {doctor.patients}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="space-y-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-[#3F3693]" />
                      {doctor.location}
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="w-4 h-4 text-[#3F3693]" />
                      {doctor.education}
                    </div>
                  </div>

                  {/* Specializations */}
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">
                      Specializations:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {doctor.specialization.map((spec, idx) => (
                        <Badge
                          key={idx}
                          variant="outline"
                          className="border-[#3F3693]/40 text-[#3F3693] bg-purple-50 hover:bg-purple-100 transition"
                        >
                          {spec}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-3 border-t border-gray-100">
                    <div className="flex items-center gap-2 text-sm text-green-600 font-medium">
                      <Clock className="w-4 h-4" />
                      {doctor.availability}
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-gray-500">Consultation Fee</p>
                      <p className="text-lg font-bold text-[#3F3693]">
                        ${doctor.consultationFee}
                      </p>
                    </div>
                  </div>

                  {/* Buttons */}
                  <div className="absolute w-full bottom-4 left-1/2 -translate-x-1/2 flex gap-3 pt-2 px-5">
                    <Button className="w-full cursor-pointer bg-[#3F3693] hover:bg-[#342d7a] text-white rounded-xl font-semibold group relative overflow-hidden">
                      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-1000 bg-linear-to-r from-transparent via-white/20 to-transparent"></div>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Appointment
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Button
            size="lg"
            className="bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#342d7a] hover:to-purple-700 text-white px-10 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            View All Doctors
            <TrendingUp className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
}
