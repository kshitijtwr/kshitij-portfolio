import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="py-20 section-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="section-rule mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ready to discuss your next mobile application project? Let's connect and explore how we can work together.
          </p>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="animate-rise">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="group flex items-center rounded-lg p-2 transition-colors hover:bg-white/70">
                  <div className="w-12 h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <Mail className="text-primary-custom" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Email</p>
                    <a 
                      href="mailto:tiwarikshitij@gmail.com" 
                      className="text-gray-900 font-semibold hover:text-primary-custom transition-colors"
                    >
                      tiwarikshitij@gmail.com
                    </a>
                  </div>
                </div>
                <div className="group flex items-center rounded-lg p-2 transition-colors hover:bg-white/70">
                  <div className="w-12 h-12 bg-secondary-custom/10 rounded-lg flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <Phone className="text-secondary-custom" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm mb-1">Phone</p>
                    <div className="flex flex-col space-y-1">
                      <a 
                        href="tel:+917652030421" 
                        className="text-gray-900 font-semibold hover:text-secondary-custom transition-colors"
                        aria-label="Primary Phone Number"
                      >
                        +91 7652030421
                      </a>
                      <a 
                        href="tel:+919415477930" 
                        className="text-gray-900 font-semibold hover:text-secondary-custom transition-colors"
                        aria-label="Secondary Phone Number"
                      >
                        +91 9415477930
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group flex items-center rounded-lg p-2 transition-colors hover:bg-white/70">
                  <div className="w-12 h-12 bg-accent-custom/10 rounded-lg flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <MapPin className="text-accent-custom" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">Location</p>
                    <p className="text-gray-900 font-semibold">Kanpur, Uttar Pradesh, India</p>
                  </div>
                </div>
                <div className="group flex items-center rounded-lg p-2 transition-colors hover:bg-white/70">
                  <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mr-4 transition-transform group-hover:scale-110">
                    <FaLinkedin className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">LinkedIn</p>
                    <a 
                      href="https://linkedin.com/in/kshitij-tiwari/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-900 font-semibold hover:text-blue-600 transition-colors"
                    >
                      linkedin.com/in/kshitij-tiwari/
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Let's Connect */}
            <div className="animate-rise-delay-1">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <div className="glass-panel rounded-lg p-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary-custom/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <MessageCircle className="text-primary-custom text-2xl" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Ready to Start Your Project?</h4>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    I'm always excited to discuss new mobile app development opportunities. Whether you need React Native expertise, 
                    iOS/Android native bridge development, or consultation on your existing project, I'm here to help.
                  </p>
                  <div className="space-y-4">
                    <a 
                      href="mailto:tiwarikshitij@gmail.com?subject=Project Discussion"
                      className="btn-primary-glow block w-full rounded-lg px-6 py-3 font-semibold text-white"
                    >
                      Send Email
                    </a>
                    <a 
                      href="tel:+917652030421"
                      className="btn-outline-glow block w-full rounded-lg border border-primary-custom/30 px-6 py-3 font-semibold text-primary-custom"
                    >
                      Call Now
                    </a>
                    <a 
                      href="https://linkedin.com/in/kshitij-tiwari/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-outline-glow block w-full rounded-lg border border-blue-600/30 px-6 py-3 font-semibold text-blue-600"
                    >
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-500">
                  Typically responds within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Quick Contact Cards */}
        <div className="max-w-4xl mx-auto mt-16">
          <div className="grid md:grid-cols-3 gap-6">
            <a 
              href="mailto:tiwarikshitij@gmail.com"
              target="_blank" 
              rel="noopener noreferrer"
              className="card-lift glass-panel rounded-lg p-6 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-primary-custom/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-primary-custom/20 transition-colors">
                  <Mail className="text-primary-custom" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Me</h4>
                <p className="text-sm text-gray-600">Quick response guaranteed</p>
              </div>
            </a>
            <a 
              href="tel:+917652030421"
              className="card-lift glass-panel rounded-lg p-6 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-secondary-custom/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary-custom/20 transition-colors">
                  <Phone className="text-secondary-custom" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Call Me</h4>
                <p className="text-sm text-gray-600">Direct consultation</p>
              </div>
            </a>
            <a 
              href="https://linkedin.com/in/kshitij-tiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="card-lift glass-panel rounded-lg p-6 group"
            >
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-600/10 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-600/20 transition-colors">
                  <FaLinkedin className="text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">LinkedIn</h4>
                <p className="text-sm text-gray-600">Professional network</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
