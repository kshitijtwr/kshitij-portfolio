import { FaReact, FaJs, FaPhp, FaTools } from "react-icons/fa";

export default function Skills() {
  const skillCategories = [
    {
      title: "Mobile Development",
      icon: <FaReact className="text-primary-custom text-2xl" />,
      skills: ["React Native", "Redux", "Ionic"],
      bgColor: "bg-primary-custom/10",
      textColor: "text-primary-custom",
    },
    {
      title: "Frontend",
      icon: <FaJs className="text-secondary-custom text-2xl" />,
      skills: ["JavaScript", "HTML5", "CSS3"],
      bgColor: "bg-secondary-custom/10",
      textColor: "text-secondary-custom",
    },
    {
      title: "Backend",
      icon: <FaPhp className="text-accent-custom text-2xl" />,
      skills: ["PHP", "MySQL", "CodeIgniter"],
      bgColor: "bg-accent-custom/10",
      textColor: "text-accent-custom",
    },
    {
      title: "Tools & Platforms",
      icon: <FaTools className="text-gray-600 text-2xl" />,
      skills: ["VS Code", "Git", "WordPress"],
      bgColor: "bg-gray-600/10",
      textColor: "text-gray-600",
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Expertise in modern technologies and frameworks for building scalable mobile and web applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className={`w-12 h-12 ${category.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                {category.icon}
              </div>
              <h3 className="font-semibold text-gray-900 mb-3">{category.title}</h3>
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className={`inline-block ${category.bgColor} ${category.textColor} px-3 py-1 rounded-full text-sm mr-2 mb-2`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
