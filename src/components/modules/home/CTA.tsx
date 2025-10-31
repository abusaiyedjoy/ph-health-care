"use client";

import Image from "next/image";

export default function AIVisualizationSection() {
  return (
    <section className="relative overflow-hidden pt-12 pb-24">
      <div className="container mx-auto px-4 text-center space-y-16">
        {/* Header */}
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Intelligent Care Network
          </h2>
          <p className="text-gray-600 text-lg">
            Our AI engine connects patient data, doctors, and insights through
            an intelligent neural network — ensuring precise and personalized
            healthcare recommendations.
          </p>
        </div>
        {/* Layered Cards Animation */}
        <div className="relative flex justify-center items-center mt-10">
          {/* Main Layer */}
          <div className="relative w-[80%] md:w-[60%] h-[350px] md:h-[400px] bg-white rounded-3xl shadow-2xl border border-gray-100 flex items-center justify-center">
            <div className="p-6">
              <Image
                src="/health.jpg"
                alt="AI Network"
                fill
                className="mx-auto object-cover rounded-3xl"
                priority
              />
            </div>
          </div>
          {/* Layer 1 */}
          <div className="absolute w-[80%] md:w-[60%] h-[350px] md:h-[400px] bg-gray/70 rounded-3xl md:border border-gray-200 shadow-2xl  translate-y-6 translate-x-6"></div>

          {/* Layer 2 */}
          <div className="absolute w-[80%] md:w-[60%] h-[350px] md:h-[400px] bg-gray/70 rounded-3xl md:border border-gray-200 shadow-xl -translate-y-6 -translate-x-6"></div>
        </div>
      </div>
    </section>
  );
}
