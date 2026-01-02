import React from 'react';
import { Heart } from 'lucide-react';
import { profileData } from '../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2 text-gray-400">
            <span>Built with</span>
            <Heart size={16} className="text-cyan-400 fill-cyan-400" />
            <span>by {profileData.name}</span>
          </div>
          
          <p className="text-gray-500 text-sm">
            © {currentYear} {profileData.name}. All rights reserved.
          </p>
          
          <div className="text-gray-600 text-xs">
            <span className="text-cyan-400 font-mono">AI/ML Engineer</span> | Building the future with intelligent automation
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
