export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-24 h-1 bg-primary-custom mx-auto"></div>
        </div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {/* Software development team working on mobile applications */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600" 
              alt="Software development team collaboration" 
              className="rounded-xl shadow-lg w-full h-auto"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Passionate Mobile App Developer & Team Leader</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              With over 10 years of experience in the IT industry, I specialize in designing, developing, and deploying 
              cutting-edge mobile applications using React Native, Redux, and Ionic. Currently serving as a Lead Consultant 
              at Xebia IT Architects, I lead cross-functional teams in delivering innovative solutions for enterprise clients.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              My expertise spans across the full development lifecycle, from initial concept to deployment and maintenance. 
              I've had the privilege of working on high-profile projects including YES BANK's mobile banking application 
              and various government initiatives, consistently delivering solutions that exceed client expectations.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-primary-custom">10+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-2xl font-bold text-secondary-custom">50+</div>
                <div className="text-sm text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
