'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Home, RefreshCcw } from 'lucide-react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global Error:', error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#3F3693]/10 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

      <div
        className="relative z-10 text-center px-6"
      >
        {/* Icon */}
        <div
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-2xl bg-linear-to-br from-[#3F3693] to-purple-600 flex items-center justify-center shadow-xl">
            <AlertTriangle className="w-10 h-10 text-white animate-pulse" />
          </div>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
          Something went wrong
        </h1>

        <p className="text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          We encountered an unexpected error while processing your request.  
          Don’t worry — we’re on it! You can try again or head back home.
        </p>

        {/* Error Info (optional, hidden on mobile) */}
        {error?.message && (
          <p className="hidden md:block text-sm text-gray-400 mb-10 max-w-lg mx-auto italic">
            Error: {error.message}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <Button
            onClick={() => reset()}
            className="bg-linear-to-r from-[#3F3693] to-purple-600 hover:from-[#342d7a] hover:to-purple-700 text-white px-8 py-6 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all group"
          >
            <RefreshCcw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
            Try Again
          </Button>

          <Button
            asChild
            variant="outline"
            className="border-2 border-[#3F3693] text-[#3F3693] hover:bg-purple-50 px-8 py-6 text-base font-semibold rounded-xl transition-all group"
          >
            <Link href="/">
              <Home className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
