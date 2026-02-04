import React from 'react';
import { Award, Calendar } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { certificationsData } from '../data/mock';

const Certifications = () => {
  return (
    <section id="certifications" className="py-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Certifications & <span className="text-cyan-400">Credentials</span>
          </h2>
          <div className="w-20 h-1 bg-cyan-400 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and specialized training in AI/ML technologies
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert) => (
            <Card
              key={cert.id}
              className="bg-gray-900 border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 group"
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="bg-cyan-400/10 p-3 rounded-lg group-hover:bg-cyan-400/20 transition-colors">
                    <Award className="text-cyan-400" size={24} />
                  </div>
                  <div className="flex items-center text-gray-400 text-sm">
                    <Calendar size={14} className="mr-1" />
                    {cert.date}
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors mb-2">
                  {cert.title}
                </h3>
                
                <p className="text-gray-400 text-sm">
                  {cert.issuer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
