import { GraduationCap, Calendar, Percent } from "lucide-react";

export default function Education() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto"></div>
        </div>
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-primary-custom/5 to-secondary-custom/5 p-8 rounded-xl border border-primary-custom/10">
            <div className="flex items-start space-x-4">
              <div className="w-16 h-16 bg-primary-custom/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <GraduationCap className="text-primary-custom text-2xl" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Bachelor of Technology in Information Technology</h3>
                <p className="text-primary-custom font-semibold mb-2">Kanpur Institute of Technology, Kanpur, India</p>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                  <div className="flex items-center mb-2 sm:mb-0">
                    <Calendar className="h-4 w-4 mr-2" />
                    <span>2008 - 2012</span>
                  </div>
                  <div className="flex items-center">
                    <Percent className="h-4 w-4 mr-2" />
                    <span>65% (First Class)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
