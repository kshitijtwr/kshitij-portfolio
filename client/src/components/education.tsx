import type { CSSProperties } from "react";
import { GraduationCap, Calendar, School } from "lucide-react";

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      title: "Bachelor of Technology in Information Technology",
      school: "Kanpur Institute of Technology, Kanpur, India",
      period: "2008 - 2012",
      result: "65% (First Class)",
    },
    {
      icon: School,
      title: "Higher Secondary (12th Grade)",
      school: "Pt. RPM Inter College",
      period: "2006 - 2008",
      result: "65% (First Class)",
    },
    {
      icon: School,
      title: "High School (10th Grade)",
      school: "Pt. RPM Inter College",
      period: "2005 - 2006",
      result: "78% (First Class)",
    },
  ];

  return (
    <section className="py-20 section-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <div className="section-rule mx-auto"></div>
        </div>
        <div className="mx-auto max-w-3xl space-y-5">
          {education.map((item, index) => (
            <div key={item.title} className="stagger-item card-lift glass-panel rounded-lg p-8" style={{ "--stagger": index } as CSSProperties & Record<"--stagger", number>}>
              <div className="flex items-start space-x-4">
                <div className="w-16 h-16 bg-primary-custom/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="text-primary-custom text-2xl" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-primary-custom font-semibold mb-2">{item.school}</p>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-gray-600">
                    <div className="flex items-center mb-2 sm:mb-0">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>{item.period}</span>
                    </div>
                    <div className="flex items-center">
                      <span>{item.result}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
          </div>
        </div>
    </section>
  );
}
