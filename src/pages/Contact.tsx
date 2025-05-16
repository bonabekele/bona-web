import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import { Mail, MapPin, Phone } from 'lucide-react';
import { profile, socialLinks } from '@/lib/data';
import { Github, Linkedin, Twitter, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  // Function to get the correct icon component based on platform
  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <Github size={24} />;
      case 'linkedin':
        return <Linkedin size={24} />;
      case 'twitter':
        return <Twitter size={24} />;
      case 'instagram':
        return <Instagram size={24} />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-12">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold font-heading mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Fill out the form below and I'll get back to you as soon as possible.
            </p>
          </header>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Contact form */}
            <div className="bg-card rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold font-heading mb-6">Send a Message</h2>
              <ContactForm />
            </div>
            
            {/* Contact info */}
            <div className="bg-muted/30 rounded-lg p-6">
              <h2 className="text-xl font-semibold font-heading mb-6">Contact Information</h2>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Mail className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">{profile.email}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Phone className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">{profile.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <MapPin className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-medium">Location</h3>
                    <p className="text-muted-foreground">{profile.location}</p>
                  </div>
                </div>
                
                <div className="pt-6 border-t border-border">
                  <h3 className="font-medium mb-4">Connect with me</h3>
                  <div className="flex space-x-4">
                    {socialLinks.map((link) => (
                      <a
                        key={link.id}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-card p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                        aria-label={link.platform}
                      >
                        {getIconComponent(link.icon)}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;