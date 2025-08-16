import { Download, MapPin, Award } from "lucide-react";

export default function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/resume.pdf'; // This would need to be added to public folder
    link.download = 'Kshitij_Tiwari_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="pt-20 pb-16 bg-gradient-to-br from-primary/5 to-secondary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <div className="mb-8">
            {/* Professional avatar */}
            <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary-custom to-secondary-custom flex items-center justify-center text-white text-4xl font-bold shadow-lg">
              KT
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Kshitij <span className="text-primary-custom">Tiwari</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-4 animate-fade-in">
            Lead Consultant & Mobile App Developer
          </p>
          <p className="text-lg text-gray-500 mb-8 max-w-3xl mx-auto animate-fade-in">
            Experienced IT Professional with 10+ years of expertise in React Native, Redux, and Ionic. 
            Building innovative mobile solutions for enterprise and fintech clients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in">
            <button
              onClick={scrollToContact}
              className="bg-primary-custom text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-custom/90 transition-colors shadow-lg"
            >
              Get In Touch
            </button>
            <button
              onClick={downloadResume}
              className="border border-primary-custom text-primary-custom px-8 py-3 rounded-lg font-semibold hover:bg-primary-custom/5 transition-colors flex items-center gap-2"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </button>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 text-gray-500 animate-fade-in">
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-2" />
              <span>Kanpur, India</span>
            </div>
            <div className="flex items-center">
              <Award className="h-4 w-4 mr-2 text-accent-custom" />
              <span>Sirius Award Winner 2023</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
