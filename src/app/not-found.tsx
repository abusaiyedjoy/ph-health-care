'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { HeartPulse, ArrowLeft, Home, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Soft Gradient Background Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3F3693]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div
        className="relative z-10 text-center px-6"
      >
        {/* Logo */}
        <div
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#3F3693] to-purple-600 flex items-center justify-center shadow-xl">
            <HeartPulse className="w-10 h-10 text-white animate-pulse" />
          </div>
        </div>

        {/* Headings */}
        <h1 className="text-6xl md:text-7xl font-extrabold text-gray-900 mb-3">
          4
          <span className="text-[#3F3693] inline-block animate-bounce">0</span>
          4
        </h1>

        <p className="text-xl md:text-2xl text-gray-600 mb-6">
          Oops! The page you’re looking for isn’t here.
        </p>

        <p className="text-gray-500 mb-10 max-w-lg mx-auto leading-relaxed">
          It might have been moved, deleted, or never existed in the first place.
          Let’s help you get back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            asChild
            className="bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#342d7a] hover:to-purple-700 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-[#3F3693] text-[#3F3693] hover:bg-purple-50 px-8 py-6 text-base font-semibold rounded-xl transition-all group"
          >
            <Link href="/search">
              <Search className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
              Search Again
            </Link>
          </Button>
        </div>

        {/* Subtle Footer Link */}
        <div className="mt-12 flex justify-center items-center text-gray-500 gap-2">
          <ArrowLeft className="w-4 h-4" />
          <Link
            href="/"
            className="text-[#3F3693] hover:underline font-semibold"
          >
            Return to CareNest
          </Link>
        </div>
      </div>
    </section>
  );
}
