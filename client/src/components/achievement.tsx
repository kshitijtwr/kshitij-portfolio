import { Trophy } from "lucide-react";

export default function Achievement() {
  return (
    <section className="relative overflow-hidden py-16">
      <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-accent-custom/10 via-primary-custom/10 to-secondary-custom/10" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center animate-rise">
          <div className="inline-flex items-center bg-white/84 rounded-full px-6 py-3 shadow-sm mb-6 backdrop-blur">
            <Trophy className="text-accent-custom text-2xl mr-3" />
            <span className="text-xl font-bold text-gray-900">Recognition</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sirius Award for Best Techie 2023
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Honored by XEBIA IT Architects for outstanding technical contributions, 
            leadership excellence, and innovative solutions in mobile application development.
          </p>
        </div>
      </div>
    </section>
  );
}
