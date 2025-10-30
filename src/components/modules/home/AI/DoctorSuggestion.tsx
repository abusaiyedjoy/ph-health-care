"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Brain,
  Sparkles,
  Send,
  Loader2,
  CheckCircle2,
  TrendingUp,
  Clock,
  Star,
} from "lucide-react";

export default function AIDoctorSuggestionCard() {
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowResults(true);
    }, 2000);
  };

  const suggestedDoctors = [
    {
      name: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      rating: 4.9,
      experience: "15 years",
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Internal Medicine",
      rating: 4.8,
      experience: "12 years",
    },
    {
      name: "Dr. Emily Williams",
      specialty: "General Physician",
      rating: 4.7,
      experience: "10 years",
    },
  ];

  return (
    <div className="relative max-w-3xl mx-auto">
      {/* linear Glow */}
      <div className="absolute inset-0 bg-linear-to-br from-[#3F3693] via-purple-600 to-fuchsia-600 rounded-3xl blur-3xl opacity-25"></div>

      {/* Main Card */}
      <div className="relative bg-white/90 dark:bg-gray-900/80 backdrop-blur-2xl rounded-3xl p-8 md:p-12 shadow-[0_10px_40px_rgba(63,54,147,0.15)] border border-gray-100 dark:border-gray-800 transition-all">
        {!showResults ? (
          <>
            {/* Header */}
            <div className="space-y-2 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                AI Doctor Matching
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base">
                Describe your symptoms — get intelligent doctor recommendations
                instantly.
              </p>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div className="relative">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tell us what you're feeling... (e.g., 'I have chest pain and dizziness')"
                  className="w-full min-h-[140px] px-5 py-4 bg-gray-50 dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#3F3693] focus:border-transparent resize-none text-gray-900 dark:text-gray-200 placeholder:text-gray-400"
                  disabled={isLoading}
                  maxLength={500}
                />
                <span className="absolute bottom-3 right-4 text-xs text-gray-400">
                  {input.length}/500
                </span>
              </div>

              <Button
                type="submit"
                disabled={!input.trim() || isLoading}
                className="w-full bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#322c7c] hover:to-purple-700 text-white py-6 text-base font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed group"
              >
                {isLoading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Analyzing with AI...
                  </>
                ) : (
                  <>
                    Get AI Recommendations
                    <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </>
                )}
              </Button>
            </form>

            {/* Features */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-10 border-t border-gray-200 dark:border-gray-800 pt-6">
              {[
                { icon: Brain, text: "AI Analysis" },
                { icon: Clock, text: "Instant Results" },
                { icon: CheckCircle2, text: "Verified Doctors" },
                { icon: TrendingUp, text: "98% Accuracy" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 text-center"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-[#3F3693]/10 to-purple-200 dark:from-[#3F3693]/30 dark:to-purple-800 rounded-xl flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-[#3F3693]" />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Success State */}
            <div className="text-center border-b border-gray-200 dark:border-gray-800 pb-6">
              <div className="inline-flex p-4 bg-green-100 dark:bg-green-900/30 rounded-full mb-4">
                <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Perfect Match Found!
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Based on your symptoms, here are the best specialists for you.
              </p>
            </div>

            {/* User Input */}
            <div className="bg-linear-to-br from-purple-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border border-purple-100 dark:border-gray-700 rounded-2xl p-4 mt-6">
              <div className="flex items-start gap-3">
                <Brain className="w-5 h-5 text-[#3F3693] shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold text-[#3F3693] mb-1">
                    Your Input:
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300 italic">
                    "{input}"
                  </p>
                </div>
              </div>
            </div>

            {/* Doctor List */}
            <div className="space-y-4 mt-8">
              <h4 className="font-semibold text-gray-900 dark:text-white flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3F3693]" />
                Recommended Doctors
              </h4>
              {suggestedDoctors.map((doctor, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 hover:border-[#3F3693] rounded-2xl p-5 transition-all hover:shadow-[0_6px_20px_rgba(63,54,147,0.15)] cursor-pointer group"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-linear-to-br from-[#3F3693] to-purple-600 rounded-full flex items-center justify-center text-white font-semibold text-lg">
                        {i + 1}
                      </div>
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white group-hover:text-[#3F3693] transition-colors">
                          {doctor.name}
                        </h5>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {doctor.specialty}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="flex items-center gap-1 mb-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {doctor.rating}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        {doctor.experience}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-6">
              <Button className="flex-1 bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#322c7c] hover:to-purple-700 text-white py-5 rounded-xl font-semibold shadow-lg">
                Book Appointment
              </Button>
              <Button
                onClick={() => {
                  setShowResults(false);
                  setInput("");
                }}
                variant="outline"
                className="flex-1 border-2 border-[#3F3693] text-[#3F3693] hover:bg-[#3F3693]/10 py-5 rounded-xl font-semibold"
              >
                New Search
              </Button>
            </div>

            {/* Footer Note */}
            <div className="text-center pt-6 border-t border-gray-200 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 flex items-center justify-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                All doctors are verified and licensed professionals.
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
