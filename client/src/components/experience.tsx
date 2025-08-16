import { Calendar, Award } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Lead Consultant",
      company: "Xebia IT Architects India Pvt Ltd",
      period: "Oct 2020 - Present",
      description: "Leading mobile application development projects using React Native, Redux, and Ionic. Collaborating with cross-functional teams in Agile environments for planning, estimation, and execution. Responsible for program design, coding, testing, development, and documentation.",
      isCurrentRole: true,
      award: "Sirius Award for Best Techie 2023"
    },
    {
      title: "Hybrid Mobile App Developer",
      company: "Ecifm Solutions Pvt. Ltd.",
      period: "Jun 2019 - Aug 2020",
      description: "Worked on YES BANK's mobile banking application using React Native, Redux, and JavaScript. Developed critical features including fingerprint authentication, fund transfer capabilities, and bill payment functionality.",
      isCurrentRole: false
    },
    {
      title: "Software Developer",
      company: "Infogain India Pvt. Ltd.",
      period: "Dec 2018 - Mar 2019",
      description: "Developed software applications using PHP, MySQL, CodeIgniter, and WordPress. Implemented data crawling solutions for various client projects.",
      isCurrentRole: false
    },
    {
      title: "Software Developer",
      company: "Triazine Software Pvt. Ltd.",
      period: "Jun 2016 - Nov 2018",
      description: "Developed web applications using PHP, MySQL, CodeIgniter, and WordPress. Specialized in data crawling and web scraping solutions.",
      isCurrentRole: false
    },
    {
      title: "Software Developer",
      company: "BookingDiva Pvt. Ltd.",
      period: "Jul 2015 - May 2016",
      description: "Developed web applications using PHP, MySQL, CodeIgniter, and WordPress. Implemented data crawling solutions.",
      isCurrentRole: false
    },
    {
      title: "PHP Programmer",
      company: "Techsaga Infosystems",
      period: "Jun 2013 - Jun 2015",
      description: "Developed web applications using PHP, MySQL, CodeIgniter, and WordPress.",
      isCurrentRole: false
    }
  ];

  return (
    <section id="experience" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto"></div>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
          
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={index} className="relative md:ml-16">
                <div className={`absolute -left-8 w-4 h-4 rounded-full border-4 border-white shadow hidden md:block ${
                  experience.isCurrentRole ? 'bg-primary-custom' : 'bg-gray-300'
                }`}></div>
                <div className={`p-6 rounded-xl border shadow-sm ${
                  experience.isCurrentRole 
                    ? 'bg-gradient-to-r from-primary-custom/5 to-secondary-custom/5 border-primary-custom/10'
                    : 'bg-white border-gray-200'
                }`}>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{experience.title}</h3>
                      <p className={`font-semibold ${
                        experience.isCurrentRole ? 'text-primary-custom' : 'text-secondary-custom'
                      }`}>
                        {experience.company}
                      </p>
                    </div>
                    <div className="text-sm text-gray-500 mt-2 md:mt-0 flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {experience.period}
                    </div>
                  </div>
                  <p className="text-gray-600 leading-relaxed">
                    {experience.description}
                  </p>
                  {experience.award && (
                    <div className="mt-4 flex items-center text-accent-custom">
                      <Award className="h-4 w-4 mr-2" />
                      <span className="text-sm font-semibold">{experience.award}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
