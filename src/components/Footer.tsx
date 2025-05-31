import React from 'react';
import { Link } from 'react-router-dom';
import { socialLinks } from '@/lib/data';
import { Github, Linkedin, Twitter, Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer: React.FC = () => {
  // Function to get the correct icon component based on platform
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      case 'twitter':
        return <Twitter size={20} />;
      case 'instagram':
        return <Instagram size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 mt-12">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About section */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Bona Bekele</h3>
            <p className="text-white/90 mb-4">
              Full Stack Developer & Creative Professional based in AA, specializing in web development, AI solutions, graphic design, and video editing.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                  aria-label={link.platform}
                >
                  {getIconComponent(link.icon)}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/80 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/resume" className="text-white/80 hover:text-white transition-colors">
                  Resume
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact info */}
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
            <h3 className="font-heading font-bold text-lg mb-4 text-white">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail size={16} className="text-white/80" />
                <span className="text-white/80">bekelebona058@gmail.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={16} className="text-white/80" />
                <span className="text-white/80">+251 (969) 676-523</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={16} className="text-white/80" />
                <span className="text-white/80">Addis Ababa, Arada</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            © {new Date().getFullYear()} Bona Bekele. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;