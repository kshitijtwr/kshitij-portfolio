import { Star, Building, Landmark, Users, ShoppingCart } from "lucide-react";

export default function Projects() {
  const projects = [
    {
      title: "Iris by YES BANK",
      category: "Banking",
      description: "Led development of YES BANK's mobile banking application with fingerprint login, fund transfer, UPI integration, and bill payment functionality.",
      technologies: ["React Native", "Redux", "Biometric Auth"],
      image: "https://images.unsplash.com/photo-1563207153-f403bf289096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-primary-custom/10 text-primary-custom",
      featured: true
    },
    {
      title: "Services On The Go!",
      category: "Enterprise",
      description: "Mobile application for IBM TRIRIGA® helping workers create work orders, report time, manage inventory, and perform field inspections.",
      technologies: ["React Native", "IBM TRIRIGA", "Field Operations"],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-secondary-custom/10 text-secondary-custom",
      featured: false
    },
    {
      title: "Indraprastha Gas (IGL)",
      category: "Utilities",
      description: "Application for India's leading natural gas distribution company enabling agents to track domestic and commercial connections with offline capabilities.",
      technologies: ["Offline Support", "Data Sync", "Field App"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-accent-custom/10 text-accent-custom",
      featured: false
    },
    {
      title: "Raj Mines Application",
      category: "Government",
      description: "Platform for Rajasthan government to track coal mines and monitor coal production, transportation, and distribution processes.",
      technologies: ["Government", "Mining", "Tracking"],
      icon: <Landmark className="text-4xl text-primary-custom" />,
      categoryColor: "bg-green-100 text-green-700",
      featured: false
    },
    {
      title: "Vasundhara Raje App",
      category: "Gov Tech",
      description: "Bilingual platform for Rajasthan government enabling direct communication with citizens and efficient problem resolution.",
      technologies: ["Bilingual", "Citizen Services", "Communication"],
      icon: <Users className="text-4xl text-secondary-custom" />,
      categoryColor: "bg-purple-100 text-purple-700",
      featured: false
    },
    {
      title: "Domino's Platform",
      category: "E-commerce",
      description: "Developed pizza ordering platform with extensive customization options for crust types, toppings, and delivery preferences.",
      technologies: ["E-commerce", "Customization", "Food Tech"],
      image: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      categoryColor: "bg-red-100 text-red-700",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Showcasing key projects that demonstrate expertise in mobile banking, enterprise solutions, and government applications
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition-shadow">
              {project.image ? (
                <img 
                  src={project.image} 
                  alt={`${project.title} interface`}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="bg-gradient-to-r from-primary-custom/10 to-secondary-custom/10 h-48 flex items-center justify-center">
                  {project.icon}
                </div>
              )}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <h3 className="text-xl font-bold text-gray-900 flex-1">{project.title}</h3>
                  <span className={`ml-auto px-2 py-1 rounded text-xs font-semibold ${project.categoryColor}`}>
                    {project.category}
                  </span>
                </div>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.featured && (
                  <div className="flex items-center text-primary-custom">
                    <Star className="h-4 w-4 mr-1" />
                    <span className="text-sm font-semibold">Featured Project</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
