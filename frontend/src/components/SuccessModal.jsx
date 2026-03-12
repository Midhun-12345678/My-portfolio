import React, { useEffect, useState } from 'react';
import { Check, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
      // Trigger animation after a tiny delay to ensure CSS transition works
      setTimeout(() => setIsAnimating(true), 10);
      
      // Auto-close after 3.5 seconds
      const timer = setTimeout(() => {
        setIsAnimating(false);
        setTimeout(() => {
          setIsVisible(false);
          onClose();
        }, 300);
      }, 3500);

      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 flex items-center justify-center z-50 transition-opacity duration-300 ${isAnimating ? 'opacity-100' : 'opacity-0'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
      <div className={`transform transition-all duration-300 ${isAnimating ? 'scale-100 opacity-100' : 'scale-90 opacity-0'}`}>
        <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 max-w-sm mx-auto text-center shadow-2xl">
          {/* Checkmark Animation */}
          <div className="flex justify-center mb-6">
            <div className={`relative w-20 h-20 flex items-center justify-center transition-all duration-500 ${isAnimating ? 'scale-100' : 'scale-0'}`}>
              {/* Outer circle */}
              <div className={`absolute inset-0 rounded-full border-2 border-cyan-400 transition-all duration-700 ${isAnimating ? 'scale-100' : 'scale-0'}`}></div>
              
              {/* Inner filled circle */}
              <div className={`absolute inset-0 rounded-full bg-cyan-400/20 transition-all duration-700 ${isAnimating ? 'scale-100' : 'scale-0'}`}></div>
              
              {/* Checkmark */}
              <div className={`transition-all duration-700 ${isAnimating ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
                <Check size={40} className="text-cyan-400 font-bold" strokeWidth={3} />
              </div>
            </div>
          </div>

          {/* Success Message */}
          <h3 className="text-2xl font-bold text-white mb-2">
            Message Sent Successfully!
          </h3>
          <p className="text-gray-400 mb-6">
            Thanks for reaching out. I'll get back to you as soon as possible.
          </p>

          {/* Close Button */}
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setIsVisible(false);
                onClose();
              }, 300);
            }}
            className="inline-flex items-center justify-center px-6 py-2 bg-cyan-400 hover:bg-cyan-500 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105"
          >
            Close
          </button>

          {/* Close Icon Button */}
          <button
            onClick={() => {
              setIsAnimating(false);
              setTimeout(() => {
                setIsVisible(false);
                onClose();
              }, 300);
            }}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
