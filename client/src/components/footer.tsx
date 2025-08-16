import { Mail, Phone } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Kshitij Tiwari</h3>
          <p className="text-gray-400 mb-6">Lead Consultant & Mobile App Developer</p>
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="mailto:tiwarikshitij@gmail.com" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Mail className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/kshitij-tiwari/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="text-xl" />
            </a>
            <a 
              href="tel:+917652030421" 
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Phone className="text-xl" />
            </a>
          </div>
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm">
              © 2024 Kshitij Tiwari. All rights reserved. | Built with modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
