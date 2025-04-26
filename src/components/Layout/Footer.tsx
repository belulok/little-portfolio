import React from 'react';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-neutral-950 text-white py-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-display font-bold mb-4">
              <span className="text-primary-400">Port</span>folio
            </h3>
            <p className="text-neutral-400 max-w-xs">
              Creating innovative solutions and pushing the boundaries of technology through creative coding and problem-solving.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-neutral-400 hover:text-primary-400 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-400 hover:text-primary-400 transition-colors">About</a></li>
              <li><a href="#experience" className="text-neutral-400 hover:text-primary-400 transition-colors">Experience</a></li>
              <li><a href="#hackathons" className="text-neutral-400 hover:text-primary-400 transition-colors">Hackathons</a></li>
              <li><a href="#contact" className="text-neutral-400 hover:text-primary-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-neutral-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:hello@example.com" className="hover:text-primary-400 transition-colors">
                  hello@example.com
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Me</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-2 rounded-full text-neutral-400 hover:text-primary-400 hover:bg-neutral-700 transition-colors"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-2 rounded-full text-neutral-400 hover:text-primary-400 hover:bg-neutral-700 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-neutral-800 p-2 rounded-full text-neutral-400 hover:text-primary-400 hover:bg-neutral-700 transition-colors"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-neutral-800 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
          <p className="text-neutral-500 text-sm mt-2 md:mt-0">
            Designed & Built with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;